import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { Link } from 'react-router'
import { fetchCampaign } from '../../store/actions'

const hooks = {
  fetch ({
    dispatch,
    state,
    params
  }) {
    const {
      campaignUid,
      threshold_metric,
      threshold_value
    } = params

    return dispatch(fetchCampaign({
      campaignUid,
      threshold_metric,
      threshold_value
    }))
  }
}

const mapState = ({ campaigns }, { params }) => ({
  campaign: campaigns[params.campaignUid]
})

const Campaign = ({ campaign, params, location, children }) => (
  <div>
    <nav>
      <Link to={{
        pathname: `/campaigns/${params.campaignUid}/teams`,
        query: location.query
      }}>
        Teams
      </Link>

      <Link to={{
        pathname: `/campaigns/${params.campaignUid}/individuals`,
        query: location.query
      }}>
        Individuals
      </Link>
    </nav>
    <div>
      {children}
    </div>
  </div>
)

export default compose(
  provideHooks(hooks),
  connect(mapState)
)(Campaign)
