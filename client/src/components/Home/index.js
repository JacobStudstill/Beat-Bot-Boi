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

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'center',
});

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = token ? Auth.getProfile().data.username : null;
  const userInit = user ? user[0] : null;


  return (
    <Container>
      <div>
        {token && <h1>Welcome {user}!</h1>}
        <h1>Feed</h1>
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
                <Link to={`/posts/${post._id}`}>
                  <StyledCard>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          {post.username[0]}
                        </Avatar>
                      }
                      title={post.postTitle}
                      subheader={new Date(post.createdAt).toLocaleDateString()}
                    />
                    <StyledCardContent>
                      {videoUrl && <iframe src={videoUrl}></iframe>}
                      <Typography variant="body2" color="text.secondary">
                        {post.postText}
                      </Typography>
                    </StyledCardContent>
                  </StyledCard>
                </Link>
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
