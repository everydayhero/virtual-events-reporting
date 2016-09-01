import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

const mapState = ({ campaigns }, { params }) => ({
  campaign: campaigns[params.campaignUid]
})

const Teams = ({ campaign = {} }) => {
  const { teams = [] } = campaign.attributes || {}

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
          <th>Total threshold value</th>
          <th>Passed threshold at</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={index}>
            <td>{team.id}</td>
            <td>{team.name}</td>
            <td>{team.url}</td>
            <td>{team.total_amount_cents}</td>
            <td>{team.total_distance_in_meters}</td>
            <td>{team.total_elevation_in_meters}</td>
            <td>{team.total_threshold_value}</td>
            <td>{team.passed_threshold_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default compose(
  connect(mapState)
)(Teams)
