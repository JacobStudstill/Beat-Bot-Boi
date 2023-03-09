const { Schema, Types, model } = require('mongoose');
const { use } = require('../routes');
const commentSchema = require('./Comment');
const replySchema = require('./Reply');

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    posts: { type: [String], ref: "Posts" },
    friends: { type: [Types.ObjectId], ref: "User" },
    comments: [commentSchema, replySchema]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('userCommentCount').get(function () {
    return this.comments.length
});

const Users = model('Users', userSchema)
module.exports = Users;