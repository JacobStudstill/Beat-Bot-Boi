import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"
import profilep from '../../assets/profilep.jpeg'
import React from 'react'


const Share = () => {
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareT">
          <img className="profilep" src={profilep} alt="" />
          <input
            placeholder="What's on your mind Ashlynn?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareB">
            <div className="options">
                <div className="option">
                    <PermMedia htmlColor="tomato" className="icon"/>
                    <span className="optionText">Photo or Video</span>
                </div>
                <div className="option">
                    <Label htmlColor="blue" className="icon"/>
                    <span className="optionText">Tag</span>
                </div>
                <div className="option">
                    <Room htmlColor="green" className="icon"/>
                    <span className="optionText">Location</span>
                </div>
                <div className="option">
                    <EmojiEmotions htmlColor="goldenrod" className="icon"/>
                    <span className="optionText">Music</span>
                </div>
            </div>
            <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;