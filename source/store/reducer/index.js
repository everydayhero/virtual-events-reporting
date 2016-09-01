import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as campaigns } from '../../routes/campaigns'

export default combineReducers({
  campaigns,
  routing
})
