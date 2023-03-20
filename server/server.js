// Import Express
const express = require('express');
// Set up port

const path = require('path') 
const cors = require('cors');
const routes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();


server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
// Import routes
app.use(routes);

app.use('/images', express.static(path.join(__dirname, '../client/assets')));

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
