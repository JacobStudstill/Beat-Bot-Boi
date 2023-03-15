const { Schema, Types, model } = require('mongoose');

const commentSchema = new Schema({
    parentId: { type: String, required: true},
    commentBody: { type: String, required: true, maxLength: 500 },
    username: { type: String, required: true },
    upvotes: {type: Number},
    downvotes: {type: Number},
    comments: { type: [String] },
    createdAt: { type: Date, default: Date.now }, 
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// commentSchema.virtual('commentUpvotes').get(function () {
//     return this.upvotes.length
// });

// commentSchema.virtual('commentDownvotes').get(function () {
//     return this.downvotes.length
// });

const Comment = model('Comment', commentSchema)
module.exports = Comment;