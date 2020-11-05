import { combineReducers } from 'redux'
import actionReducer from './actionReducers'
import comedyReducer from './comedyReducer'
import crimeReducer from './crimeReducer'

export default combineReducers({
  actionMovies: actionReducer,
  comedyMovies : comedyReducer,
  crimeMovies : crimeReducer

})