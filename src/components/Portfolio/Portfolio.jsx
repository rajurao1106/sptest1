import React from 'react'
import './Portfolio.css'
import portfolio_heading_img from '../../assets/Portfolio/heading-img.jpg'
import img3 from '../../assets/Portfolio/img3.webp'
import img4 from '../../assets/Portfolio/img4.webp'
import img5 from '../../assets/Portfolio/img5.webp'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import outdoor_img1 from '../../assets/Services/OutdoorAdvertising/outdoor-img1.jpg'
import outdoor_img2 from '../../assets/Services/OutdoorAdvertising/hoarding.jpg'
import showcase1 from '../../assets/Services/OutdoorAdvertising/showcase1.webp'
import showcase2 from '../../assets/Services/OutdoorAdvertising/showcase2.webp'
import gantry from '../../assets/Services/OutdoorAdvertising/gantry.jpg'

import digital_marketing_img from '../../assets/Services/DigitalMarketing/digital-marketing-img.jpg' 
import digital_marketing_img1 from '../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg' 
import digital_marketing_img2 from '../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg' 
import digital_marketing_img3 from '../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg' 
import digital_marketing_img4 from '../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg' 

import packaging_img from '../../assets/Services/DesigningServices/packaging-img.jpg' 
import packaging_img1 from '../../assets/Services/DesigningServices/packaging-img2.jpg' 
import packaging_img2 from '../../assets/Services/DesigningServices/packaging-img3.jpg' 

import print_img2 from '../../assets/Services/PrintMedia/prini-img2.jpeg'
import Newspaper_Ads from '../../assets/Services/PrintMedia/Newspaper-Ads.jpg'
import Brochure from '../../assets/Services/PrintMedia/Brochure.jpg'

import Communications_Strategy from '../../assets/Services/BrandingStrategy/Communications-Strategy.jpg'
import Creative_Campaigns from '../../assets/Services/BrandingStrategy/Creative_Campaigns.jpg'
import Corporate from '../../assets/Services/BrandingStrategy/Corporate.jpg'

import Corporate_Event from '../../assets/Services/EventPromotion/Corporate-Event.jpg'
import mall from '../../assets/Services/EventPromotion/mall.png'

function Portfolio() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        centerPadding: "60px",
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              pauseOnHover: true,
            }
          }
        ]
        
    };
    const settings1 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      centerPadding: "60px",
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 2000,
      rtl: true,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              pauseOnHover: true,
            }
          }
        ]
    };
    const settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      centerPadding: "60px",
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 2000,
      rtl: true,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              pauseOnHover: true,
            }
          }
        ]
    };
    const settings3 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      centerPadding: "60px",
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 2000,
      rtl: true,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              pauseOnHover: true,
            }
          }
        ]
    };
    
  return (
    <div className='portfolio'>
         <div className="img-back">
         <div className="portfolio-heading">
            <div className="port-text">
            <h3>Portfolio</h3>
                <h1 data-aos="fade-up" data-aos-duration="500">Explore Our Success Stories</h1>
                <p data-aos="fade-up" data-aos-duration="1000">"We take pride in showcasing our diverse range of projects that have driven success to many of our valued clients."</p>
            </div>
            
        </div>
        <img src={portfolio_heading_img} alt="" data-aos="fade-up" data-aos-duration="1500"/>
         </div>

         <div className="port-slider">
        <h2>Outdoor Advertising</h2>
        <Slider {...settings} className='portfolio-slider'>
        <div>
        <img src={outdoor_img1} alt="" />
        </div>
        <div>
        <img src={outdoor_img2} alt="" />
        </div>
        <div>
            <img src={showcase1} alt="" />
        </div>
        <div>
            <img src={showcase2} alt="" />
        </div>
        <div>
            <img src={gantry} alt="" />
        </div>
        </Slider>
        </div>

        <div className="port-slider">
        <h2>Digital Marketing</h2>
        <Slider {...settings1} className='portfolio-slider'>
        <div>
        <img src={digital_marketing_img} alt="" />
        </div>
        <div>
        <img src={digital_marketing_img1} alt="" />
        </div>
        <div>
            <img src={digital_marketing_img2} alt="" />
        </div>
        <div>
            <img src={digital_marketing_img3} alt="" />
        </div>
        <div>
            <img src={digital_marketing_img4} alt="" />
        </div>
        </Slider>
        </div>

        <div className="port-slider">
        <h2>Designing Services</h2>
        <Slider {...settings} className='portfolio-slider'>
        <div>
        <img src={packaging_img} alt="" />
        </div>
        <div>
            <img src={packaging_img1} alt="" />
        </div>
        <div>
            <img src={packaging_img2} alt="" />
        </div>
        </Slider>
        </div>

        <div className="port-slider">
        <h2>Print Media</h2>
        <Slider {...settings2} className='portfolio-slider'>
        <div>
        <img src={print_img2} alt="" />
        </div>
        <div>
        <img src={Newspaper_Ads} alt="" />
        </div>
        <div>
            <img src={Brochure} alt="" />
        </div>
        </Slider>
        </div>

        <div className="port-slider">
        <h2>Branding & Strategy</h2>
        <Slider {...settings} className='portfolio-slider'>
        <div>
        <img src={Communications_Strategy} alt="" />
        </div>
        <div>
        <img src={Creative_Campaigns} alt="" />
        </div>
        <div>
            <img src={Corporate} alt="" />
        </div>
        </Slider>
        </div>

        <div className="port-slider">
        <h2>Event Promotion</h2>
        <Slider {...settings3} className='portfolio-slider'>
        <div>
        <img src={Corporate_Event} alt="" />
        </div>
        <div>
        <img src={mall} alt="" />
        </div>
        
        </Slider>
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
