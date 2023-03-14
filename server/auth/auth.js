const bcrypt = require('bcrypt');
const User = require('../models/User');

const jwt = require('jsonwebtoken');

const secret = 'supersecretsecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
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