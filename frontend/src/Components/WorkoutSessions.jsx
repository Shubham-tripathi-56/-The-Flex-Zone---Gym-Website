import React from 'react'

const WorkoutSessions = () => {
  return (
    <div className='WorkoutSessions my-4'>
      {/* /////////////////////// */}
      <div className="card" style={{"border":"none" , "marginRight" : "1.5rem" }}>
  <div className="card-body" >

    <h5 className="card-title" style={{"fontSize" : "2.6rem"}}>TOP WORKOUT SESSION</h5>
    <p className="card-text my-3" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe possimus atque officiis veritatis cupiditate quas ut accusantium doloribus. </p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
  <img src="./gym/img4.jpg" className="card-img-top mx-3" alt="..."/>
</div>

{/* ////////////////////////// */}
<div className="card" style={{"border":"none" }}>

<div className="card-body">
    <h5 className="card-title" style={{"fontSize" : "2.6rem"}}>FEATURED BOOTCAMPS</h5>
    <p className="card-text my-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
{/* /====================*/ }
    <div className="card w-100 mb-3 back" style={{"marginTop" : "3vh"}}>
  <div className="card-body" >
    <h5 className="card-title">Card title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
</div>
{/* /********** */ }
    <div className="card w-100 mb-3 back">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
</div>
{/* /********** */ }
    <div className="card w-100 mb-3 back">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
</div>

{/* /********** */ }
<div className="card w-100 mb-3 back">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    {/* <a href="#" className="btn btn-primary">Button</a> */}
  </div>
</div>

  </div>
{/* /====================*/ }
    </div>

{/* /////////// */}
    </div>
  )
}

export default WorkoutSessions