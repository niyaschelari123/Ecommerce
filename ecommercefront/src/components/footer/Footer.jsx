import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Ortzak</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <img src="https://cdn-icons-png.flaticon.com/512/888/888873.png" id="goog" />
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <img src="https://cdn-icons-png.flaticon.com/512/5977/5977575.png" id="goog" />
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Contact us </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
         
        </div>
      </footer>
    </>
  )
}

export default Footer
