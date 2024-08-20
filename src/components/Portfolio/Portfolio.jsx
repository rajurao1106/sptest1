import React from 'react'
import './Portfolio.css'
import portfolio_heading_img from '../../assets/heading-img.jpg'
import port_services from '../../assets/img11.jpeg'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'
import img6 from '../../assets/img6.webp'

import outdoor_img1 from '../../assets/outdoor-img1.jpg'
import digital_marketing_img from '../../assets/digital-marketing-img.jpg' 
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div className='portfolio'>
         <div className="portfolio-heading">
            <div className="port-text">
                <h1>WE'LL HELP YOUR BUSINESS TO GET ON A NEW STAGE!</h1>
                <p>SP Advertising is an independent, creatively driven full services marketing communications agency born and groomed in Raipur Chhattisgarh, providing services across India.</p>
            </div>
            <img src={portfolio_heading_img} alt="" />
        </div>

      <div className="portfolio-con">

      <div className="port-services">
        <div className="port-details">
                <h1>Outdoor Advertising</h1>
                <ul>
                <li><p>Mobile Hoarding</p></li>
                <li><p>Hoardings</p></li>
                <li><p>Gantry</p></li>
                <li><p>Pole Kiosk</p></li>
                </ul>
            </div>
            <div className="port-img">
                <img src={outdoor_img1} alt="" />
            </div>
        </div>
        <div className="port-services1">
        <div className="port-details">
                <h1>Digital Marketing</h1>
                <ul>
                <li><p>Website Development</p></li>
                <li><p>SEO / SEM Optimization</p></li>
                <li><p>Social Media Marketing</p></li>
                <li><p>Application Development</p></li>
                </ul>
            </div>
            <div className="port-img">
                <img src={digital_marketing_img} alt="" />
            </div>
        </div>
        <div className="port-services">
        <div className="port-details">
                <h1>Designing Services</h1>
                <ul>
                <li><p>Packaging</p></li>
                <li><p>Creative Concepts</p></li>
                <li><p>Design & Artwork</p></li>
                </ul>
            </div>
            <div className="port-img">
                <img src={img3} alt="" />
            </div>
        </div>
        <div className="port-services1">
        <div className="port-details">
                <h1>Print Media</h1>
                <ul>
                <li><p>News paper ads</p></li>
                <li><p>Brochure</p></li>
                <li><p>Pamphlet</p></li>
                <li><p>In-shop Branding</p></li>
                </ul>
            </div>
            <div className="port-img">
                <img src={img5} alt="" />
            </div>
        </div>
        <div className="port-services">
        <div className="port-details">
                <h1>Branding & Strategy</h1>
                <ul>
                <li><p>Communications Strategy</p></li>
                <li><p>Creative 360 Campaigns</p></li>
                <li><p>Corporate and brand Identity</p></li>
                </ul>
            </div>
            <div className="port-img">
                <img src={img4} alt="" />
            </div>
        </div>
        <div className="port-services1">
        <div className="port-details">
                <h1>Event Promotion</h1>
                <ul>
                <li><p>Corporate Event</p></li>
                <li><p>Mall Activation</p></li>
                </ul>
            </div>
            <div className="port-img">
                <img src={img6} alt="" />
            </div>
        </div>
        
        
      </div>
      <div className="fort-footer">
            <div className="fort-footer-con">
            <h1>Ready to elevate your brand </h1>
            <Link to={"/sptest1/contact"}><button>Let's Take Flight</button></Link>
            {/* <div className="fort-share-btn">
            <button>Instagram</button>
            <button>Facebook</button>
            <button>LinkedIn</button>
            <button>Youtube</button>
                
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
