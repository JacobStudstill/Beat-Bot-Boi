import {Routes, Route} from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile/index';
import Landing from './components/Landing';
import Upload from './components/Upload';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MessengerModal from './components/Message/DM';
import Login from './components/Login';
import Follow from './components/Follow'
import SpotifyGetPlaylists from "./components/SpotifyGetPlaylists";
import Posts from './components/Posts'



function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Message' element={<MessengerModal />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path='/Posts' element={<Posts />} />
        <Route path='/Follow' element={<Follow />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
