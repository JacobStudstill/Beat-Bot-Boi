const { Schema, Types, model } = require('mongoose');
// const { use } = require('../routes');
const commentSchema = require('./Comment');
const replySchema = require('./Reply');

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, validate: {
        validator: function(v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
    }, },
    password: { type: String, required: true },
    posts: { type: [Types.ObjectId], ref: "Post" },
    friends: { type: [Types.ObjectId], ref: "User" },
    // subs: { type: [Types.ObjectId], ref: "Sub" },
    comments: { type: [Types.ObjectId], ref: "Comment" }
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

const User = model('User', userSchema)
module.exports = User;