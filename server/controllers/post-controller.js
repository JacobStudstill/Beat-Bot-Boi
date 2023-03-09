const { User, Post } = require("../models");

const postController = {
  // Get all posts
  async getPosts(req, res) {
    try {
      const posts = await Post.find({})
      res.json(posts)
    } catch(err) {
      console.log(err);
      res.status(500);
    }
  },

  // Get single post
 async getPostById(req, res) {
  try {
  const post = await Post.findOne({ _id: req.params.postId })
    .select('-__v')
    if (!post) {
      return res.status(404).json({ message: 'No post with that ID :(' })
      }
    res.json(post)
    } catch(err) {
      res.status(500).json(err)
    }
},
}