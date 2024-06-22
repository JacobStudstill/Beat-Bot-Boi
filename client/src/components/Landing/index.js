import React, { useState } from 'react';
import hand from "../../assets/handMoney.png";
import bino from "../../assets/bestbinoculars.png";
import friendrequest from "../../assets/friendrequest.png";
import fileupload from "../../assets/file.png";


const Landing = () => {


  return (
    <>

      <div className='backgroundColor'>
        <section id="thehero">
          <div className="the-inner">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>The best way to get your music discovered</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p>Anthym connects musicians with music industry professionals and fans, providing a platform for you to showcase your talents and gain the recognition you deserve. With powerful search and discovery tools, users can easily find and connect with your music, opening up a world of new opportunities for your career. <a href="#table">Learn More</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className='text-container'>
          <div>
            <h2>All Music Welcome!</h2>

            <div className="wrapper">
              <p className="line__1">We know that there are fans of every genre out there. So, </p>
              <p className="line__2">we dont limit what genres can be posted! We welcome all </p>
              <p className="line__3">styles and types of music on this platform. When posting </p>
              <p className="line__4">your music, you can attach a genre for users to find you by.</p>
              <p className="line__5">Users will filter by genre on the homepage when searching</p>
              <p className="line__6">for new artists. Niche or not, Anthym has you covered. </p>
              <p className="line__7">Sincerly, Anthym Staff </p>
            </div>

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

        <div className="four-container">
          <div className="four-icon">
            <img className='file' src={fileupload} alt="file" />
            <p>Easy to upload system</p>
          </div>
          <div className="four-icon">
            <img className='moneyhand' src={hand} alt="hand with money" />
            <p> Sell merchandise, memorabilia, and concert tickets</p>
          </div>
          <div className="four-icon">
            <img className='friendrequest' src={friendrequest} alt="friendrequest" />
            <p>Find fans with common interest and add them to be friends</p>
          </div>
          <div className="four-icon">
            <img className='binoculars' src={bino} alt="binoculars icon" />
            <p>Be the first to discover new artist / songs</p>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
<div className='FAQ text-center'> Frequently Asked Questions</div>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item text-center">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <p class="text-center">How would Anthym get me discovered?</p>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body text-center">Others applications allow users to upload media that consist of anything and everything. But, Anythm is strictly all things music. This eliminates the chances of your musical talent being drowned in a sea of gaming montages or funny cat videos. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <p>What kind of music platforms can I post my music from?</p>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body text-center">Anthym currently allows users to post links from Youtube and Spotify. We are working on implementing SoundCloud into our application in future releases. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <p>Do I need to be a musician to use Anythm?</p>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body text-center">Both musicians and music lovers can use Anythm. We actually encourage non-musicians to use Anythm because it builds a bigger audience for the artists. We make it easy to find up and coming artists.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      <p>How do I get started using Anythym?</p>
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body text-center">The first step for all users is to <a href='./Signup'>Sign Up</a>.If you are an artist you can start posting your spotify songs (or albums) and Youtube videos. If you just want to listen to good music just start scrolling and enjoy the undiscovered talent that's out there.</div>
    </div>
  </div>
</div>



      </div>
    </>

  );
};

export default Landing;