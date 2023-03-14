const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    postTitle: { type: String, required: true},
    postLink: { type: String, validate: postValidate},
    postText: { type: String, validate: postValidate},
    // sub: { type: [Types.ObjectId], ref: "Sub" }, or add post _id to Sub determine later
    username: { type: String, required: true },
    comments: { type: [String] },
    tags:{ type: [String], required: true },
    upvotes: { type: [String] },
    downvotes: { type: [String] },
    createdAt: { type: Date, default: () => Date.now() }
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

postSchema.virtual('postUpvotes').get(function () {
    return this.upvotes.length
});

postSchema.virtual('postDownvotes').get(function () {
    return this.downvotes.length
});

//makes sure the user has included a link or text or both
function postValidate(value) {
    if (!this.postLink && !this.postText) {
      throw new Error('At least one of postLink or postText is required');
    } else {
      return true;
    }}

const Post = model('Post', postSchema)
module.exports = Post;