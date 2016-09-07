import { stringify } from 'qs'
import axios from 'axios'
import {
  FETCH_CAMPAIGN,
  FETCH_CAMPAIGN_SUCCESS,
  FETCH_CAMPAIGN_FAILURE,
  SET_CAMPAIGN_SORTED_BY
} from '../constants'

const API_BASE = `${process.env.SUPPORTER_URL || 'https://everydayhero.com'}/api/v3/prerelease/metrics`

const nest = ({
  fitness_activities_type: fitnessActivitiesType,
  fitness_activities_start_at: fitnessActivitiesStartAt,
  fitness_activities_end_at: fitnessActivitiesEndAt,
  fitness_activities_include_manual: fitnessActivitiesIncludeManual = false,
  ...rest
}) => ({
  ...rest,
  filter: {
    fitness_activities: {
      type: fitnessActivitiesType,
      start_at: fitnessActivitiesStartAt,
      end_at: fitnessActivitiesEndAt,
      manual: fitnessActivitiesIncludeManual ? [true, false] : false
    }
  }
})

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

  axios(`${API_BASE}/campaigns/${campaignUid}?${stringify(nest(params))}`).then(({ data }) => {
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
