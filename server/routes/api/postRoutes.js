const router = require('express').Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  addComment, 
  deleteComment,
} = require('../../controllers/post-controller.js');

// /api/posts
router.route('/').get(getPosts).post(createPost);

// /api/posts/:id
router.route('/:postId').get(getPostById).put(updatePost).delete(deletePost);

// /api/posts/:postId/comments
router.route('/:posttId/comments').post(addComment)

// /api/posts/:postId/comments
  router.route('/:postId/comments/:commentId').delete(deleteComment)

module.exports = router;
