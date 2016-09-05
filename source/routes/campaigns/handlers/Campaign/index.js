import React from 'react'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { fetchCampaign } from '../../store/actions'
import Nav from '../../components/Nav'
import Filters from '../../components/Filters'
import Content from '../../components/Content'

const handleFilter = (pathname, query, router) => ({
  thresholdMetric,
  thresholdValue,
  fitnessActivitiesType,
  fitnessActivitiesStartAt,
  fitnessActivitiesEndAt
}) => {
  router.push({
    pathname,
    query: {
      ...query,
      threshold_metric: thresholdMetric,
      threshold_value: thresholdValue,
      fitness_activities_type: fitnessActivitiesType,
      fitness_activities_start_at: fitnessActivitiesStartAt,
      fitness_activities_end_at: fitnessActivitiesEndAt
    }
  })
}

const hooks = {
  fetch ({
    dispatch,
    state,
    params
  }) {
    const {
      campaignUid,
      threshold_metric,
      threshold_value,
      fitness_activities_start_at,
      fitness_activities_end_at,
      fitness_activities_type
    } = params

    return dispatch(fetchCampaign({
      campaignUid,
      threshold_metric,
      threshold_value,
      fitness_activities_start_at,
      fitness_activities_end_at,
      fitness_activities_type
    }))
  }
}

const mapState = ({ campaigns }, { params }) => ({
  campaign: campaigns[params.campaignUid]
})

const Campaign = ({
  campaign = {},
  params = {},
  location = {},
  router,
  children
}) => {
  const { query } = location

  return (
    <div>
      <Nav
        campaignUid={params.campaignUid}
        query={location.query}
        status={campaign.status}
        campaign={campaign.attributes}
      />
      <Filters
        onSubmit={handleFilter(location.pathname, query, router)}
        filters={query}
      />
      <Content>
        {children}
      </Content>
    </div>
  )
}

export default compose(
  provideHooks(hooks),
  connect(mapState),
  withRouter
)(Campaign)
