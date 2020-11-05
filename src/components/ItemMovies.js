import React from 'react';
import "./Row.css";
 const base_URL= "https://image.tmdb.org/t/p/original/"
const ItemMovies = (props) => {

    console.log(props.itemData);


    return (
        <div className="row">
              <h2 style={{color:'red'}}>{props.title}</h2>
          <div className="row__posters">
            {props.itemData.map(e =>(
              <img 
              className="row__poster"
              src={`${base_URL}${e.poster_path}`}
               alt={e.name} 
              />
            ))}
            </div>
        </div>
    );
};

export default ItemMovies;