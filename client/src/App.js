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
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MessengerModal from './components/Message/DM';
import Login from './components/Login';


function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route exact path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Message' element={<MessengerModal />} />
        <Route path='/Upload' element={<Upload />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
