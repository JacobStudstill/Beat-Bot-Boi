const Comment = require('../models/Comment');

async function seed() {
    try {
        //placeholder posts
        const comments = [
            {
                _id: '640be6198f58e4a60eb6eda7',
                parentId: '640bb7b478b224e68117d6a6',
                commentBody: 'I’m Rick James, Bitch!',
                username: 'dobbytest',
                comments: ['640be89a475e9fb483a8a6d4']
            },
            {
                _id: '640be89a475e9fb483a8a6d4',
                parentId: '640be6198f58e4a60eb6eda7',
                commentBody: 'That’s so funny Dobby!',
                username: 'janesmith',
            },
        ];

        //creates comments in DB
        await Comment.create(comments);
        console.log('Comments seeded');
    } catch (error) {
        console.error(error);
    }
}

module.exports = { seed };