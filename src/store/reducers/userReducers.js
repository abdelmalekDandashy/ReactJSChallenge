import {GET_MOVIES, GET_COMEDYMOVIES, GET_CRIME_MOVIES} from '../types'

const initialState = {
    actionMovies:[],
    ComedyMovies:[],
    CrimeMovies:[],
    loading:true ,
    showCrimeMovies:''

   
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
//    console.log(state);
    switch(action.type){

        case GET_MOVIES:
        return {
        
      ...state,
      actionMovies:[ 
         ...state.actionMovies=action.payload
        ],
        loading:[...state.loading=false]
        
        }
        // eslint-disable-next-line no-duplicate-case
        case GET_COMEDYMOVIES:
        return {
        
      ...state,
      ComedyMovies:[
        ...state.ComedyMovies=action.payload
        ],
        loading:[...state.loading=false]
        
        }

        // eslint-disable-next-line no-duplicate-case
        case GET_CRIME_MOVIES:
            return {
            
          ...state,
          CrimeMovies:[
            ...state.CrimeMovies=action.payload
            ],
            loading:[...state.loading=false]
            
            }
        
        default: return state
        
    }
 
    
}
