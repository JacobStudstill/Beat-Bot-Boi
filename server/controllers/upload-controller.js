const uploadController = {
  // Upload image
  async uploadImage(req, res) {
    try {
      console.log('uploading image')
      // File uploaded successfully
      res.status(200).send('File uploaded successfully.');
    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  },
};

module.exports = uploadController;
