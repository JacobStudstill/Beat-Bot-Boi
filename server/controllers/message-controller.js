const { Message } = require("../models");
const messageController = {
  // send message
  async sendMessage (req, res) {
    try {
      const message = await Message.create(req.body) 
      res.json(message);
  
    } catch(err) {
      console.error(err)
      res.status(500).json(err);
    }
  },
  
  // delete a message
  async deleteMessage(req, res) {
    try {
      const message = await Message.findOneAndDelete({ _id: req.params.messageId })
      res.json({message: 'Message deleted'});
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get message thread between users
  async openMessages (req, res) {
    try {
      const { senderId, receiverId } = req.params;
       // Find all messages between the sender and receiver where read is false
      await Message.updateMany(
        { senderId: receiverId, receiverId: senderId, read: false },
        { $set: { read: true } }
      ).exec();
      const messages = await Message.find({
        $or: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      }).sort({ sentTime: 1 });
      res.json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = messageController;