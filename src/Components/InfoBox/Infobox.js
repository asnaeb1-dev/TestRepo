import React from 'react';
import './Infobox.css'

const infoBox = (props) => {
    return(
        <div id='info-box'>
            <h3>{props.info.IFSC}</h3>
            <div id='pics-block'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/768px-UPI-Logo-vector.svg.png' alt='UPI'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/IMPS-Logo.png' alt='IMPS'/>
            </div>
            <p>Bank: {props.info.BANK}</p>
            <p>Branch: {props.info.BRANCH}</p>
            <p>City: {props.info.CITY}</p>
            <p>District: {props.info.DISTRICT}</p>
            <p>Address: {props.info.ADDRESS}</p>
            <p>Contact Details: {props.info.CONTACT}</p>
            <p>MICR: {props.info.MICR}</p>
        </div>
    )
}

export default infoBox;