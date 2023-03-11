const { Post } = require('../models');

const replyController = {
  // Create a new reply
  async addReply(req, res) {
    try {
      const post = await Post.findOneAndUpdate(
        { _id: req.params.postId }, 
        {$addToSet: { replies: {...req.body, commentId: req.params.commentId} }}, 
        {new: true, runValidators: true });
      res.json(post);
    } catch(err) {
      console.error(err)
      res.status(500).json(err);
    }
  },
    // try {
    //   const { commentId } = req.params;
    //   const reply = await Reply.create({
    //     text: req.body.text,
    //     userId: req.body.userId,
    //   });
    //   const updatedComment = await Comment.findOneAndUpdate(
    //     { _id: commentId },
    //     { $addToSet: { replies: reply._id } },
    //     { new: true }
    //   );
    //   res.json(updatedComment);
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json(err);
    // }
  // },

  // Update an existing reply
  // async updateReply(req, res) {
  //   try {
  //     const { commentId, replyId } = req.params;
  //     const updatedReply = await Reply.findOneAndUpdate(
  //       { _id: replyId },
  //       { $set: req.body },
  //       { new: true }
  //     );
  //     res.json(updatedReply);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json(err);
  //   }
  // },

  // Delete an existing reply
  async deleteReply(req, res) {
    try {
      const post = await Post.findOneAndUpdate(
        { _id: req.params.postId }, 
        {$pull: { replies: req.params.replyId }}, 
        {new: true, runValidators: true});
      res.json({message: 'Reply deleted!'});
    }catch(err){
      res.status(500).json(err);
      }
    }
  //   try {
  //     const { commentId, replyId } = req.params;
  //     const deletedReply = await Reply.findOneAndDelete({ _id: replyId });
  //     const updatedComment = await Comment.findOneAndUpdate(
  //       { _id: commentId },
  //       { $pull: { replies: replyId } },
  //       { new: true }
  //     );
  //     res.json(updatedComment);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json(err);
  //   }
  // },
};

module.exports = replyController;