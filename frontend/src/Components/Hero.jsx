import React from 'react'

const Hero = () => {
  return (
    <div className='Hero'>

<div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride = "carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./gym/img1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./gym/img2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./gym/img3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/* //-------------------------------// */}
<div className="FrontText">

<div className="titleText">
  <p>LET`S</p>
  <p>GET</p>
  <p>MOVING</p>
</div>
<div className="SubtitleText">
  <p>Your Journey to Fitness Starts Here</p>
  <p className='SubtitleTextColour'>Unless Your Potential</p>
</div>

<div className="Frontbutton">
<header className='Frontbut1'>
        <p>Start Your Journey</p>
      </header>
<header className='Frontbut2'>
        <p>Discover Your Plan</p>
      </header>
</div>

</div>
{/* //-------------------------------// */}

{/* <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="2000">
      <img src="./gym/img1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"  data-interval="2000">
      <img src="./gym/img2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"  data-interval="2000">
      <img src="./gym/img3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div> */}

    </div>
  )
}

export default Hero