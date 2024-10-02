import React from 'react'
import './Portfolio.css'
import portfolio_heading_img from '../../assets/Portfolio/heading-img.jpg'
import flight from '../../assets/Portfolio/flight.png'
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
import outdoor1 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising1.jpg'
import outdoor2 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising2.jpg'
import outdoor3 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising3.jpg'
import outdoor4 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising4.jpg'
import outdoor5 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising5.jpg'
import outdoor6 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising6.jpg'
import outdoor7 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising7.jpg'
import outdoor8 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising8.jpg'
import outdoor9 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising9.jpg'
import outdoor10 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising10.jpg'
import outdoor11 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising11.jpg'

import digital_marketing_img from '../../assets/Services/DigitalMarketing/digital-marketing-img.jpg' 
import digital_marketing_img1 from '../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg' 
import digital_marketing_img2 from '../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg' 
import digital_marketing_img3 from '../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg' 
import digital_marketing_img4 from '../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg' 

import packaging_img from '../../assets/Services/DesigningServices/packaging-img.jpg' 
import packaging_img1 from '../../assets/Services/DesigningServices/packaging-img2.jpg' 
import packaging_img2 from '../../assets/Services/DesigningServices/packaging-img3.jpg' 
import design1 from '../../assets/Services/DesigningServices/creative-design1.jpg'
import design2 from '../../assets/Services/DesigningServices/creative-design2.jpg'
import design3 from '../../assets/Services/DesigningServices/creative-design3.jpg'
import design4 from '../../assets/Services/DesigningServices/creative-design4.jpg'
import design5 from '../../assets/Services/DesigningServices/creative-design5.jpg'
import design6 from '../../assets/Services/DesigningServices/creative-design6.jpg'
import design7 from '../../assets/Services/DesigningServices/creative-design7.jpg'
import design8 from '../../assets/Services/DesigningServices/creative-design8.jpg'
import design9 from '../../assets/Services/DesigningServices/creative-design9.jpg'
import design10 from '../../assets/Services/DesigningServices/creative-design10.jpg'

import print_img2 from '../../assets/Services/PrintMedia/prini-img2.jpeg'
import Newspaper_Ads from '../../assets/Services/PrintMedia/Newspaper-Ads.jpg'
import Pamphlet from '../../assets/Services/PrintMedia/Pamphlet.jpg'

import inshop1 from '../../assets/Services/BrandingStrategy/inshop1.jpg'
import inshop2 from '../../assets/Services/BrandingStrategy/inshop2.jpg'
import inshop3 from '../../assets/Services/BrandingStrategy/inshop3.jpg'
import inshop4 from '../../assets/Services/BrandingStrategy/inshop4.jpg'
import inshop5 from '../../assets/Services/BrandingStrategy/inshop5.jpg'
import inshop6 from '../../assets/Services/BrandingStrategy/inshop6.jpg'
import inshop7 from '../../assets/Services/BrandingStrategy/inshop7.jpg'
import inshop8 from '../../assets/Services/BrandingStrategy/inshop8.jpg'
import inshop9 from '../../assets/Services/BrandingStrategy/inshop9.jpg'


import Corporate_Event from '../../assets/Services/EventPromotion/Corporate-Event.jpg'
import mall from '../../assets/Services/EventPromotion/mall.png'
import event_promotion1 from '../../assets/Services/EventPromotion/event-promotion1.jpg'
import event_promotion2 from '../../assets/Services/EventPromotion/event-promotion2.jpg'
import event_promotion3 from '../../assets/Services/EventPromotion/event-promotion3.jpg'
import event_promotion4 from '../../assets/Services/EventPromotion/event-promotion4.jpg'

function Portfolio() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray",borderRadius:"50px", boxShadow:"0px 0px 10px gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray",borderRadius:"50px", boxShadow:"0px 0px 10px gray" }}
        onClick={onClick}
      />
    );
  }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        centerPadding: "60px",
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 100,
        speed: 5000,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              pauseOnHover: false,
              speed: 5000,
      cssEase: "linear",
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              pauseOnHover: false,
              speed: 5000,
      cssEase: "linear",
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
      pauseOnHover: true,
      autoplaySpeed: 100,
      speed: 5000,
      cssEase: "linear",
      rtl: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            pauseOnHover: false,
            speed: 5000,
    cssEase: "linear",
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            pauseOnHover: false,
            speed: 5000,
    cssEase: "linear",
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
      speed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
      autoplaySpeed: 100,
      rtl: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            pauseOnHover: false,
            speed: 5000,
    cssEase: "linear",
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            pauseOnHover: false,
            speed: 5000,
    cssEase: "linear",
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
      pauseOnHover: true,
      autoplaySpeed: 100,  
      speed: 5000,
      cssEase: "linear",
      rtl: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            pauseOnHover: false,
            speed: 5000,
    cssEase: "linear",
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            pauseOnHover: false,
            speed: 5000,
    cssEase: "linear",
          }
        }
      ]
    };
    const settings4 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      centerPadding: "60px",
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
  cssEase: "linear",
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
        {/* <div>
        <img src={outdoor_img1} alt="" />
        </div> */}
        
        <div>
            <img src={showcase1} alt="" />
        </div>
        <div>
            <img src={showcase2} alt="" />
        </div>
        <div>
            <img src={gantry} alt="" />
        </div>
        <div>
            <img src={outdoor1} alt="" />
        </div>
        <div>
            <img src={outdoor2} alt="" />
        </div>
       
        {/* <div>
            <img src={outdoor4} alt="" />
        </div> */}
        <div>
            <img src={outdoor5} alt="" />
        </div>
        <div>
            <img src={outdoor6} alt="" />
        </div>
        <div>
            <img src={outdoor7} alt="" />
        </div>
        {/* <div>
            <img src={outdoor8} alt="" />
        </div> */}
        <div>
            <img src={outdoor9} alt="" />
        </div>
        <div>
            <img src={outdoor10} alt="" />
        </div>
        <div>
            <img src={outdoor11} alt="" />
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
        <h2>Creative Designs</h2>
        <Slider {...settings} className='portfolio-slider'>
        <div>
        <img src={design1} alt="" />
        </div>
        <div>
        <img src={design2} alt="" />
        </div>
        <div>
        <img src={design3} alt="" />
        </div>
        <div>
        <img src={design4} alt="" />
        </div>
        <div>
        <img src={design5} alt="" />
        </div>
        <div>
        <img src={design6} alt="" />
        </div>
        <div>
        <img src={design7} alt="" />
        </div>
        <div>
        <img src={design8} alt="" />
        </div>
        {/* <div>
        <img src={design9} alt="" />
        </div> */}
        <div>
        <img src={design10} alt="" />
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
        <img src={Pamphlet} alt="" />
        </div>
        </Slider>
        </div>

        <div className="port-slider">
        <h2>Inshop</h2>
        <Slider {...settings} className='portfolio-slider'>
        <div>
        <img src={inshop1} alt="" />
        </div>
        <div>
        <img src={inshop2} alt="" />
        </div>
        <div>
        <img src={inshop3} alt="" />
        </div>
        <div>
        <img src={inshop4} alt="" />
        </div>
        <div>
        <img src={inshop5} alt="" />
        </div>
        {/* <div>
        <img src={inshop6} alt="" />
        </div> */}
        <div>
        <img src={inshop7} alt="" />
        </div>
        <div>
        <img src={inshop8} alt="" />
        </div>
        <div>
        <img src={inshop9} alt="" />
        </div>
        
       
        </Slider>
        </div>

        <div className="port-slider">
        <h2>Event Promotion</h2>
        <Slider {...settings3} className='portfolio-slider'>
        <div>
        <img src={event_promotion1} alt="" />
        </div>
        <div>
        <img src={event_promotion2} alt="" />
        </div>
        <div>
        <img src={event_promotion3} alt="" />
        </div>
        <div>
        <img src={event_promotion4} alt="" />
        </div>
        
        </Slider>
        </div>

        <div className="port-slider ">
        <h2>Videos</h2>
        <Slider {...settings4} className='youtube-video'>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/advdAc9T4t4?si=qQYkKMioC5eTPJh7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/x6krlcfwAu4?si=2LKIbHunn6T2HiBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NhAMivemT74?si=2o-mpo5AgLuys5EL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ngh3UnPYdtA?si=DPVz_SvvBIbsHZ0F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PYK6dejbeEw?si=74EuiYES1bJ-KJX9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Vr-AeBMXcsw?si=YS4vkiAb3wtGeFmC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aZ-602v_lzI?si=wdNE5Bl9ipInf4Rq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/44wW3594gws?si=jpIkdJOxUx4gxek2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        </Slider>
        </div>

        

      <div className="fort-footer">
            <div className="fort-cover">
            <div className="fort-footer-con">
            <h1>Ready to elevate your brand </h1>
            <Link to={"/contact"}>
            <button>
              {/* <img src={flight} alt="" /> */}
              Let's Take Flight</button></Link>
            
            </div>
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/Mcieg9x-nJk?si=Kh4KZGEKY7cQWX3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
