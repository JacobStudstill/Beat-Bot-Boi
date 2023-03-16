const { User, Post } = require("../models");
const { signToken } = require('../auth/auth');

const userController = {
  // Login user
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // Register a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async registerUser({ body }, res) {
    try {
      const user = await User.create(body)
      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }

  },
  // get a single user by either their id or their username
  async getCurrentUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({}).lean();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  },

  // Find a single user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        // Get associated friends and posts 
        .populate('friends')
        .populate('posts')
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID :(' })
      }
      res.json(user)
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
  },
  // Delete a user and associated posts
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId })
      await Post.deleteMany({ _id: { $in: user.posts } });
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID :(' })
      }
      res.json({ message: 'User and posts deleted!' })
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        // req.body, 
        { _id: req.params.userId },
        { $set: req.body },
        { new: true, runValidators: true });
      console.log(user);

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  } 
},
// Add friend to friend list
// async addFriend({ user, body }, res) {
//   console.log(user)
//   try {
//     const upDatedUser = await User.findOneAndUpdate(
      
//       { _id: user.Id }, 
//       {$addToSet: { friends: body }}, 
//       {new: true});

//       // do we want friends to be added automatically or have to accept/follow back?
//       // const friend = await User.findOneAndUpdate(
//       //   { _id: req.params.friendId }, 
//       //   {$addToSet: { friends: req.params.userId }}, 
//       //   {new: true});
      
//     res.json(upDatedUser);
    async addFriend(req, res) {
      console.log(req.params.userId)
      console.log(req.params.friendId)
      console.log(req.body)
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId }, 
      {$addToSet: { friends: req.body.friendId }}, 
      {new: true});
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    } 
},
// Delete friend from list
async deleteFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId }, 
      {$pull: { friends: req.body.friendId }},
      {new: true});
      res.json({message: 'Friend deleted :('})
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
    
    // Search user
  async searchUser(req, res) {
    try {
      const user = await User.findOne({
        username: req.params.username
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);

    }
}

}




module.exports = userController;