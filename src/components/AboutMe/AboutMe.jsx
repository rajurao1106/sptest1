import React from 'react'
import './AboutMe.css'
import about_img1 from '../../assets/about-img1.jpeg'
import about_img2 from '../../assets/about-img2.jpeg'
import about_img3 from '../../assets/about-img3.jpeg'
import blur_img from '../../assets/blur-img.jpeg'
import { Link } from 'react-router-dom'
import OurTeam from '../OurTeam/OurTeam'
import team_img1 from '../../assets/about-imge1.jpg'
import team_img2 from '../../assets/about-imge2.jpg'
import team_img3 from '../../assets/about-imge3.jpg'

function AboutMe() {
  return (
    <div className="global">
      <div className="global-box">
      <div className='about-me' id='about'>
        <br /><br />
      <div className="about-me-con">
        <div className="about-me-box">
            <div className="about-details" data-aos="fade-up">
            
                <h3>ABOUT US</h3>
                <h1>WE'LL HELP YOUR BUSINESS TO GET ON A NEW STAGE!</h1>
                <p>"We’re a team of strategic working with largest brands, We believe that progress only happens when you refused to play things safe."</p>
              
                {/* <Link to={"/welcome-page"}><button>READ MORE</button></Link> */}
            </div>
        </div>
      </div>
      <div className="team-image">
        <div className="team-image-con">
        <img className='team-1' src={team_img1} alt="" />
        <img className='team-2' src={team_img2} alt="" />
        <img className='team-3' src={team_img3} alt="" />
          
        </div>
      </div>
    </div>
      </div>
    <OurTeam/>
    </div>
  )
}

export default AboutMe
