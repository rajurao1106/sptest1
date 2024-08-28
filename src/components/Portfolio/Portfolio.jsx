import React from 'react'
import './Portfolio.css'
import portfolio_heading_img from '../../assets/Portfolio/heading-img.jpg'
import img3 from '../../assets/Portfolio/img3.webp'
import img4 from '../../assets/Portfolio/img4.webp'
import img5 from '../../assets/Portfolio/img5.webp'
import img6 from '../../assets/Portfolio/img6.webp'
import outdoor_img1 from '../../assets/Portfolio/outdoor-img1.jpg'
import digital_marketing_img from '../../assets/Portfolio/digital-marketing-img.jpg' 
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div className='portfolio'>
         <div className="img-back">
         <div className="portfolio-heading">
            <div className="port-text">
            <h3>Portfolio</h3>
                <h1 data-aos="fade-up" data-aos-duration="500">WE'LL HELP YOUR BUSINESS TO GET ON A NEW STAGE!</h1>
                <p data-aos="fade-up" data-aos-duration="1000">SP Advertising is an independent, creatively driven full services marketing communications agency born and groomed in Raipur Chhattisgarh, providing services across India.</p>
            </div>
            
        </div>
        <img src={portfolio_heading_img} alt="" data-aos="fade-up" data-aos-duration="1500"/>
         </div>

      <div className="portfolio-con">
        <div className="port-services">
            <div className="port-img">
            <div className='ul'>
            <p>Mobile Hoarding</p>
            <p>Hoardings</p>
            <p>Gantry</p>
            <p>Pole Kiosk</p>
                </div>
                <img src={outdoor_img1} alt="" />
            </div>
            <div className="port-details">
                <h3>Outdoor Advertising</h3>
            </div>
        </div>

        <div className="port-services">
            <div className="port-img">
            <div className='ul'>
            <p>Website Development</p>
                <p>SEO / SEM Optimization</p>
                <p>Social Media Marketing </p>
                <p>Application Development</p>
                </div>
                <img src={digital_marketing_img} alt="" />
            </div>
            <div className="port-details">
                <h3>Digital Marketing</h3>
            </div>
        </div>

        <div className="port-services">
            <div className="port-img">
                <div className='ul'>
                <p>Packaging </p>
                <p>Creative Concepts</p>
                <p>Design & Artwork </p>
                </div>
                <img src={img3} alt="" />
            </div>
            <div className="port-details">
                <h3>Designing Services</h3>
            </div>
        </div>

        <div className="port-services">
            <div className="port-img">
                <div className='ul'>
                <p>News paper ads </p>
                <p>Brochure</p>
                <p>Pamphlet</p>
                <p>In-shop Branding</p>
                </div>
                <img src={img4} alt="" />
            </div>
            <div className="port-details">
                <h3>Print Media</h3>
            </div>
        </div>

        <div className="port-services">
            <div className="port-img">
                <div className='ul'>
                    <p>Communications Strategy</p>
                    <p>Creative 360 Campaigns</p>
                    <p>Corporate and brand Identity</p>
                </div>
                <img src={img5} alt="" />
            </div>
            <div className="port-details">
                <h3>Branding & Strategy</h3>
            </div>
        </div>

        <div className="port-services">
            <div className="port-img">
                <div className='ul'>
                    <p>Corporate Event</p>
                    <p>Mall Activation</p>
                </div>
                <img src={img6} alt="" />
            </div>
            <div className="port-details">
                <h3>Event Promotion</h3>
            </div>
        </div>
      
      </div>
      <div className="fort-footer">
            <div className="fort-footer-con">
            <h1>Ready to elevate your brand </h1>
            <Link to={"/contact"}><button>Let's Take Flight</button></Link>
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
