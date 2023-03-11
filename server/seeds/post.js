const Post = require('../models/Post');

async function seed() {
    try {
      //placeholder posts
      const posts = [
        {
          _id: '640bb7b478b224e68117d6a6',
          postTitle: 'Rick James - Mary Jane',
          postLink: 'https://www.youtube.com/watch?v=PrPNwLuk0zQ',
          username: 'johndoe',
          comments: ['640be6198f58e4a60eb6eda7'],
          tags: ['Rick James', 'Funk', 'Cool']
        },
        {
          _id: '640bb4e43b6a3d2c147028fd',
          postTitle: 'What bands or artists do you like even though they are generally not well thought of?',
          postText: 'I’m thinking of the Dave Matthews Band’s of the world. While most folks I talk to make fun I’m still a fan. I think bands like Vampire Weekend have kind of tipped into this realm as well. Basically trying to think of other artists that are great but most folks think of them as uncool of passé',
          username: 'dobbytest',
          tags: ['questions'],
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