import * as React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
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
  margin: '20px',
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

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
        setPosts(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = token ? Auth.getProfile().data.username : null;
  const userInit = user ? user[0] : null;

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
  
      const updatedPosts = posts.map((p) => {
        if (p._id === postId) {
          return {
            ...p,
            postUpvotes: data.upvotes.length,
            postDownvotes: data.downvotes.length,
          };
        } else {
          return p;
        }
      });
      setPosts(updatedPosts);
  
    } catch (error) {
      console.error("Failed to vote.", error);
    }
  };

  return (
    <Container>
      <div className='homeFeed'>
        {token && <h1>Welcome {user}!</h1>}
        <Button variant="contained" href="/posts/new">
          Create Post
        </Button>
        {posts.length > 0 ? (
          posts.map((post) => {
            let videoUrl = '';
            if (post.postLink && post.postLink.includes("youtube.com") && post.postLink.includes("watch")) {
              videoUrl = post.postLink.replace("watch?v=", "embed/");
            } else if (post.postLink && post.postLink.includes("youtube.com") && post.postLink.includes("embed/")) {
              videoUrl = post.postLink;
            }
            return (
              <div key={post._id}>
                <StyledCard>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {post.username[0]}
                      </Avatar>
                    }
                    title={<Link to={`/posts/${post._id}`} className="card-link">{post.postTitle}</Link>}
                    subheader={
                      <div>
                        <Typography variant="subtitle1" color="text.secondary" className='postDate'>
                          {new Date(post.createdAt).toLocaleDateString()}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          <div>
                            <Button onClick={() => handleVote("upvote", post._id)} variant="outlined" sx={{ mr: 2 }}>
                              👍 {post.postUpvotes}
                            </Button>
                            <Button onClick={() => handleVote("downvote", post._id)} variant="outlined">
                              👎 {post.postDownvotes}
                            </Button>
                          </div>
                        </Typography>
                      </div>
                    }
                  />
                  <StyledCardContent>
                    {videoUrl && <StyledIframe src={videoUrl} />}
                    {/* Use the CardText component to apply the "card-text" class to the post text */}
                    <CardText variant="body1" color="text.secondary" className="card-text">
                      {post.postText}
                    </CardText>
                  </StyledCardContent>
                </StyledCard>
              </div>
            );
          })
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </Container>
  );
}
