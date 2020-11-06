import React from 'react';
import { connect } from 'react-redux'
import './MovieDetails.css'


const base_URL = "https://image.tmdb.org/t/p/original"


const MovieDetails = (props) => {
    let image = props.data.movieDetails.movieDetails.poster_path;
    console.log(props.data)
    return (
        <div className='container' style={{ backgroundImage: `url(${base_URL}${image})` }} >

            
            <div className=' background' style={{ backgroundImage: `url(${base_URL}${image})` }}></div>
            <h1 className='content name'>{props.data.movieDetails.movieDetails.name} </h1>
            <h3 className='content rating'>Rating: {props.data.movieDetails.movieDetails.vote_average} </h3>
            <h4 className='content desc'>{props.data.movieDetails.movieDetails.overview}</h4>

        </div>
    );
};

const mapStateToProps = (state) => {
    //alert('Data' + state.movies.actionMovies)
    return { data: state }
}
export default connect(mapStateToProps)(MovieDetails)
