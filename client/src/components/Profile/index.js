import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

const Profile = () => {
  return (

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

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

    <Grid xs={6}>
      <p>4</p>
    </Grid>

  </Grid>

  );
};

export default Profile;
