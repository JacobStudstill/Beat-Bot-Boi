const { Schema, model, Types } = require('mongoose');
const commentSchema = require('./Comment')

const replySchema = new Schema({
    replyText: { type: String, required: true, minLength: 1, maxLength: 500 },
    createdAt: { type: Date, default: () => Date.now() },
    username: { type: String, required: true },
    // replies: [replySchema],
    upvotes: {type: Number},
    downvotes: {type: Number} 
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// const Replies = model('Replies', replySchema)
module.exports = replySchema;