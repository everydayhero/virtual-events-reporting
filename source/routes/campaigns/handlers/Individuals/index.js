import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

const mapState = ({ campaigns }, { params }) => ({
  campaign: campaigns[params.campaignUid]
})

const Individuals = ({ campaign = {} }) => {
  const { individuals = [] } = campaign.attributes || {}

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>URL</th>
          <th>Total funds raised</th>
          <th>Total distance in meters</th>
          <th>Total elevation in meters</th>
        </tr>
      </thead>
      <tbody>
        {individuals.map((individual, index) => (
          <tr key={index}>
            <td>{individual.id}</td>
            <td>{individual.name}</td>
            <td>{individual.url}</td>
            <td>{individual.total_amount_cents}</td>
            <td>{individual.total_distance_in_meters}</td>
            <td>{individual.total_elevation_in_meters}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default compose(
  connect(mapState)
)(Individuals)
