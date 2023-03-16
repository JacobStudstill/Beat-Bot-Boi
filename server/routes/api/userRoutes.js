const router = require('express').Router();
const {
  getUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
  login,
  getCurrentUser,
  searchUser
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../auth/auth');

// put authMiddleware anywhere we need to send a token for verification of user
// /api/users
router.route('/')
  // GET all users  
  .get(getUsers)
  // Register a new user
  .post(registerUser);

// api/users/login
router.route('/login').post(login);

router.route('/me').get(authMiddleware, getCurrentUser);

// /api/users/:id
router.route('/:userId')
  .get(getUserById)
  // PUT to update a user by its _id
  .put(authMiddleware, updateUser)
  // DELETE to remove user by its _id
  .delete(authMiddleware, deleteUser);


// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  // POST to add a new friend to a user's friend list
  .post(authMiddleware, addFriend)
  // DELETE to remove a friend from a user's friend list
  .delete(authMiddleware, deleteFriend)

router.route('/:username')
  .get(searchUser)
// export router so app can use it
module.exports = router;



