import axios from 'axios'
import {
  FETCH_CAMPAIGN,
  FETCH_CAMPAIGN_SUCCESS,
  FETCH_CAMPAIGN_FAILURE,
  SET_CAMPAIGN_SORTED_BY
} from '../constants'

const API_BASE = `${process.env.SUPPORTER_URL || 'https://everydayhero-staging.com'}/api/v3/prerelease/metrics`

const fetchCampaignFailure = (payload) => ({
  type: FETCH_CAMPAIGN_FAILURE,
  payload
})

const fetchCampaignSuccess = (payload) => ({
  type: FETCH_CAMPAIGN_SUCCESS,
  payload
})

export const fetchCampaign = ({
  campaignUid,
  ...params
}) => (dispatch) => {
  dispatch({
    type: FETCH_CAMPAIGN,
    payload: {
      campaignUid,
      params
    }
  })

  axios(`${API_BASE}/campaigns/${campaignUid}`, {
    params
  }).then(({ data }) => {
    dispatch(fetchCampaignSuccess({
      campaignUid,
      data,
      params
    }))
  }).catch((error) => {
    dispatch(fetchCampaignFailure({
      campaignUid,
      error,
      params
    }))
    return Promise.reject(error)
  })
}

export const setCampaignSortedBy = (payload) => ({
  type: SET_CAMPAIGN_SORTED_BY,
  payload
})
