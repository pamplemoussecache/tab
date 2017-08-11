/* eslint-env jest */

import getWidget from '../getWidget'
import BaseWidgetModel from '../widget/BaseWidgetModel'
import UserWidgetModel from '../userWidget/UserWidgetModel'
import getFullWidget from '../getFullWidget'
import {
  getMockUserContext
} from '../../test-utils'

jest.mock('../../databaseClient')
jest.mock('../getFullWidget')
const userContext = getMockUserContext()

describe('getWidget', () => {
  it('works as expected', async () => {
    const userId = userContext.id
    const widgetId = 'ab5082cc-151a-4a9a-9289-06906670fd4e'
    const baseWidget = new BaseWidgetModel({
      id: widgetId,
      name: 'Bookmarks',
      position: 1
    })
    const userWidget = new UserWidgetModel({
      userId: userId,
      widgetId: widgetId,
      data: {
        foo: 'bar'
      },
      enabled: true
    })
    const getBaseWidgetSpy = jest.spyOn(BaseWidgetModel, 'get')
      .mockImplementationOnce(() => {
        return baseWidget
      })
    const getUserWidgetSpy = jest.spyOn(UserWidgetModel, 'get')
      .mockImplementationOnce(() => {
        return userWidget
      })
    const mockFullWidget = { 'a': 'fake-widget' }
    getFullWidget.mockImplementationOnce(() => mockFullWidget)

    const fetchedWidget = await getWidget(userContext, userId, widgetId)
    expect(getUserWidgetSpy).toHaveBeenCalledWith(userContext, userId, widgetId)
    expect(getBaseWidgetSpy).toHaveBeenCalledWith(userContext, widgetId)
    expect(getFullWidget).toHaveBeenCalledWith(userWidget, baseWidget)
    expect(fetchedWidget).toEqual(mockFullWidget)
  })
})
