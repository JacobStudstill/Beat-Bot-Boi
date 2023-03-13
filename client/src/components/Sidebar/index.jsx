import React from 'react';
import './sidebar.css';
import profilep from '../../assets/profilep.jpeg'
import spotify from '../../assets/spotify.jpeg'


const SideBar = () => {
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
            <span className="info2"> </span>
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