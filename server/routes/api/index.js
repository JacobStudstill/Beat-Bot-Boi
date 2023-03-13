const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const replyRoutes = require('./replyRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/replies', replyRoutes);
router.use('/messages', messageRoutes);

module.exports = router;