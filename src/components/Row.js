import React from 'react';

const Row = (props) => {
    return (
        <div>
            <h2 style={{color:'red'}}>{props.title}</h2>
            {props.children}
            <div>container</div>
        </div>
    );
};

export default Row;