import React from 'react'
import routes from './routes'
import { createClient } from 'boiler-room-runner'
import { render } from 'react-dom'
import createStore from './store'
import { createLocals, basepath } from './shared'

const store = createStore()

const App = createClient({
  basepath,
  createLocals,
  routes,
  store
})

render(<App />, document.getElementById('mount'))
