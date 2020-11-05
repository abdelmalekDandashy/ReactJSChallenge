import { combineReducers } from 'redux'
import userReducer from './userReducers'
import comedyReducer from './comedyReducer'

export default combineReducers({
  movies: userReducer,
  comedyMovies : comedyReducer
})