import React from 'react'
import { withRouter } from 'react-router'

const { keys } = Object

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

const serializeForm = (inputs) => (
  keys(inputs).reduce((acc, inputName) => ({
    ...acc,
    [inputName]: inputs[inputName].value
  }), {})
)

const GetCampaign = ({ router }) => {
  let inputs = {}

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(router, inputs)
    }}>
      <div>
        <label style={{ display: 'block' }}>
          Campaign UID
        </label>
        <input type='text' ref={(elem) => {
          inputs.campaignUid = elem
        }} />
      </div>

      <div>
        <label style={{ display: 'block' }}>
          Threshold metric
        </label>
        <input type='text' ref={(elem) => {
          inputs.thresholdMetric = elem
        }} />
      </div>

      <div>
        <label style={{ display: 'block' }}>
          Threshold value
        </label>
        <input type='text' ref={(elem) => {
          inputs.thresholdValue = elem
        }} />
      </div>

      <button type='submit'>Go!</button>
    </form>
  )
}

export default withRouter(GetCampaign)
