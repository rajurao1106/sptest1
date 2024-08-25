import React from 'react'
import './ScrollEffect.css'
import scroll_img1 from '../../assets/ScrollEffect/scroll-digitalmarketing.jpg'
import scroll_img2 from '../../assets/ScrollEffect/scroll-banner2.jpg'
import scroll_img3 from '../../assets/ScrollEffect/scroll-banner.jpg'

import { Link } from 'react-router-dom'

function ScrollEffect() {
  return (
    <div className='scroll-effect'>
      <div className="scroll-box">
      <div className="con1">
        <div className="background" data-aos="zoom-in" >
            <div className="bg-con">
            <h1>Your brand's success is our mission</h1>
            <p>SP Advertising is an independent, creatively driven full services marketing communications agency born and groomed in Raipur Chhattisgarh, providing services across India.  </p>
            </div>
            <Link to={"/sptest1/Choose-Us"}><button>Read More</button></Link>
        </div>
      </div>
      <div className='div1'>
      <div className="con2" data-aos="zoom-in" >
        <img src={scroll_img1} alt="" />
        <img src={scroll_img3} alt="" />
      </div>
      <div className="con3">
      <img src={scroll_img2} alt="" data-aos="zoom-in" />
      </div>
      </div>
      </div>
    </div>
  )
}

export default ScrollEffect
