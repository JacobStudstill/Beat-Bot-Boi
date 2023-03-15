const { Comment, Post, User } = require("../models");

const commentController = {
  // Get all comments
  async getComments(req, res) {
    try {
      const comments = await Comment.find({})
      res.json(comments)
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },

  // Get single comment
  async getCommentById(req, res) {
    try {
      const comment = await Comment.findOne({ _id: req.params.commentId })
        .select('-__v')
      if (!comment) {
        return res.status(404).json({ message: 'No comment found :(' })
      }
      res.json(comment)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // add comment to post
  async addComment(req, res) {
    try {
      const comment = await Comment.create(req.body)
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { comments: comment } },
        { new: true });
        
      await Post.findOneAndUpdate(
        { _id: req.params.postId },
        { $push: { comments: comment._id } },
        { new: true });
      res.json(comment);

    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  },
  // // add comment to comment
  // async commentComment(req, res) {
  //   try {
  //     const comment = await Comment.create(req.body)
  //     await User.findOneAndUpdate(
  //       { _id: req.body.userId },
  //       { $push: { comments: comment._id } },
  //       { new: true });

  //     await Comment.findOneAndUpdate(
  //       { _id: req.body.commentId },
  //       { $push: { comments: comment._id } },
  //       { new: true });
  //     res.json(comment);

  //   } catch (err) {
  //     console.error(err)
  //     res.status(500).json(err);
  //   }
  // },

  // delete a comment
  async deleteComment(req, res) {
    try {
      const comment = await Comment.findOneAndDelete({ _id: req.params.commentId })
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $pull: { comments: comment._id } },
        { new: true });
      
      await Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $pull: { comments: comment._id } },
        { new: true });
      
      await Comment.findOneAndUpdate(
        { _id: req.body.commentId },
        { $pull: { comments: comment._id } },
        { new: true });
      res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  async vote(req, res) {
    try {
    const comment = await Comment.findById({_id: req.params.commentId});

      //confirm comment exists
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }

      //checks if the user has already voted
      const username = req.body.username;
      const voteType = req.params.voteType;
      if (comment['upvotes'].includes(username) || comment['downvotes'].includes(username)) {
        return res.status(400).json({ message: `User ${username} has already voted on this comment` });
      }

      //adds username to appropriate vote array
      comment[voteType].push(username);
      await comment.save();

      res.json(comment);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
}

module.exports = commentController;