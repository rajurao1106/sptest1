import React from 'react';
import './Showcase.css'
import showcase1 from '../../assets/Showcase/showcase1.webp';
import showcase2 from '../../assets/Showcase/showcase2.webp';
import showcase3 from '../../assets/Showcase/showcase3.webp';
import showcase4 from '../../assets/Showcase/showcase4.webp';
import showcase5 from '../../assets/Showcase/showcase5.webp';
import showcase6 from '../../assets/Showcase/Showcase6.webp';
import 'react-slideshow-image/dist/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Showcase = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray",borderRadius:"50px", boxShadow:"0px 0px 10px lightgray"  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgray",borderRadius:"50px", boxShadow:"0px 0px 10px lightgray" }}
        onClick={onClick}
      />
    );
  }

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            centerPadding: "60px",
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 2000,
            nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]

        };
    return (
      <div className="slide">
        <div className='recent-work'><h1><p>RECENT WORKS</p></h1></div>
        
        <Slider {...settings} className='slide-con'>
        <div>
        <img src={showcase1} alt="" />
        </div>
        <div>
        <img src={showcase2} alt="" />
        </div>
        <div>
        <img src={showcase3} alt="" />
        </div>
        <div>
        <img src={showcase4} alt="" />
        </div>
        <div>
        <img src={showcase5} alt="" />
        </div>
        <div>
        <img src={showcase6} alt="" />
        </div>
        
    </Slider>
      </div>
    )
}
export default Showcase