import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

const Profile = () => {
  return (

    <Grid container spacing={0} columns={32}>

    <Grid xs={8}>
      <p>Post</p>
      <p>DM</p>
      <p>Spotify</p>
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
      <p>Most Listened Genres</p>
      <p>Shows</p>
      <p>Communities</p>
    </Grid>

  </Grid>
  );
};

export default Profile;
