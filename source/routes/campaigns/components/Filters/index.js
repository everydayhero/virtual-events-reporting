import React from 'react'
import Button from '../../../../components/Button'
import styles from './styles'
import { classes } from '../../../../utils/css'

const { keys } = Object

const serializeForm = (inputs) => (
  keys(inputs).reduce((acc, inputName) => ({
    ...acc,
    [inputName]: inputs[inputName].value
  }), {})
)

const handleSubmit = (
  event,
  inputs = {},
  onSubmit = () => {}
) => {
  event.preventDefault()
  onSubmit(serializeForm(inputs))
}

export default ({
  onSubmit: propsOnSubmit,
  filters = {}
}) => {
  let inputs = {}

  return (
    <form className={classes(styles.base)} onSubmit={(e) => { handleSubmit(e, inputs, propsOnSubmit) }}>
      <fieldset className={classes(styles.filter)}>
        <label className={classes(styles.label)} htmlFor='thresholdMetric'>
          Threshold metric
        </label>
        <select
          id='thresholdMetric'
          defaultValue={filters.threshold_metric}
          className={classes(styles.select)}
          ref={(elem) => {
            inputs.thresholdMetric = elem
          }}>
          <option value='distance_in_meters_plus_multiplied_amount_cents'>
            Dollars for Ks
          </option>
          <option value='amount_cents'>
            Donations
          </option>
          <option value='distance_in_meters'>
            Distance in meters
          </option>
          <option value='elevation_in_meters'>
            Elevation in meters
          </option>
        </select>
      </fieldset>

      <fieldset className={classes(styles.filter)}>
        <label className={classes(styles.label)} htmlFor='thresholdValue'>
          Threshold value
        </label>
        <input
          id='thresholdValue'
          defaultValue={filters.threshold_value}
          className={classes(styles.input)}
          type='number'
          placeholder='The virtual "finish line"'
          inputMode='numeric'
          min={0}
          step={1}
          ref={(elem) => {
            inputs.thresholdValue = elem
          }}
        />
      </fieldset>

      <fieldset className={classes(styles.filter)}>
        <label className={classes(styles.label)} htmlFor='fitnessActivitiesType'>
          Fitness activities type
        </label>

        <select
          id='fitnessActivitiesType'
          defaultValue={filters.fitness_activities_type}
          className={classes(styles.select)}
          ref={(elem) => {
            inputs.fitnessActivitiesType = elem
          }}
        >
          <option value='bike'>Bike</option>
          <option value='run'>Run</option>
        </select>
      </fieldset>

      <fieldset className={classes(styles.filter)}>
        <label className={classes(styles.label)}>Fitness activities date range</label>

        <div className={classes(styles.compoundInput)}>
          <input
            id='fitnessActivitiesStartAt'
            defaultValue={filters.fitness_activities_start_at}
            placeholder='YYYY-MM-DD'
            className={classes(styles.input)}
            type='date'
            ref={(elem) => {
              inputs.fitnessActivitiesStartAt = elem
            }}
          />

          <input
            id='fitnessActivitiesEndAt'
            defaultValue={filters.fitness_activities_end_at}
            placeholder='YYYY-MM-DD'
            className={classes(styles.input)}
            type='date'
            ref={(elem) => {
              inputs.fitnessActivitiesEndAt = elem
            }}
          />
        </div>
      </fieldset>

      <div className={classes(styles.actions)}>
        <Button type='submit'>Filter</Button>
      </div>
    </form>
  )
}
