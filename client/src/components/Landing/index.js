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
      <div id="hide" className='firstView nav'>

        {/* <img className="microphone" src={microphone} />
        <img className="hand" src={hand} /> */}

        <section id="thehero">
          <div class="the-inner">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>A Company with a Culture More Relevant Than our Competitors Culture</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p>We now work in a hut facing the sea on the coast of <a href="https://goo.gl/maps/M6EysMwYazF2">Pattaya City, Thailand.</a> The stock image behind this block is what we think a real agency hut should look like. We have over 10 years of experience as digital nomads (we basically coined the term) our team is projected to stay in more than seven various countries as an expat in the next twenty years.</p>
                </div>
              </div>
              <div class="row points">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                  <p>Available After Midnight</p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                  <p>100% Apple & Mac</p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                  <p>TLDs With .io Only</p>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-md-offset-.5">
                  <p>Support Via Slack</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
      <div className='flex-container'>
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
    </>

  );
};

export default Landing;