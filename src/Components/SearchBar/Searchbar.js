import React from 'react';
import './Searchbar.css';

const searchBar = (props) => {
    return(
        <div id="search-bar">
            <form id="ifsc-code-form" onSubmit={props.onSubmitChange}>
                <input type='text' placeholder='Enter IFSC code' name='search_box'/>
                <br/>
                
                <button>Search</button>
                <button id='refresh' onClick={props.refresh} type='button'>Refresh</button>
            </form>
        </div>
    );
}

export default searchBar;

