import React from 'react';
import prof from '../assets/profile.jpg'
const Profile=()=>{
    return(
        <div className="profile_part">
            <img src={prof} className="profile"/>
            <div className="profile_text">
                <h6>Good morning</h6>
                <h5>Note!</h5>
            </div>
        </div>
    )
}
export default Profile;