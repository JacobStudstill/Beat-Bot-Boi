const router = require('express').Router();
const path = require('path');
const { uploadImage } = require('../../controllers/upload-controller');
const multer = require('multer');

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//Create instance of Multer with the storage engine
const upload = multer({ storage });


router.route('/').post(upload.single('file'), uploadImage);

module.exports = router;
