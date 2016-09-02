import React from 'react'
import { withRouter, Link } from 'react-router'

const Show = ({ campaign, params, location }) => (
  <div>
    <nav>
      <Link to={{
        pathname: `/campaigns/${params.campaignUid}/teams`,
        query: location.query
      }}>
        View Teams
      </Link>

      <Link to={{
        pathname: `/campaigns/${params.campaignUid}/individuals`,
        query: location.query
      }}>
        View Individuals
      </Link>
    </nav>
  </div>
)

export default withRouter(Show)
