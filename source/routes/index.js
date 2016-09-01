import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './root/handlers/App'
import Home from './root/handlers/Home'
import { default as campaignRoutes } from './campaigns'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />

    {campaignRoutes}
  </Route>
)
