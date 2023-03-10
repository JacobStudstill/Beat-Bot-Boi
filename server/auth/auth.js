const bcrypt = require('bcrypt');
const User = require('../models/User');

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