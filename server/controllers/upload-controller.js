const path = require('path');
const multer = require('multer');

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

//Create instance of Multer with the storage engine
const upload = multer({ storage });

const uploadController = {
  // Upload image
  async uploadImage(req, res) {
    try {
      // If no file was uploaded
      if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }

      // File uploaded successfully
      res.status(200).send('File uploaded successfully.');
    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  },
};

module.exports = uploadController;
