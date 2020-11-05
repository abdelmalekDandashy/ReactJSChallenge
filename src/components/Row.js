import React from 'react';
import ItemMovies from './ItemMovies';

const Row = (props) => {
    
    return (

        
        <div>

           
          
            
            <ItemMovies itemData={props.data} title={props.title}></ItemMovies>
        </div>
    );
};

export default Row;