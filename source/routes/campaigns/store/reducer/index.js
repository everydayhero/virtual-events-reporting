import {
  FETCH_CAMPAIGN,
  FETCH_CAMPAIGN_SUCCESS,
  FETCH_CAMPAIGN_FAILURE
} from '../constants'

const fetchCampaign = (campaigns, params) => {
  const { campaignUid } = params

  return {
    ...campaigns,
    [campaignUid]: {
      ...(campaigns[campaignUid] || {}),
      status: 'fetching'
    }
  }
}

const fetchCampaignSuccess = (campaigns, { campaignUid, data }) => ({
  ...campaigns,
  [campaignUid]: {
    status: 'fetched',
    error: null,
    attributes: data.campaign
  }
})

const fetchCampaignFailure = (campaigns, { campaignUid, error }) => ({
  ...campaigns,
  [campaignUid]: {
    status: 'failed',
    error
  }
})

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    case FETCH_CAMPAIGN:
      return fetchCampaign(state, payload)
    case FETCH_CAMPAIGN_SUCCESS:
      return fetchCampaignSuccess(state, payload)
    case FETCH_CAMPAIGN_FAILURE:
      return fetchCampaignFailure(state, payload)
    default:
      return state
  }
}
