import { createServer } from 'boiler-room-runner'
import routes from './routes'
import createStore from './store'
import { createLocals, basepath } from './shared'

const store = createStore()

export default ({ assets }) => {
  const app = createServer({
    assets,
    basepath,
    createLocals,
    routes,
    store
  })

  app.staticRoutes = ['/']

  return app
}
