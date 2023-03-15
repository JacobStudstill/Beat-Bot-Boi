import * as React from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';

function Comment({ comment }) {
  const [nestedComments, setNestedComments] = React.useState([]);

  React.useEffect(() => {
    const fetchNestedComments = async () => {
      try {
        const nestedCommentIds = comment?.comments || [];
        const nestedCommentPromises = nestedCommentIds.map(async (commentId) => {
          const response = await fetch('/api/comments/' + commentId);
          const data = await response.json();
          return data;
        });
        const nestedComments = await Promise.all(nestedCommentPromises);
        setNestedComments(nestedComments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNestedComments();
  }, [comment]);

  return (
    <div style={{ marginLeft: 20 }}>
      <p>Username: {comment.username}</p>
      <p>Comment Body: {comment.commentBody}</p>
      {nestedComments.map((nestedComment) => (
        <Comment key={nestedComment._id} comment={nestedComment} />
      ))}
    </div>
  );
}

export default function PostDetail() {
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [comments, setComments] = React.useState([]);
  const { postId } = useParams();

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('/api/posts/' + postId);
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  React.useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentIds = post?.comments || [];
        const commentPromises = commentIds.map(async (commentId) => {
          const response = await fetch('/api/comments/' + commentId);
          const data = await response.json();
          return data;
        });
        const comments = await Promise.all(commentPromises);
        setComments(comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [post]);

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
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}