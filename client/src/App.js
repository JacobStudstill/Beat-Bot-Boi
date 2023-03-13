import {Routes, Route} from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Landing from './components/Landing';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
