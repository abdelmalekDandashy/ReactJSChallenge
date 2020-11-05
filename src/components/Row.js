import React from 'react';
import ItemMovies from './ItemMovies';

const Row = (props) => {
    
    return (

        
        <div>

            <h1>this is raw comp    </h1>
            <h2 style={{color:'red'}}>{props.title}</h2>
            
            <ItemMovies itemData={props.data}></ItemMovies>
        </div>
    );
};

export default Row;