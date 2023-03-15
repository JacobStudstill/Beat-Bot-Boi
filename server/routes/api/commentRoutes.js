const router = require('express').Router();
const {
  getComments,
  getCommentById,
  addComment,
  comComment,
  // editComment,
  deleteComment,
  vote,
} = require('../../controllers/comment-controller.js');

// /api/comments
router.route('/').get(getComments)

// /api/comments/:commentId
router.route('/:commentId').get(getCommentById)
// .put(editComment)
.delete(deleteComment);

// /api/comments/:postId
router.route('/:postId').post(addComment)

// /api/comments/:commentId/comments
// router.route('/:commentId/comments').post(comComment)

// /api/comments/:postId/:commentId
router.route('/:postId/:commentId').delete(deleteComment)

// api/comments/:commentId/vote/voteType
router.route('/:commentId/vote/:voteType').put(vote)

module.exports = router;