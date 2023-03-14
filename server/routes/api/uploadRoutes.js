const router = require('express').Router();
const { uploadImage } = require('../../controllers/upload-controller');

router.route('/api/upload').post(uploadImage);

module.exports = router;
