import * as React from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const StyledCard = styled(Card)({
  maxWidth: '800px',
  minHeight: '300px',
  margin: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

const StyledCardContent = styled(CardContent)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const CardText = styled(Typography)({
  textDecoration: 'none',
});

// Define a new styled component for the iframe
const StyledIframe = styled("iframe")({
  width: "100%",
  height: "500px", // Update the height to your desired value
});

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
      <p>{comment.username}</p>
      <p>"{comment.commentBody}"</p>
      <p>👍: {comment.commentUpvotes} 👎: {comment.commentDownvotes} Replies ({comment.comments.length})</p>
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
      <p>Posted By: {post.username}</p>
      <p>Created At: {new Date(post.createdAt).toLocaleString([], { hour: 'numeric', minute: 'numeric', hour12: true })
      }</p>
      <p>Tags: {post.tags.join(', ')}</p>
      <p>Post Link: <a href={post.postLink}>{post.postLink}</a></p>
      <p>Post Text: {post.postText}</p>
      <p>👍: {post.postUpvotes} 👎: {post.postDownvotes}</p>
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}