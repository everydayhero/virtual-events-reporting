import React from 'react'
import Table from '../../components/Table'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'

const mapState = ({ campaigns }, { params }) => ({
  campaign: campaigns[params.campaignUid]
})

const setSortedBy = ({
  uid,
  router,
  query
}) => (attribute) => (
  router.push({
    pathname: `/campaigns/${uid}/individuals`,
    query: {
      ...query,
      sorted_by: attribute
    }
  })
)

const Individuals = ({ campaign = {}, params, location, router }) => {
  const { individuals = [] } = campaign.attributes || {}
  const { campaignUid: uid } = params
  const { query } = location
  const { sorted_by: sortedBy } = query

  return (
    <div>
      <h1>Individuals</h1>

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
        data={individuals}
      />
    </div>
  )
}

export default compose(
  withRouter,
  connect(mapState)
)(Individuals)
