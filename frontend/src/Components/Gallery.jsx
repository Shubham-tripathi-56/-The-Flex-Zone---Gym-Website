import React from 'react'

const Gallery = () => {
  const gallery = [
    "./gym/img5.jpg" ,
    "./gym/img6.jpg" ,
     "./gym/img7.jpg",
     "./gym/img8.jpg",
     "./gym/img9.jpg",
     "./gym/img10.jpg",
     "./gym/img11.jpg",  
     "./gym/img12.jpg",  
     "./gym/img13.jpg",  
    ]
  return (
    <div className="Gallery">
      <h1>BETTER BEATS BEST</h1>
    <div className='GalleryImg'>
      <div className="imgCol1">
        {
          gallery.slice(0,3).map((element , index)=>(<img src={element} key={index} alt='images' />))
        }
        {/* <img src="./gym/img5.jpg" alt="" />
        <img src="./gym/img6.jpg" alt="" />
        <img src="./gym/img7.jpg" alt="" /> */}
      </div>

      <div className="imgCol2">
      {
          gallery.slice(3,6).map((element , index)=>(<img src={element} key={index} alt='images' />))
        }

      {/* <img src="./gym/img8.jpg" alt="" />
        <img src="./gym/img9.jpg" alt="" />
        <img src="./gym/img10.jpg" alt="" /> */}

      </div>

      <div className="imgCol3">
      {
          gallery.slice(6,9).map((element , index)=>(<img src={element} key={index} alt='images' />))
        }

      {/* <img src="./gym/img11.jpg" alt="" />
        <img src="./gym/img12.jpg" alt="" />
        <img src="./gym/img13.jpg" alt="" /> */}
        
      </div>
    </div>
    </div>
  )
}

export default Gallery