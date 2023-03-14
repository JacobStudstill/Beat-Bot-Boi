import React, { useState, useEffect } from "react";
import api from '../../api'
import '../../App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'

const DM = ({ currentUser, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async () => {
    try {
      const response = await api.get(`/api/messages/${currentUser._id}/${selectedUser._id}`);
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    try {
      await api.post(`/api/messages/${currentUser._id}/${selectedUser._id}`, {
        senderId: currentUser._id,
        receiverId: selectedUser._id,
        content: newMessage,
      });
      setNewMessage("");
      fetchMessages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Welcome {selectedUser.username}</h2>
      <form className='app__form' >
        <FormControl className='app__formControl' >
          <Input className='app__input' placeholder='Enter a message...' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <IconButton className='app__iconButton' variant='text' color='primary' disabled={!newMessage} onClick={handleSendMessage} type="submit" >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <div key={id} message={message} username={currentUser} />
          ))
        }
      </FlipMove>
      {/* <div>
        {messages.map((message) => (
          <div key={message._id}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div> */}
    </div>
  );
};

export default DM;