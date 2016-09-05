import React from 'react'
import Button from '../../../../components/Button'
import Input, { Label } from '../../../../components/Input'
import { withRouter } from 'react-router'

const { keys } = Object

const serializeForm = (inputs) => (
  keys(inputs).reduce((acc, inputName) => ({
    ...acc,
    [inputName]: inputs[inputName]
  }), {})
)

const handleSubmit = (router, inputs) => {
  const { campaignUid } = serializeForm(inputs)

  router.push({
    pathname: `/campaigns/${campaignUid}/teams`
  })
}

const GetCampaign = ({ router }) => {
  let inputs = {}

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(router, inputs)
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <Label htmlFor='campaignUid'>
          Campaign UID
        </Label>
        <Input id='campaignUid' type='text' onChange={(event) => {
          inputs.campaignUid = event.target.value
        }} />
      </div>

      <Button type='submit'>Go!</Button>
    </form>
  )
}

export default withRouter(GetCampaign)
