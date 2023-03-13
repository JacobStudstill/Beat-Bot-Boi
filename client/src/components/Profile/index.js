import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Profile = () => {
  return (

    <Grid container spacing={0} columns={32}>

    <Grid xs={8}>
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

    <Grid xs={8}>
      
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

  </Grid>
  );
};

export default Profile;
