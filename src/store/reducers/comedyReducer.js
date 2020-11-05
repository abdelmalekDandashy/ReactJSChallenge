import {
  GET_MOVIES,
  GET_COMEDYMOVIES,
  GET_CRIME_MOVIES
} from '../types'

const initialState = {
 
  comedyMovies: [],
  crimeMovies: [],
  loading: true,
  showCrimeMovies: ''


}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  //  console.table(state);
  var newState = {}
 
  switch (action.type) {
    // case GET_MOVIES:
    //   // console.log(action.payload)
    //   newState = {
    //     ...newState,
    //     actionMovies : action.payload
    //   }
    
    //   break;
    // case GET_MOVIES:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //   };

      case GET_COMEDYMOVIES:
      newState = {
        ...newState,
        comedyMovies : action.payload
      }
      
      break;

      // case GET_CRIME_MOVIES:
      //   newState = {
      //     ...newState,
      //     CrimeMovies : [...action.payload]
      //   }
      //      alert(newState.CrimeMovies);
      //   break;
      
      
    default:
      return state;
  }
  return newState;
}