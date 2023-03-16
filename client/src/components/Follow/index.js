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

const Follow = () => {
  // all user states
  const [users, setUsers] = useState([]);
  // updated user states
  const [upUser, setUpUser] = useState();
  console.log(users)
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  // userId for routes
  const currentUser = token ? Auth.getProfile().data._id : null;
  // currentUser data to access friend list
  const loggedInUser = token ? Auth.getProfile().data : null;
  console.log(loggedInUser)
  console.log(currentUser)
  console.log('Token:', token)
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
  }, [upUser, following]);

  const handleFollow = async (friendId) => {
    console.log('handleFollow called');
    console.log('friendId:', friendId);
    console.log('currentUser:', currentUser);
    console.log('following:', following);
    console.log('Following button clicked');
       if (!token) {
        console.log('not logged in')
       return false;
        }
        
        try {
      if (!loggedInUser?.friends?.includes(friendId)) {
        const { data } = await api.post(`http://localhost:3001/api/users/${currentUser}/friends`, {friendId}, {token});
        console.log(data)
        
        const updatedUser = users.find(user => user._id === currentUser);
        setUpUser(updatedUser);
      
        const isFollowing = updatedUser?.friends?.includes(friendId);
          setFollowing(isFollowing);
          setUsers(prevUsers => {
        
            const updatedUsers = prevUsers.map(user => {
          if (user._id === currentUser) {
            return {
              ...user,
              friends: data.friends,
            };
          }
          return user;
          });

        return updatedUsers;
      });

      } else {
        const { unfollowData } = await api.delete(`http://localhost:3001/api/users/${currentUser}/friends`, {friendId}, {token});
        const unfollowUser = users.find(user => user._id === currentUser);
          setUpUser(unfollowUser);
      const isNotFollowing = unfollowUser?.friends?.includes(friendId);
        setFollowing(isNotFollowing);

      setUsers(prevUsers => {
        const unfollowedUsers = prevUsers.map(user => {
          if (user._id === currentUser) {
            return {
              ...user,
              friends: unfollowData.friends,
            };
          }
          return user;
        });
        return unfollowedUsers;
      });
      } 
   
    } catch (error) {
        console.log(error);
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
        {token && (
          <Button onClick={() => handleFollow(user._id)}>
          { following 
            ? 'Unfollow'
            : 'Follow'}
            </Button>
                    )}
          {/* <Button size="small">Unfollow</Button> */}
        </CardActions>
      </Card>
          ))}
    </>
  );
}

export default Follow;
  
  
    
