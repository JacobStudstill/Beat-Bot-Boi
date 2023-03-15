import * as React from 'react';
import Auth from '../../utils/auth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import jwt from 'jwt-decode';

// const token = Auth.getToken();
// const decodedToken = jwt(token);
const theme = createTheme();
// const username = decodedToken.data.username;
// console.log(username)

export default function CreatePost() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {};
    data.forEach((value, key) => jsonData[key] = value);
  
    const token = Auth.getToken();
    const decodedToken = jwt(token);
    const username = decodedToken.data.username;
    console.log(username)
  
    jsonData.username = username;
  
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    });
    const result = await response.json();
    console.log(result);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create A New Post
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="postTitle"
                  required
                  fullWidth
                  id="postTitle"
                  label="Post Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="postLink"
                  label="Link URL"
                  name="postLink"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="postText"
                  label="Text"
                  id="postText"
                  multiline
                  rows={4} // adjust this value to your preference
                  inputProps={{
                    maxLength: 500 // set the maximum length to 500 characters
                  }}
                />
              </Grid>              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="tags"
                  label="Tags"
                  name="tags"
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Post
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}