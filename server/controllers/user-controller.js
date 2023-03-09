const { User, Post } = require("../models");

const userController = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch(err) {
      console.log(err);
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
        return res.status(404).json({message: 'No user with that ID :('})
    }
    res.json(user)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
},



}

module.exports = userController;