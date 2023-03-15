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
              <p className="line__4">your music, you can attach a genre for users to find you</p>
              <p className="line__5">by. Users will filter by genre on the homepage when searching</p>
              <p className="line__6">for new artists. Niche or not, Anthym has you covered </p>
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
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <p>Accordion Item #1</p>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <p>Accordion Item #1</p>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <p>Accordion Item #1</p>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>



      </div>
    </>

  );
};

export default Landing;