const router = require('express').Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addComment, 
  deleteComment,
  vote,
} = require('../../controllers/post-controller.js');

// const replyRoutes = require('./replyRoutes');

// /api/posts
router.route('/').get(getPosts).post(createPost);

// /api/posts/:id
router.route('/:postId').get(getPostById)
// .put(updatePost)
.delete(deletePost);

// /api/posts/:postId/comments
router.route('/:postId/comments').post(addComment)

// /api/posts/:postId/comments
router.route('/:postId/comments/:commentId').delete(deleteComment)

// api/posts/:postId/vote/voteType
router.route('/:postId/vote/:voteType').put(vote)



module.exports = router;
