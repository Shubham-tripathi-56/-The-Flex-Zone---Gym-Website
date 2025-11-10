import { Check } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';


const Pricing = () => {

  const pricing = [
    {
      imgUrl: "./gym/img15.jpg",
      title: "QUARTERLY",
      price: 9000,
      length: 3
    },

    {
      imgUrl: "./gym/img15.jpg",
      title: "HALF-YEARLY",
      price: 17000,
      length: 6
    },

    {
      imgUrl: "./gym/img15.jpg",
      title: "YEARLY",
      price: 31000,
      length: 12
    },

  ]

  
  //===========================

  return (
    <>
      <h1 style={{ fontSize: "3rem", "color": "orangered", "textAlign": "center" , "marginTop":"5vh" }}>FLEX ZONE FITNESS PLANS</h1>
      <div className='Pricing'>
        {pricing.map((element, index) => (  // Use index as a key
          <div key={index} className="card text-bg-dark section">
            <img src={element.imgUrl} className="card-img" alt={element.title} />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ fontSize: "3rem", "color": "orangered" }}>{element.title}</h5>
              <p className="card-text" style={{ fontSize: "2rem", "color": "", "fontWeight": "700" }}>Price: Rs {element.price}</p>
              <p className="card-text" style={{ fontSize: "1.3rem" }}>Duration: {element.length} months</p>

        
                <p className="card-text" style={{ fontSize: "1.3rem", "marginTop": "10vh", "color": "", "fontWeight": "700", }}><Check size={48} color={"#ff4500"} />   Equipment</p>

                <p className="card-text" style={{ fontSize: "1.3rem", "marginTop": "", "color": "", "fontWeight": "700", }}><Check size={48} color={"#ff4500"} />   All Day Free Training</p>

                <p className="card-text" style={{ fontSize: "1.3rem", "marginTop": "", "color": "", "fontWeight": "700", }}><Check size={48} color={"#ff4500"} />   24/7 Skilled Support</p>

                <p className="card-text" style={{ fontSize: "1.3rem", "marginTop": "", "color": "", "fontWeight": "700", }}><Check size={48} color={"#ff4500"} />   20 Days Freezing Option</p>

                <p className="card-text" style={{ fontSize: "1.3rem", "marginTop": "", "color": "", "fontWeight": "700", }}><Check size={48} color={"#ff4500"} />   Equipment</p>
              
                <Link className="btn btn-primary" to="/" role="button">Join Now</Link>

            </div>
            {/* <div className="card-body">
            <p className="card-text" style={{ backgroundColor: "", color: "black" }}>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Pricing;