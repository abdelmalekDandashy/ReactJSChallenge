import React from 'react';

const ItemMovies = (props) => {

    console.log(props.itemData);

    const data = props.itemData.map((e)=>{
    return <h1>{e.original_name}</h1>
    })
    return (
        <div>
            
            <h1>this is itemmovies data</h1>
            {data}
        </div>
    );
};

export default ItemMovies;