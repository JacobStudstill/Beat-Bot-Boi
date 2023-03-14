import React, { useState, useEffect } from "react";
import api from '../../api'
// import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
// import FlipMove from 'react-flip-move'
// import SendIcon from '@material-ui/icons/Send'
// import IconButton from '@material-ui/core/IconButton'
import { Modal, Button, Form } from 'react-bootstrap';

const MessengerModal = ({ senderId, receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await api.get(`/api/messages/${senderId}/${receiverId}`);
      setMessages(res.data);
    };
    fetchMessages();
  }, [senderId, receiverId]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const res = await api.post(`/api/messages/${senderId}/${receiverId}`, {
        messageText: newMessage,
        senderId,
        receiverId,
      });
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Messenger
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Messenger</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {messages.map((message) => (
            <div key={message._id}>
              <p>{message.messageText}</p>
            </div>
          ))}
          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={3}
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Type your message here..."
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendMessage}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MessengerModal;


// const DM = ({ currentUser, selectedUser }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   const fetchMessages = async () => {
//     try {
//       const response = await api.get(`/api/messages/${currentUser._id}/${selectedUser._id}`);
//       setMessages(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const handleSendMessage = async () => {
//     try {
//       await api.post(`/api/messages/${currentUser._id}/${selectedUser._id}`, {
//         senderId: currentUser._id,
//         receiverId: selectedUser._id,
//         content: newMessage,
//       });
//       setNewMessage("");
//       fetchMessages();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Welcome {selectedUser.username}</h2>
//       <form className='app__form' >
//         <FormControl className='app__formControl' >
//           <Input className='app__input' placeholder='Enter a message...' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
//           <IconButton className='app__iconButton' variant='text' color='primary' disabled={!newMessage} onClick={handleSendMessage} type="submit" >
//             <SendIcon />
//           </IconButton>
//         </FormControl>
//       </form>

//       <FlipMove>
//         {
//           messages.map(({ id, message }) => (
//             <div key={id} message={message} username={currentUser} />
//           ))
//         }
//       </FlipMove>
//       {/* <div>
//         {messages.map((message) => (
//           <div key={message._id}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
//         <button onClick={handleSendMessage}>Send</button>
//       </div> */}
//     </div>
//   );
// };

// export default DM;