// import React from 'react'
import Auth from '../../utils/auth';
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
import { areOptionsEqual } from '@mui/base';
// import { saveFollowIds, getFollowIds } from '../../utils/localStorage';


const Follow = () => {
  const [users, setUsers] = useState([]);
  console.log(users)
  // create state to hold saved followId values
  // const [savedFollowIds, setSavedFollowIds] = useState([]);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const currentUser = token ? Auth.getProfile().data._id : null;
  console.log(currentUser)
  const [following, setFollowing] = useState(false);
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

  const handleFollow = async (friendId) => {
    console.log('Following button clicked');
       if (!token) {
        console.log('not logged in')
       return false;
        }
    try {
      
      await api.post(`http://localhost:3001/api/users/${currentUser}/friends`, {friendId});
      const updatedUsers = users.map(user => {
        if (user._id === friendId) {
          return {
            ...user,
            friends: [...user.friends, currentUser]
          };
        }
        return user;
      });
      setUsers(updatedUsers);
      
      setFollowing(true);
    } catch (error) {
      console.log('API request failed:', error);
    }
     
  };

//   return (
//     <button onClick={handleFollow}>
//       {isFollowing ? 'Following' : 'Follow'}
//     </button>
//   );
// };
  // useEffect(() => {
  //   return () => saveFollowIds(savedFollowIds);
  // });
  // console.log(savedFollowIds)
  // create function to handle saving a user to our friends
  // const handleFollow = async (userId) => {
    // find the user in users state by the matching id
  //   const followToSave = users.find((user) => user._id === userId);
  //   console.log(followToSave)

    

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     console.log(followToSave._id, currentUser, token)
  //     const response = await followUser(followToSave._id, currentUser, token);
  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     // if user successfully saves to friends list account, save user id to state
  //     setSavedFollowIds([...savedFollowIds, followToSave.userId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  
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
          <Button onClick={() => handleFollow(user._id)}>
          {following || user.friends?.includes(currentUser)
            ? 'Unfollow'
            : 'Follow'}
        </Button>
                    //   <Button
                    //     disabled={user.friends?.some((followerId) => followerId === currentUser)}
                    //     className='btn-block btn-info'
                    //     onClick={() => handleFollow(user._id, token)}>
                    //     {user.friends?.some((followerId) => followerId === currentUser)
                      
                    //       ? 'Unfollow'
                    //       : 'Follow'}
                    //   </Button>
                    )}
          <Button size="small">Check me out</Button>
        </CardActions>
      </Card>
           
          ))}
    </>
  );
}

export default Follow;
  
  
    
