const router = require('express').Router();
const {
  getComments,
  getCommentById,
  addComment,
  editComment,
  deleteComment,
  vote,
} = require('../../controllers/comment-controller.js');

// /api/comments
router.route('/').get(getComments).post(addComment);

// /api/comments/:id
router.route('/:postId').get(getCommentById)
// .put(editComment)
.delete(deleteComment);

// /api/comments/:postId/comments
router.route('/:postId/comments').post(addComment)

// /api/comments/:postId/:commentId
router.route('/:postId/:commentId').delete(deleteComment)

// api/comments/:commentId/vote/voteType
router.route('/:commentId/vote/:voteType').put(vote)

module.exports = router;