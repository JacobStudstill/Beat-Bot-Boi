const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    senderId: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true
    },
    receiverId: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true
    },
    messageText: {
      type: String,
      required: true
    },
    sentAt: {
      type: Date,
      default: Date.now
    },
    read: {
      type: Boolean,
      default: false
    }
});

// Initialize model
const Message = model('Message', messageSchema);
module.exports = Message;