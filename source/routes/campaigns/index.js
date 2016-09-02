import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Campaign from './handlers/Campaign'
import Show from './handlers/Show'
import Teams from './handlers/Teams'
import Individuals from './handlers/Individuals'

export default (
  <Route
    path='/campaigns/:campaignUid'
    component={Campaign}>

    <IndexRoute
      component={Show}
    />

    <Route
      path='/campaigns/:campaignUid/teams'
      component={Teams}
    />

    <Route
      path='/campaigns/:campaignUid/individuals'
      component={Individuals}
    />
  </Route>
)

export { default as reducer } from './store/reducer'
