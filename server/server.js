// Import Express
const express = require('express');
// Set up port
const PORT = process.env.PORT || 3001;


const app = express();
const db = require('./config/connection');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import routes
const routes = require('./routes');
app.use(routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once('open', () => {
  // Server is listening...
  app.listen(PORT, () => {
    console.log(`API server for Beat Bots is running on port ${PORT}!`);
  });
});
