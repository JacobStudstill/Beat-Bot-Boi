// import React from 'react'
import Auth from '../../utils/auth';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import * as React from 'react';
import { useEffect, useState } from 'react';
import api from '../../api'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { followUser } from '../../utils/API';
import { saveFollowIds, getFollowIds } from '../../utils/localStorage';


const Follow = () => {
  const [users, setUsers] = useState([]);
  console.log(users)
  // create state to hold saved followId values
  const [savedFollowIds, setSavedFollowIds] = useState([]);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const currentUser = token ? Auth.getProfile().data._id : null;
  console.log(currentUser)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get('http://localhost:3001/api/users');
        setUsers(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    return () => saveFollowIds(savedFollowIds);
  });
  console.log(savedFollowIds)
  // create function to handle saving a user to our friends
  const handleFollow = async (userId) => {
    // find the user in users state by the matching id
    const followToSave = users.find((user) => user._id === userId);
    console.log(followToSave)

    // get token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log(followToSave._id, currentUser, token)
      const response = await followUser(followToSave._id, currentUser, token);
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if user successfully saves to friends list account, save user id to state
      setSavedFollowIds([...savedFollowIds, followToSave.userId]);
    } catch (err) {
      console.error(err);
    }
  };

  
  return (
    <>
        
        {users.map((user) => (      
        <Card key={user._id} sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </CardContent>
        <CardActions>
        {Auth.loggedIn() && (
                      <Button
                        disabled={user.friends?.some((followerId) => followerId === currentUser)}
                        className='btn-block btn-info'
                        onClick={() => handleFollow(user._id)}>
                        {user.friends?.some((followerId) => followerId === currentUser)
                      
                          ? 'Unfollow'
                          : 'Follow'}
                      </Button>
                    )}
          <Button size="small">Check me out</Button>
        </CardActions>
      </Card>
           
          ))}
    </>
  );
}

export default Follow;
  
  
    
