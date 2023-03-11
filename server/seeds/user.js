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
        posts: ['640bb7b478b224e68117d6a6']
      },
      {
        _id: '640b89e26b1b58e1217dee40',
        username: 'janesmith',
        email: 'jane@email.com',
        password: 'Pass@123',
        friends: '640b89e26b1b58e1217dee3f',
        comments: ['640be89a475e9fb483a8a6d4']
      },
      {
        _id: '640bb8526ac6b6efea8a41f4',
        username: 'dobbytest',
        email: 'dobby@email.com',
        password: 'Pass@123',
        comments: ['640be6198f58e4a60eb6eda7'],
        posts: ['640bb4e43b6a3d2c147028fd']
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
