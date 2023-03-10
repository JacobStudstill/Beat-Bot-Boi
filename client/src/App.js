// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Profile from './components/Profile';
import MainFeed from './components/MainFeed';
import React from 'react';
import {Route, Routes} from 'react-router';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/MainFeed' element={<MainFeed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
