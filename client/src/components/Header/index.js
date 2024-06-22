import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'
import logo from '../../assets/navBarPhoto.png'


function Header() {

  const token = Auth.loggedIn() ? Auth.getToken() : null
  const user = token ? Auth.getProfile().data.username : null
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const loggedIn = ['Home', 'Profile', 'Logout']
  const loggedOut = ['Login', 'Signup']

  return (
    <AppBar sx={{ bgcolor: "#BA8C63" }} position="static">
      <Container maxWidth="" sx={{xs: 'none', md: 'flex', justifyContent: "space-between"}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 21,
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img className='navPhoto' src={logo} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {!user
                ? loggedIn.map((page) => (
                  <MenuItem key={page} onClick={Auth.logout}>
                    <Typography textAlign="center">
                      {/* mobile nav dropdown */}
                      <Link style={{ textDecoration: "none", color: "black",}} to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))
                : loggedOut.map((page) => (
                  <MenuItem key={page} onClick={Auth.logout}>
                    <Typography textAlign="center">
                      {/* mobile nav dropdown */}
                      <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))};
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img src={logo} className="navPhoto" alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', } }}>
            {!user
              ? loggedOut.map((page) => (
                <p> </p>
              ))
              : loggedIn.map((page) => (
                <p> </p>
              ))}
          </Box>

          {/* Login / Signup Button */}
          <Box sx={{ display: 'flex',justifyContent: 'center' , alignItems: 'flex-end'}}>
          {!user
              ? loggedOut.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  <Link style={{ textDecoration: "none", color: "black", className:`${page}` }} to={`/${page}`}>{page}</Link>
                </Button>
              ))
              : loggedIn.map((page) => (
                <Button
                  key={page}
                  className={page}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>{page}</Link>
                  <p>/</p>
                  <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>{page}</Link>
                </Button>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default Header;