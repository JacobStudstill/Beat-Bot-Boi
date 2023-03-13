// Import Express
const express = require('express');
// Import DB connection
const db = require('./config/connection');
// Import routes
const routes = require('./routes');

// Set up port
const PORT = process.env.PORT || 3001;
// Create instance of express app
const app = express();

//required for Eric's image uploader
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'images')
  },
  filename: (req, file, cb) => {
      console.log(file)
      cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})


app.use(express.urlencoded({ extended: true }));
// Middleware to parse to json 
app.use(express.json());
app.use(routes);

//middleware for Eric's image uploader
app.use(express.static(__dirname + '/views'));
app.get("/upload", (req, res) => {
  res.sendFile(__dirname + 'views/upload.html');
});
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Upload Processed');
});



db.once('open', () => {
  // Server is listening...
  app.listen(PORT, () => {
    console.log(`API server for Beat Bots is running on port ${PORT}!`);
  });
});
