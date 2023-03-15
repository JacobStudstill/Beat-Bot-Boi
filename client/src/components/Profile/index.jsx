import React from 'react';
import './profile.css';
import profilep from '../../assets/profilep.jpeg'
import cover from '../../assets/cov.jpeg'
import Home from '../Home'
import Share from '../Share/index'
import SideBar from '../Sidebar/index'
import Auth from '../../utils/auth';


// import Grid from '@mui/material/Grid'; // Grid version 1
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const Profile = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = token ? Auth.getProfile().data.username : null;
  const userInit = user ? user[0] : null;
  return (

      <div className="profile" >
        <div className="profileContent">
          <div className="profRight">
            <div className="profCover">
              <img className="cover" src={cover} alt="cover"/>
              <img className="profileP" src={profilep} alt="user"/>
            </div>
            <div className="info">
            <h4 className="username">{user}</h4>
            {/* <span className="bio">This is my profile page</span> */}
            </div>
          </div>
          <div>
            <Share />
            <SideBar />
          </div>
        </div>
      </div>
    
  );
};

export default Profile;