import React from 'react'
import './Home.css'
import home_image from '../../assets/Home/business.svg'
import f_img1 from '../../assets/Home/f-img1.svg'
import ScrollEffect from '../ScrollEffect/ScrollEffect'
import Showcase from '../Showcase/Showcase'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


function Home() {
  return (
    <div>
      <Navbar/>
      <div className='home' id='home'>
      <div className="home-con">
      
        <div className="web-details" data-aos="fade-right" >
            <h1>Step Up Your Game and Transform Your Brand’s Potential!</h1><br />
            <p>Welcome to SP ADVERTISING, where your vision comes to life with our powerful marketing solutions.We offer a one-stop solution for all your advertising needs.</p>
            <div className="web-btn">
                
            <Link to={"/services"}><button>Browse Services</button></Link>
            </div>
        </div>
        <div className="image">
        <div className="f-image">
        <img src={f_img1} alt="" />
        
        </div>
          <div data-aos="fade-up">
          <img className='home-image'  src={home_image} alt=""/>
          </div>
        </div>
      </div>
    </div>
    <Showcase/>
    <WhatWeDo/>
    </div>
  )
}

export default Home
