import React, { useState } from 'react';
import microphone from "../../assets/microphone.png";
import hand from "../../assets/hand.png";


const Landing = () => {

  // let lastScrollY = window.scrollY;
  // const microphonePic = document.querySelector(".microphone");
  // const handPic = document.querySelector(".hand");
  // window.addEventListener("scroll", () => {
  //   console.log(window.scrollY)
  //   if (881 < window.scrollY) {
  //     microphonePic.classList.add("fixed");
  //     microphonePic.classList.remove('microphone')
  //     handPic.classList.add("fixed");
  //     handPic.classList.remove('hand')
  //   }

  //   lastScrollY = window.scrollY;
  // });
  return (
    <>

      {/* <img className="microphone" src={microphone} />
        <img className="hand" src={hand} /> */}
<div className='backgroundColor'>
      <section id="thehero">
        <div class="the-inner">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>The best way to get your music discovered</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Anthym connects musicians with music industry professionals and fans, providing a platform for you to showcase your talents and gain the recognition you deserve. With powerful search and discovery tools, users can easily find and connect with your music, opening up a world of new opportunities for your career. <a href="#table">Learn More</a></p>
              </div>
            </div>
            <div class="row points">
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                <p> Easy Uploading</p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                <p> Discover New Artist / Songs </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                <p> Sell Merchandise </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                <p>Find Fans With Common Interests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
        <div className='text-container'>
          <div>
            <h2>All Music Welcomed!</h2>
            <p>We know that there are fans of every genre out there. So, we dont limit what genres can be posted! We welcomeall styles and types of music on this platform. When posting your music you can attach a genre for users to find you by and if you're searching for music you can filter by genre. <a href="/Signup">Sign Up</a> to get started!</p>
          </div>
        </div>

        <div className='flex-container' id='table'>
          <div className='flex-item flex-1'></div>
          <div className='flex-item flex-2'></div>
          <div className='flex-item flex-3'></div>
          <div className='flex-item flex-4'></div>
          <div className='flex-item flex-5'></div>
          <div className='flex-item flex-6'></div>
          <div className='flex-item flex-7'></div>
          <div className='flex-item flex-8'></div>
          <div className='flex-item flex-9'></div>
          <div className='flex-item flex-10'></div>
          <div className='flex-item flex-11'></div>
          <div className='flex-item flex-12'></div>
        </div>
      </div>
    </>

  );
};

export default Landing;