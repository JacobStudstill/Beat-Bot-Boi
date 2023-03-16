import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sidebar.css';
import profilep from '../../assets/profilep.jpeg'
import jacobp from '../../assets/jacobAvitar.jpg'
import ashlynnp from '../../assets/ashlynnAvitar.jpg'
import domp from '../../assets/domAvitar.jpg'
import ericp from '../../assets/ericAvitar.jpg'
import alexp from '../../assets/alexAvitar.jpg'
import johnp from '../../assets/johnAvitar.jpg'
import mateop from '../../assets/mateoAvitar.jpg'
import sethp from '../../assets/sethAvitar.jpg'
import spotify from '../../assets/spotify.jpeg'
import SpotifyGetPlaylists from '../SpotifyGetPlaylists/';
import Home from '../Home'

// Used to login to Spotify
const client_id = '07395201571e48f9aebdaf2365b27928';
const redirect_uri = 'http://localhost:3000/Profile'
const scope = ["user-library-modify", "playlist-modify-public", "user-follow-modify", "playlist-modify-private"]
const space_delimiter = "%20"
const scopes_url_param = scope.join(space_delimiter)
const spotfiy_authoirze_endpoint = 'https://accounts.spotify.com/authorize';
const response = '&response_type=token&show_dialog=true';
const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&")
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp
};


const SideBar = () => {
  useEffect(() => {
    if (window.location.hash) {
      const {
        access_token,
        expires_in,
        token_type
      } = getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);

    }
  })

  const handleLogin = () => {
    window.location = `${spotfiy_authoirze_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scopes=${scopes_url_param}${response}`
  }


  return (
    <>
      {/* <h4 className="title">User Info</h4> */}
      {/* <div className="infoContent">
              <span className="info1">City:</span>
              <span className="info2">Melbourne, FL</span>
            </div> */}


      <div className='inline'>

        <div className="playlist">
          <h4>Checkout my playlist!</h4>
          <button onClick={handleLogin}>Login to Spotify</button>
          <SpotifyGetPlaylists />
        </div>




        <div className='profilePosts'>
          <Home />
        </div>



        <div className="profileItem">
          <h4> User friends </h4>
          <div className="friends">
            <div className="friend">
              <img className="friendImg" src={domp} alt="" />
              <span className="friendName">Dom</span>
            </div>
            <div className="friend">
              <img src={ericp} alt="" className="friendImg" />
              <span className="friendName">Eric</span>
            </div>
            <div className="friend">
              <img src={jacobp} alt="" className="friendImg"/>
              <span className="friendName">Jacob</span>
            </div>
            <div className="friend">
              <img src={ashlynnp} alt="" className="friendImg" />
              <span className="friendName">Ashlynn</span>
            </div>
            <div className="friend">
              <img src={johnp} alt="" className="friendImg" />
              <span className="friendName">John</span>
            </div>
            <div className="friend">
              <img src={sethp} alt="" className="friendImg" />
              <span className="friendName">Seth</span>
            </div>
            <div className="friend">
              <img className="friendImg" src={alexp} alt="" />
              <span className="friendName">Alex</span>
            </div>
            <div className="friend">
              <img className="friendImg" src={mateop} alt="" />
              <span className="friendName">Mateo</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;