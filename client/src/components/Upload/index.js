import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Upload() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      file: data.get('file'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Image Upload
            </Typography>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Select File
              </Button>
              Display Chosen Filename Here
              <Button
                type="upload"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Upload
              </Button>
            </Box>
          {/* </Box> */}
        </Grid>
    </ThemeProvider>
  );
}

{/* <Button variant="contained" component="label">
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button>
<IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton> */}