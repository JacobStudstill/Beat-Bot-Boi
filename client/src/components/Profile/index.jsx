import React from 'react';
import './profile.css';
import profilep from '../../assets/profilep.jpeg'
import cover from '../../assets/cov.jpeg'
import Home from '../Home'
import Share from '../Share/index'
import SideBar from '../Sidebar/index'

const Profile = () => {
  return (

      <div className="profile" >
        <div className="profileContent">
          <div className="profRight">
            <div className="profCover">
              <img className="cover" src={cover} alt="cover"/>
              <img className="profileP" src={profilep} alt="user"/>
            </div>
            <div className="info">
            <h4 className="username">Ashlynn Wood</h4>
            <span className="bio">This is my profile page</span>
            </div>
          </div>
          <div className="sharePosts">
            <Share />
            <Home />
            <SideBar />
          </div>
        </div>
        
      </div>
    
  );
};

export default Profile;