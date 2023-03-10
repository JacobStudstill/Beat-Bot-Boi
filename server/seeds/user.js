const bcrypt = require('bcrypt');
const User = require('../models/User');
const db = require('../config/connection.js');

async function seed() {
  try {
    //wait for the database to connect
    await db.once('open', () => {
      console.log('Database connected');
    });

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

    //disconnect from the database
    await db.close();
    console.log('Database disconnected');
  } catch (error) {
    console.error(error);
  }
}

seed();
