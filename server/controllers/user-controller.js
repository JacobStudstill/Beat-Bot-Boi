const { User, Post } = require("../models");
const { signToken } = require('../auth');

const userController = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({}).lean();
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
// Create a new user
async createUser(req, res) {
  try {
    const user = await User.create(req.body)
      res.json(user);
  } catch (err){
    res.status(500).json(err);
  } 

},
// Delete a user and associated posts
async deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId })
      await Post.deleteMany({ _id: {$in: user.posts} });
      if (!user) {
        return res.status(404).json({message: 'No user with that ID :('})
    }
      res.json({message: 'User and posts deleted!'})
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
      {$set: req.body}, 
      {new: true, runValidators: true });
      console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  } 
},
// Add friend to friend list
async addFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId }, 
      {$addToSet: { friends: req.params.friendId }}, 
      {new: true});

      // do we want friends to be added automatically or have to accept/follow back?
      // const friend = await User.findOneAndUpdate(
      //   { _id: req.params.friendId }, 
      //   {$addToSet: { friends: req.params.userId }}, 
      //   {new: true});
      
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
      {$pull: { friends: req.params.friendId }},
      {new: true});
      res.json({message: 'Friend deleted :('})
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
    }
  }
}

module.exports = userController;