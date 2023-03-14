const bcrypt = require('bcrypt');
const User = require('../models/User');

const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'supersecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};


async function login(username, password) {
  try {
    //retrieve user from database
    const user = await User.findOne({ username });

    //compare password hashes
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      console.log('User authenticated');
      //grant access to application
    } else {
      console.log('Invalid password');
      //deny access to application
    }
  } catch (error) {
    console.error(error);
  }
}