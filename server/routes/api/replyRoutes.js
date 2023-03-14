const router = require('express').Router();
const {
  addReply,
  deleteReply,
  upvoteReply,
  downvoteReply,
} = require('../../controllers/reply-controller.js');

// /api/replies/:postId/:commentId
router.route('/:postId/:commentId').post(addReply);

// /api/replies/:postId/:commentId/:replyId
router.route('/:postId/:commentId/:replyId').delete(deleteReply)
// .put(upvoteReply).put(downvoteReply);

module.exports = router;

