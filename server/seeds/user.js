const bcrypt = require('bcrypt');
const User = require('../models/User');

async function seed() {
  try {
    //placeholder users
    const users = [
      {
        _id: '640b89e26b1b58e1217dee3f',
        username: 'johndoe',
        email: 'john@email.com',
        password: 'Pass@123',
        friends: '640b89e26b1b58e1217dee40',
      },
      {
        _id: '640b89e26b1b58e1217dee40',
        username: 'janesmith',
        email: 'jane@email.com',
        password: 'Pass@123',
        friends: '640b89e26b1b58e1217dee3f',
      },
      {
        _id: '640bb8526ac6b6efea8a41f4',
        username: 'dobbytest',
        email: 'dobby@email.com',
        password: 'Pass@123',
      },
    ];

    //password hasher
    for (let user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    //creates users in DB
    await User.create(users);
    console.log('Users seeded');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {seed};
