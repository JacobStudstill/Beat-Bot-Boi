const { Schema, Types, model } = require('mongoose');
const replySchema = require('./Reply')

const commentSchema = new Schema({
    commentId: { type: Types.ObjectId, default: () => new Types.ObjectId},
    commentBody: { type: String, required: true, maxLength: 500 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: () => Date.now },
    replies: [replySchema],
    upvotes: {type: Number, required: true},
    downvotes: {type: Number, required: true} 
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

commentSchema.virtual('replyCount').get(function () {
    return this.replies.length;
});

// const Comments = model('Comments', commentSchema)
module.exports = commentSchema;