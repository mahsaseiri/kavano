import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
const Navigate=()=>{
    return(
        <div className="navigate_part">
            <button><FontAwesomeIcon icon={faAngleLeft}/></button>
            <button>Day</button>
            <button>Week</button>
            <button className="active">Month</button>
            <button><FontAwesomeIcon icon={faAngleRight}/></button>
        </div>
    )
}
export default Navigate;