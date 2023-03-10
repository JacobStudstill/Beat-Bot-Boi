const router = require('express').Router();
const {
  addReply,
  deleteReply,
  upvoteReply,
  downvoteReply,
} = require('../../controllers/reply-controller.js');

// /api/posts/:postId/comments/:commentId/replies
router.route('/:commentId/replies').post(addReply);

// /api/posts/:postId/comments/:commentId/replies/:replyId
router.route('/:commentId/replies/:replyId').delete(deleteReply)
// .put(upvoteReply).put(downvoteReply);

module.exports = router;