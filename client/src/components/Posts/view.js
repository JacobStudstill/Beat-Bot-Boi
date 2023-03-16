import * as React from 'react';
import { useState, useEffect } from 'react';
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
import axios from 'axios';

const token = Auth.loggedIn() ? Auth.getToken() : null;
const user = token ? Auth.getProfile().data.username : null;

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

function Comment({ comment, onVote, comments, setComments }) {
  const [nestedComments, setNestedComments] = React.useState([]);

  React.useEffect(() => {
    const fetchNestedComments = async () => {
      try {
        const nestedCommentIds = comment?.comments || []; // Add null check here
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

  const handleCommentVote = async (voteType, commentId) => {
    if (!user) {
      alert("Please log in to vote.");
      return;
    }

    const dataToSend = {
      username: user
    };

    try {
      const response = await fetch(`/api/comments/${commentId}/${voteType}s`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      const data = await response.json();
      if (!data) {
        console.error("Failed to vote: response data is undefined.");
        return;
      }

      // Find the index of the comment that was voted on
      const commentIndex = comments.findIndex((comment) => comment._id === commentId);

      // If the comment is not found, do nothing
      if (commentIndex === -1) {
        console.error(`Failed to update comment: comment with ID ${commentId} not found.`);
        return;
      }

      // Update the specific comment object with the new upvote and downvote counts
      const updatedComment = {
        ...comments[commentIndex],
        commentUpvotes: data.upvotes.length,
        commentDownvotes: data.downvotes.length,
      };

      // Create a new array that replaces the old comment object with the updated one
      const updatedComments = [
        ...comments.slice(0, commentIndex),
        updatedComment,
        ...comments.slice(commentIndex + 1),
      ];

      // Update the state with the new comments array
      setComments(updatedComments);

    } catch (error) {
      console.error("Failed to vote.", error);
      console.log("URL:", `/api/comments/${commentId}/${voteType}s`);
    }
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <p>{comment.username}</p>
      <p>"{comment.commentBody} "Replies: ({comment.comments.length})</p>
      <Button onClick={() => handleCommentVote("upvote", comment._id)} variant="outlined" sx={{ mr: 2 }}>
        👍 {comment.commentUpvotes}
      </Button>
      <Button onClick={() => handleCommentVote("downvote", comment._id)} variant="outlined">
        👎 {comment.commentDownvotes}
      </Button>
      {nestedComments.map((nestedComment) => (
        <Comment key={nestedComment._id} comment={nestedComment} comments={comments} setComments={setComments} />
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!post) {
    return <h2>No post found</h2>;
  }

  const handleVote = async (voteType, postId) => {
    if (!user) {
      // if user is not logged in, show an alert message
      alert("Please log in to vote.");
      return;
    }

    console.log("Sending request...");

    // Create an object with the username to be sent in the request body
    const dataToSend = {
      username: user
    };
    console.log("Request data:", JSON.stringify(dataToSend));

    try {
      const response = await fetch(`/api/posts/${postId}/${voteType}s`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      const data = await response.json();
      if (!data) {
        console.error("Failed to vote: response data is undefined.");
        return;
      }

      // Update the state of the post object with the new upvote and downvote counts
      setPost({
        ...post,
        postUpvotes: data.upvotes.length,
        postDownvotes: data.downvotes.length,
      });

    } catch (error) {
      console.error("Failed to vote.", error);
    }
  };

  return (
    <div className='viewPostsContainer'>
      <h1 className='textAlignTitle'>{post.postTitle}</h1>
      <p>Posted By: {post.username}</p>
      <p>Created At: {new Date(post.createdAt).toLocaleString([], { hour: 'numeric', minute: 'numeric', hour12: true })
      }</p>
      <p>Tags: {post.tags.join(', ')}</p>
      <p>Post Link: <a href={post.postLink}>{post.postLink}</a></p>
      <p className='textAlignTitle'>Post Text: {post.postText}</p>
      <div>
        <Button onClick={() => handleVote("upvote", post._id)} variant="outlined" sx={{ mr: 2 }}>
          👍 {post.postUpvotes}
        </Button>
        <Button onClick={() => handleVote("downvote", post._id)} variant="outlined">
          👎 {post.postDownvotes}
        </Button>
      </div>
      <h3>Comments ({comments.length})</h3>
      {comments.map((comment) => (
  <Comment key={comment._id} comment={comment} comments={comments} setComments={setComments} />
))}
    </div>
  );
}