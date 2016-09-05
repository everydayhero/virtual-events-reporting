import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Table from '../../components/Table'
import { H1 } from '../../../../components/Typography'

const mapState = ({ campaigns }, { params }) => ({
  campaign: campaigns[params.campaignUid]
})

const setSortedBy = ({
  uid,
  router,
  query
}) => (attribute) => (
  router.push({
    pathname: `/campaigns/${uid}/teams`,
    query: {
      ...query,
      sorted_by: attribute
    }
  })
)

const Teams = ({ campaign = {}, params, location, router }) => {
  const { teams = [] } = campaign.attributes || {}
  const { campaignUid: uid } = params
  const { query } = location
  const { sorted_by: sortedBy } = query

  return (
    <div>
      <H1>Teams</H1>

      <Table
        campaignUid={params.campaignUid}
        sortedBy={sortedBy}
        setSortedBy={setSortedBy({
          uid,
          router,
          query
        })}
        headers={[
          { attribute: 'id', label: 'ID' },
          { attribute: 'name', label: 'Name' },
          { attribute: 'url', label: 'URL' },
          { attribute: 'total_amount_cents', label: 'Donations in cents' },
          { attribute: 'total_distance_in_meters', label: 'Distance in meters' },
          { attribute: 'total_elevation_in_meters', label: 'Elevation in meters' },
          { attribute: 'total_threshold_value', label: 'Threshold value' },
          { attribute: 'passed_threshold_at', label: 'Passed threshold at' }
        ]}
        data={teams}
      />
    </div>
  )
}

export default compose(
  withRouter,
  connect(mapState)
)(Teams)
