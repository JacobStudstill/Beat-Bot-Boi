const router = require('express').Router();
const {
  getPosts,
  getPostById,
  createPost,
  deletePost,
  vote,
} = require('../../controllers/post-controller.js');

// /api/posts
router.route('/').get(getPosts).post(createPost);

// /api/posts/:id
router.route('/:postId').get(getPostById)

.delete(deletePost);

router.route('/:postId/vote/:voteType').put(vote)



module.exports = router;
