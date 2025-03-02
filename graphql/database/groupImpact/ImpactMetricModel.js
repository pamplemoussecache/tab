import Model from '../base/Model'
import types from '../fieldTypes'
import { IMPACT_METRIC } from '../constants'

/*
 * @extends Model
 */
class ImpactMetric extends Model {
  static get name() {
    return IMPACT_METRIC
  }

  static get hashKey() {
    return 'id'
  }

  static get schema() {
    const self = this
    return {
      id: types
        .string()
        .length(9)
        .required()
        .description(`ID for the ImpactMetric entity. Nanoid.`),
      charityId: types
        .string()
        .required()
        .description(`the charity id that maps to the charity table`),
      dollarAmount: types
        .number()
        .integer()
        .required()
        .description(
          `the dollar amount (in micro USDs) required to achieve an instance of this ImpactMetric`
        ),
      description: types
        .string()
        .required()
        .description(
          `Markdown. Long-form description of the ImpactMetric. Is usually a few sentences/paragraph about the impact metric.`
        ),
      whyValuableDescription: types
        .string()
        .required()
        .description(
          `Markdown. A shorter version of the description that answers "why this impact matters".'`
        ),
      metricTitle: types
        .string()
        .required()
        .description(
          `Metric title. Should be placeable in a sentence. Example: '1 home visit'`
        ),
      impactTitle: types
        .string()
        .required()
        .description(
          `Impact action title. Should be a longer title with a verb as well as a noun. Example: 'Provide 1 visit from a community health worker'`
        ),
      active: types
        .boolean()
        .default(self.fieldDefaults.active)
        .description(
          `Whether or not this ImpactMetric is eligible to be selected for a Group`
        ),
    }
  }

  static get fieldDefaults() {
    return {
      active: true,
    }
  }
}

ImpactMetric.register()

export default ImpactMetric
