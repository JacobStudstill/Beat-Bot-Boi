const router = require('express').Router();
const {
  getComments,
  getCommentById,
  addComment,
  comComment,
  // editComment,
  deleteComment,
  vote,
  deleteAllComments
} = require('../../controllers/comment-controller.js');

// /api/comments
router.route('/').get(getComments)

// /api/comments/:commentId
router.route('/:commentId').get(getCommentById)
// .put(editComment)
router.route('/:commentId/:parentId').delete(deleteComment);

// /api/comments/:postId
router.route('/:postId').post(addComment)

// /api/comments/:commentId/
router.route('/:commentId/').post(comComment)

// /api/comments/:postId/:commentId
router.route('/:postId/:commentId').delete(deleteComment)

// api/comments/:commentId/vote/voteType
router.route('/:commentId/:voteType').put(vote)

router.route('/').delete(deleteAllComments);

module.exports = router;