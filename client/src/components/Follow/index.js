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


const Follow = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = token ? Auth.getProfile().data.username : null;
  const [users, setUsers] = useState([]);
  

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

  // // create function to handle saving a book to our database
  // const handleFollow = async (bookId) => {
  //   // find the book in `searchedBooks` state by the matching id
  //   const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const response = await saveBook(bookToSave, token);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     // if book successfully saves to user's account, save book id to state
  //     setSavedBookIds([...savedBookIds, bookToSave.bookId]);
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
          <Button size="small">Follow</Button>
          <Button size="small">Check me out</Button>
        </CardActions>
      </Card>
           
          ))}
    </>
  );
}

export default Follow;
  
  
    
