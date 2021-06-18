import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
const Header=()=>{
    return(
        <div className="header_part">
            <h2>June 2021</h2>
            <div className="search_part">
            <FontAwesomeIcon className="search_icon" icon={faSearch}/>
            <input className="search_input" type="text" placeholder="search"/>
            </div>
        </div>
    )
}
export default Header;