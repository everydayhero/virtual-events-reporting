import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Show from './handlers/Show'
import Teams from './handlers/Teams'
import Individuals from './handlers/Individuals'

export default (
  <Route
    path='/campaigns/:campaignUid'
    component={Show}>

    <IndexRoute
      component={
        () => <div>View by team or individual</div>
      }
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
