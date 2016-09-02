import React from 'react'
import { withRouter } from 'react-router'

const { keys } = Object

const serializeForm = (inputs) => (
  keys(inputs).reduce((acc, inputName) => ({
    ...acc,
    [inputName]: inputs[inputName].value
  }), {})
)

const handleSubmit = (router, inputs) => {
  const {
    campaignUid,
    thresholdMetric,
    thresholdValue
  } = serializeForm(inputs)

  router.push({
    pathname: `/campaigns/${campaignUid}`,
    query: {
      threshold_metric: thresholdMetric,
      threshold_value: thresholdValue
    }
  })
}

const GetCampaign = ({ router }) => {
  let inputs = {}

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(router, inputs)
    }}>
      <div>
        <label htmlFor='campaignUid'>
          Campaign UID
        </label>
        <input id='campaignUid' type='text' ref={(elem) => {
          inputs.campaignUid = elem
        }} />
      </div>

      <div>
        <label htmlFor='thresholdMetric'>
          Threshold metric
        </label>
        <select id='thresholdMetric' ref={(elem) => {
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
      </div>

      <div>
        <label htmlFor='thresholdValue'>
          Threshold value
        </label>
        <input
          id='thresholdValue'
          type='number'
          inputMode='numeric'
          min={0}
          step={1}
          ref={(elem) => {
            inputs.thresholdValue = elem
          }}
        />
      </div>

      <button type='submit'>Go!</button>
    </form>
  )
}

export default withRouter(GetCampaign)
