import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sidebar.css';
import profilep from '../../assets/profilep.jpeg'
import spotify from '../../assets/spotify.jpeg'
import SpotifyGetPlaylists from '../SpotifyGetPlaylists/';

// Used to login to Spotify
const client_id = '07395201571e48f9aebdaf2365b27928';
const redirect_uri = 'http://localhost:3000/Profile'
const scope = ["user-library-modify", "playlist-modify-public",	"user-follow-modify", 	"playlist-modify-private"]
const space_delimiter = "%20"
const scopes_url_param = scope.join(space_delimiter)
const spotfiy_authoirze_endpoint = 'https://accounts.spotify.com/authorize';
const response = '&response_type=token&show_dialog=true';
const PLAYLISTS_ENDPOINT = 	"https://api.spotify.com/v1/me/playlists"

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&")
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  },{});

  return paramsSplitUp
};


const SideBar = () => {
  useEffect(()=> {
    if(window.location.hash) {
      const {
        access_token,
        expires_in,
        token_type
      }=getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.setItem("accessToken",access_token);
      localStorage.setItem("tokenType",token_type);
      localStorage.setItem("expiresIn",expires_in);

    }
  })

  const handleLogin = () =>{
    window.location = `${spotfiy_authoirze_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scopes=${scope}${response}`
  }


  return (
    <>
    <div className="sidebar">
      <div className="sideContainer">
        <h4 className="title">User Info</h4>
        <div className="info">
          <div className="infoContent">
            <span className="info1">City:</span>
            <span className="info2">Melbourne, FL</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="info1">Checkout my playlist!</span>
            <span className="info2"><button onClick={handleLogin}>Login to Spotify</button> </span>
            <SpotifyGetPlaylists />
            <img className="playList" src={spotify} alt="spotify"/>
          </div>
          
        </div>
        <h4 className="friends">User friends</h4>
        <div className="friendList">
          <div className="friend">
            <img
              src={profilep}
              alt=""
              className="friendImg"
            />
            <span className="friendName">Dom</span>
          </div>
          <div className="friend">
            <img
              src={profilep}
              alt=""
              className="friendImg"
            />
            <span className="friendName">Eric</span>
          </div>
          <div className="friend">
            <img
              src={profilep}
              alt=""
              className="friendImg"
            />
            <span className="friendName">Jacob</span>
          </div>
          <div className="friend">
            <img
              src={profilep}
              alt=""
              className="friendImg"
            />
            <span className="friendName">Alex</span>
          </div>
          
        </div>
        </div>
    </div>
      </>
    );
  };

  export default SideBar;