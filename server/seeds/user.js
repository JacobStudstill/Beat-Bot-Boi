const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

//mongo connection
mongoose.connect('mongodb://localhost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//placeholder users
const users = [
    {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: 'Pass@123',
    },
    {
        name: 'Jane Smith',
        email: 'janesmith@email.com',
        password: 'Pass@123'
    },
];

//Password Hasher
for (let user of users) {
    user.password = await bcrypt.hash(user.password, 10);
}

//creates users in DB
await User.create(users);
console.log('Users seeded');
