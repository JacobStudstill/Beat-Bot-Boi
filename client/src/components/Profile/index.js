import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

const Profile = () => {
  return (

    <Grid container spacing={0} columns={32}>

    <Grid xs={6}>
      <p>1</p>
    </Grid>

    <Grid xs={6}>
      <p>2</p>
    </Grid>

    <Grid xs={6}>
      <p>3</p>
    </Grid>

    <Grid xs={6}>
      <p>4</p>
    </Grid>

  </Grid>

  );
};

export default Profile;
