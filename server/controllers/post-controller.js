const { User, Post } = require("../models");

const postController = {
  // Get all posts
  async getPosts(req, res) {
    try {
      const posts = await Post.find({})
      res.json(posts)
    } catch (err) {
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
    } catch (err) {
      res.status(500).json(err)
    }
  },
  // create a new post
  async createPost(req, res) {
    try {
      const post = await Post.create(req.body)
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { posts: post._id } },
        { new: true });
      res.json(post);

    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  },

  // delete a post
  async deletePost(req, res) {
    try {
      const post = await Post.findOneAndDelete({ _id: req.params.postId })
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $pull: { posts: post._id } },
        { new: true });
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async vote(req, res) {
    try {
      const post = await Post.findById(req.params.postId);
  
      // confirm post exists
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      //checks if the user has already voted
      const username = req.body.username;
      const voteType = req.params.voteType;
      if (post['upvotes'].includes(username) || post['downvotes'].includes(username)) {
        return res.status(400).json({ message: `User ${username} has already voted on this post` });
      }
  
      //adds username to appropriate vote array
      post[voteType].push(username);
      await post.save();
  
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
}

module.exports = postController;

