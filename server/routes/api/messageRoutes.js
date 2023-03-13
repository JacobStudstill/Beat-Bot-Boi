const router = require('express').Router();
const {
  openMessages,
  sendMessage,
  deleteMessage
} = require('../../controllers/message-controller');

// /api/messages
router.route('/:senderId/:receiverId').get(openMessages).post(sendMessage);

// /api/messages/:id
router.route('/:messageId').delete(deleteMessage);


// export router so app can use it
module.exports = router;