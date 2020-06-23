import React from 'react';
import './Header.css';

const header = (props) => {
    return(
        <div id='header'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default header;