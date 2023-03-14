const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const replyRoutes = require('./replyRoutes');
const messageRoutes = require('./messageRoutes');
const uploadRoutes = require('./uploadRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/replies', replyRoutes);
router.use('/messages', messageRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;