import moment from 'moment'
import { isNil, isBoolean, isFunction, isNumber, isString } from 'lodash/lang'
import callRedis from '../../utils/redis'
import CharityModel from '../charities/CharityModel'

const getEstMoneyRaisedPerTab = () => {
  // TODO: env var
  return 0.01
}

const WrongCampaignConfigError = (field, expectedType) => {
  return new Error(
    `The campaign config requires the field "${field}" to be type "${expectedType}".`
  )
}

const createCampaignConfiguration = input => {
  const {
    campaignId,
    charityId = null,
    countNewUsers = false,
    countTabsOpened = false,
    content,
    endContent,
    goal,
    showCountdownTimer,
    showHeartsDonationButton,
    showProgressBar,
    time,
  } = input

  // Makes sure the campaignId is set.
  if (isNil(campaignId) || !isString(campaignId)) {
    throw WrongCampaignConfigError('campaignId', 'string')
  }

  // Make sure the "content" value is set properly.
  if (isNil(content)) {
    throw WrongCampaignConfigError('content', 'object')
  }
  if (isNil(content.titleMarkdown)) {
    throw WrongCampaignConfigError('content.titleMarkdown', 'string')
  }
  if (isNil(content.descriptionMarkdown)) {
    throw WrongCampaignConfigError('content.descriptionMarkdown', 'string')
  }

  // Make sure "endContent" is set properly if it's defined.
  if (!isNil(endContent)) {
    if (isNil(endContent.titleMarkdown)) {
      throw WrongCampaignConfigError('endContent.titleMarkdown', 'string')
    }
    if (isNil(endContent.descriptionMarkdown)) {
      throw WrongCampaignConfigError('endContent.descriptionMarkdown', 'string')
    }
  }

  // If the "charityId" is set, make sure it's a string.
  if (!isNil(charityId)) {
    if (!isString(charityId)) {
      throw WrongCampaignConfigError('charityId', 'string')
    }
  }

  // Make sure various required flags are set.
  if (!isBoolean(showCountdownTimer)) {
    throw WrongCampaignConfigError('showCountdownTimer', 'boolean')
  }
  if (!isBoolean(showHeartsDonationButton)) {
    throw WrongCampaignConfigError('showHeartsDonationButton', 'boolean')
  }
  if (!isBoolean(showProgressBar)) {
    throw WrongCampaignConfigError('showProgressBar', 'boolean')
  }

  // Make sure the time is set with valid ISO timestamps.
  if (isNil(time)) {
    throw WrongCampaignConfigError('time', 'object')
  }
  if (isNil(time.start)) {
    throw WrongCampaignConfigError('time.start', 'string')
  }
  if (isNil(time.end)) {
    throw WrongCampaignConfigError('time.end', 'string')
  }
  if (!moment(time.start).isValid()) {
    throw new Error('The "time.start" value must be a valid ISO timestamp.')
  }
  if (!moment(time.end).isValid()) {
    throw new Error('The "time.end" value must be a valid ISO timestamp.')
  }

  // If we are showing a hearts donation button, we need a charity.
  if (showHeartsDonationButton && isNil(charityId)) {
    throw new Error(
      'The campaign config requires a configured "charityId" when "showHeartsDonationButton" is set to true.'
    )
  }

  // If we are showing a progress bar, we need a goal.
  if (showProgressBar && isNil(goal)) {
    throw new Error(
      'The campaign config requires a configured "goal" when "showProgressBar" is set to true.'
    )
  }

  const redisKeyNewUsers = `campaign:${campaignId}:newUsers`
  const redisKeyTabsOpened = `campaign:${campaignId}:tabsOpened`

  // Try to get the count of tabs opened during this campaign.
  // Default to zero if the item doesn't exist or fails to
  // fetch.
  const getTabCount = async () => {
    let count = 0
    try {
      count = await callRedis({
        operation: 'GET',
        key: redisKeyTabsOpened,
      })
      if (!count) {
        count = 0
      }
    } catch (e) {
      // Redis will log errors.
    }
    return count
  }

  // Try to get the number of new users during this campaign.
  // Default to zero if the item doesn't exist or fails to
  // fetch.
  const getNewUserCount = async () => {
    let count = 0
    try {
      count = await callRedis({
        operation: 'GET',
        key: redisKeyNewUsers,
      })
      if (!count) {
        count = 0
      }
    } catch (e) {
      // Redis will log errors.
    }
    return count
  }

  // Get an estimate of money raised for this campaign.
  const getEstimatedMoneyRaised = async () => {
    // Base money raised on number of tabs opened multiplied
    // by the estimated money raised per tab.
    const estMoneyRaisedPerTab = getEstMoneyRaisedPerTab()
    const tabs = await getTabCount()
    return tabs * estMoneyRaisedPerTab
  }

  /**
   * Return whether the current time is between the campaign's start and
   * end times.
   * @return {Boolean}
   */
  const isActive = () => {
    const timeInfo = time
    return moment().isAfter(timeInfo.start) && moment().isBefore(timeInfo.end)
  }

  let configuredGoal = null
  if (!isNil(goal)) {
    const {
      // The singular name of the things the goal is tracking (e.g. "new user",
      // "heart", "meal")
      impactUnitSingular,
      // The plural name of the things the goal is tracking (e.g. "new users",
      // "hearts", "meals")
      impactUnitPlural,
      // The verb we use to describe what we're doing with the impact units
      // (e.g., "recruited", "donated", "raised")
      impactVerbPastTense,
      // The internal source we are using to calculate the number of impact
      // units. One of: "hearts", "newUsers", "moneyRaised"
      numberSource,
      // The target number of impact units this campaign could raise
      targetNumber,
      /**
       * An optional function to modify the value of the "numberSource" before
       * using it as the current number value. For example, we can use this to
       * change the estimated money raised into a measure of "meals given" by
       * multiplying the money raised by the cost per meal.
       * @param {Number} val – the current value from the "numberSource"; e.g.,
       *   the estimated money raised for this campaign.
       * @return {Number} The transformed number
       */
      transformNumberSourceValue,
    } = goal

    const HEARTS = 'hearts'
    const MONEY_RAISED = 'moneyRaised'
    const NEW_USERS = 'newUsers'
    const validNumberSourceVals = [HEARTS, MONEY_RAISED, NEW_USERS]

    // Validate the goal config.
    if (!isString(impactUnitSingular)) {
      throw WrongCampaignConfigError('goal.impactUnitSingular', 'string')
    }
    if (!isString(impactUnitPlural)) {
      throw WrongCampaignConfigError('goal.impactUnitPlural', 'string')
    }
    if (!isString(impactVerbPastTense)) {
      throw WrongCampaignConfigError('goal.impactVerbPastTense', 'string')
    }
    if (validNumberSourceVals.indexOf(numberSource) === -1) {
      throw new Error(
        `The "goal.numberSource" value must be one of: ${validNumberSourceVals.join(
          ', '
        )}`
      )
    }
    if (!isNumber(targetNumber)) {
      throw WrongCampaignConfigError('goal.targetNumber', 'number')
    }
    if (!isNil(transformNumberSourceValue)) {
      if (!isFunction(transformNumberSourceValue)) {
        throw WrongCampaignConfigError(
          'goal.transformNumberSourceValue',
          'function'
        )
      }
    }

    configuredGoal = {
      targetNumber,
      // TODO: base this on other inputs about how to calculate impact
      getCurrentNumber: async () => {
        // E.g.: if relying on tabs, calculate current number from
        // tab count.
        // if (something) {}
        await getTabCount()
        // If relying on new users, caculate current number from
        // the new user count
        // else if (something) {}
        await getNewUserCount()
        // Can rely on estimated money raised:
        await getEstimatedMoneyRaised()
        // else throw
        return 12.42e6
      },
      impactUnitSingular,
      impactUnitPlural,
      impactVerbPastTense,
    }
  }

  return {
    campaignId,
    getCharityData: async userContext => {
      if (!charityId) {
        return null
      }
      try {
        const charity = await CharityModel.get(userContext, charityId)
        return charity
      } catch (e) {
        throw e
      }
    },
    content,
    ...(endContent && { endContent }),
    ...(configuredGoal && {
      goal: configuredGoal,
    }),
    incrementNewUserCount: async () => {
      // If not counting new users or the campaign is not active, ignore this.
      if (!(countNewUsers && isActive())) {
        return
      }
      try {
        await callRedis({
          operation: 'INCR',
          key: redisKeyNewUsers,
        })
      } catch (e) {
        // Redis will log errors.
      }
    },
    incrementTabCount: async () => {
      // If not counting tabs or the campaign is not active, ignore this.
      if (!(countTabsOpened && isActive())) {
        return
      }
      try {
        await callRedis({
          operation: 'INCR',
          key: redisKeyTabsOpened,
        })
      } catch (e) {
        // Redis will log errors.
      }
    },
    isActive,
    showCountdownTimer,
    showHeartsDonationButton,
    showProgressBar,
    time,
  }
}

export default createCampaignConfiguration
