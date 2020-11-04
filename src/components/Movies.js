import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../store/actions/actionMovies'
import {getComedyMovies} from '../store/actions/comedyMovies'
import {getCrimeMovies} from '../store/actions/crimeMovies'
import Row from './Row'
import moviesURLs from '../requests/requests'

 class movies extends Component {
     state={
        showCrimeMovies:''
     }
     
    componentWillMount(){
        this.props.getMovies()
        this.props.getComedyMovies()
        this.props.getCrimeMovies()
    }
    componentDidMount(){


        console.log(this.props.movies.movies);
        if (this.props.movies.movies.loading === true){
            setTimeout(() => {
           
    const showCrimeMovies = this.props.movies.movies.CrimeMovies.map((e)=>{
            return <div key={e.id}>{e.original_name}</div>
            })
            }, 500)};
        
    }
    

    render() {
       
       
        // console.log(this.props.movies);

        // const movies = this.props.movies;
        // let DisplayRow= moviesURLs.map(e=>{
        //     return <Row title={e.title} key={e.title}>
        //            {movies.movies.movies.map(m=>{ 
        //               return <h1>{m.original_name}</h1> 
        //            })} 
        //     </Row>
        // })
       
       
        
        // console.log(movies.movies)
        
        // if (movies.movies.loading === false){
            
            
            
        // }
       
        // if (loading.loading === false){
        //     console.log(movies)
        //     display =  movies.moves.movies.map((u) =>
        //      <h1 key={Math.random()}>{u.name}</h1>
             
        //     )
          
          
        // }
         
        
        // let displayextra = movies.movies.movies.map(e=>{
        //     return <h1 key={e.id}>{e.name}</h1>
        // })
        


        

        
        return (
            <div>
                {this.showCrimeMovies}
         
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({  movies:state})

export default connect(mapStateToProps, {getMovies, getComedyMovies,getCrimeMovies})(movies)
