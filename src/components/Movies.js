import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../store/actions/actionMovies'
import {getComedyMovies} from '../store/actions/comedyMovies'
import {getCrimeMovies} from '../store/actions/crimeMovies'
import bla from '../requests/requests'
import Row from './Row'


 class movies extends Component {
  
    componentWillMount(){        
        this.props.getMovies()
        this.props.getComedyMovies()
        // this.props.getCrimeMovies()
    }

    render() {        
         return(
            <div>
             <Row   data={this.props.data.movies.actionMovies}> </Row> 
              <Row  data={this.props.data.comedyMovies.comedyMovies}> </Row>
              
              </div>

         )
         
       
    
    }
 
 }
const mapStateToProps  = (state) => {
    //alert('Data' + state.movies.actionMovies)
   return {  data:state}
}

export default connect(mapStateToProps, {getMovies, getComedyMovies,getCrimeMovies})(movies)
