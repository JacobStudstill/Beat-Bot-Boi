import * as React from 'react';
import Auth from '../../utils/auth';

export default function PostDetail() {
    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchPost = async () => {
            try {
                let postId = '640bb7b478b224e68117d6a6';
                const response = await fetch('/api/posts/' + postId);
                const data = await response.json();
                console.log(data);
                setPost(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchPost();
    }, []);

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const user = token ? Auth.getProfile().data.username : null;

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!post) {
        return <h2>No post found</h2>;
    }

    return (
        <div>
          <h1>{post.postTitle}</h1>
          <p>Username: {post.username}</p>
          <p>Created At: {post.createdAt}</p>
          <p>Post Link: <a href={post.postLink}>{post.postLink}</a></p>
          <p>Tags: {post.tags.join(', ')}</p>
          <p>Post Upvotes: {post.postUpvotes}</p>
          <p>Post Downvotes: {post.postDownvotes}</p>
          <h2>Comments ({post.comments.length})</h2>
          {post.comments.map(commentId => (
            <div key={commentId}>
              <Comment commentId={commentId} />
            </div>
          ))}
        </div>
    );
}

function Comment({ commentId }) {
    const [comment, setComment] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchComment = async () => {
            try {
                const response = await fetch('/api/comments/' + commentId);
                const data = await response.json();
                console.log(data);
                setComment(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchComment();
    }, [commentId]);

    if (loading) {
        return <h3>Loading comment...</h3>;
    }

    if (!comment) {
        return <h3>No comment found with ID {commentId}</h3>;
    }

    return (
        <div style={{ marginLeft: '20px' }}>
          <h4> {comment.commentBody}</h4>
          <h5>{comment.username}</h5>
          {comment.comments.map(nestedCommentId => (
            <div key={nestedCommentId}>
              <Comment commentId={nestedCommentId} />
            </div>
          ))}
        </div>
    );
}
