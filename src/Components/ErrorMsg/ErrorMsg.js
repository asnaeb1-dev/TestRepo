import React from 'react';
import './Errormsg.css';

const errorMessage = (props) =>{
    return(
        <div id='error-msg'>
            <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" alt='Error'/>
            <p>{props.message}</p>
        </div>
    )
}

export default errorMessage;