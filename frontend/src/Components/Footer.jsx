import React from 'react'

const Footer = () => {
  return (
    <div className=' Footer' style={{}}>
   <div className="footerSec" style={{"fontSize":"2rem" , "fontWeight" : "500" , "color":"" ,"fontFamily": "cursive","textAlign":"center", "marginTop":""}}>
   <p style={{"marginTop":"6vw"}}>@Designed And Developed By Shubham Tripathi</p>
   </div>
   <div className="footerSec">
    <ul className='FooterList'>
      <li><i className="fa-brands fa-square-instagram"></i></li>
      <li><i className="fa-brands fa-facebook"></i></li>
      <li><i className="fa-brands fa-square-whatsapp"></i></li>
      <li><i className="fa-brands fa-telegram"></i></li>

    </ul>
   </div>


    </div>
  )
}

export default Footer