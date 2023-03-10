const Post = require('../models/Post');

//640bb4e43b6a3d2c147028fd

async function seed() {
    try {
      //placeholder posts
      const posts = [
        {
          _id: '640bb7b478b224e68117d6a6',
          postTitle: 'Rick James - Mary Jane',
          postLink: 'https://www.youtube.com/watch?v=PrPNwLuk0zQ',
          postText: '',
          username: 'johndoe',
          tags: ['Rick James', 'Funk', 'Cool'],
        },
      ];
  
      //creates posts in DB
      await Post.create(posts);
      console.log('Posts seeded');
    } catch (error) {
      console.error(error);
    }
  }
  
  module.exports = {seed};