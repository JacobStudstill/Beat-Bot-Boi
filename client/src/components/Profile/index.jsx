import React from 'react';
import './profile.css';
import profilep from '../../assets/profilep.jpeg'
import cover from '../../assets/cov.jpeg'
import Home from '../Home'
import Share from '../Share/index'
import SideBar from '../Sidebar/index'

// import Grid from '@mui/material/Grid'; // Grid version 1
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

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
        {/* <Grid container spacing={0} columns={32}>

    <Grid xs={8} display='flex' alignItems='center' direction='column'>
      <p>
    <Button variant="contained">Post</Button>
    </p>

    <p>
    <Button variant="contained">DM</Button>
    </p>

    <p>
    <Button variant="contained">Spotify</Button>
    </p>
    
    </Grid>

    <Grid xs={8}>
      <p>Bio</p>
      <p>Friends?</p>
      <p>Comment History?</p>
    </Grid>

    <Grid xs={8}>
      <p>Posts</p>
      <p>Marketplace</p>
    </Grid>

    <Grid xs={8} display='flex' alignItems='center' direction='column'>
      
      <p>
      <Button variant="contained">Top Genres</Button>
      </p>

      <p>
      <Button variant="contained">Shows</Button>
      </p>

      <p>
      <Button variant="contained">Communities</Button>
      </p>

    </Grid>

  </Grid> */}
      </div>
    
  );
};

export default Profile;