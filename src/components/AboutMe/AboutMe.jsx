import React from 'react'
import './AboutMe.css'
import OurTeam from '../OurTeam/OurTeam'
import team_img1 from '../../assets/AboutMe/about-imge1.jpg'
import team_img2 from '../../assets/AboutMe/about-imge2.jpg'
import team_img3 from '../../assets/AboutMe/about-imge3.jpg'

function AboutMe() {
  return (
    <div className="global">
      <div className="global-box">
      <div className='about-me' id='about'>
        <br /><br />
      <div className="about-me-con">
        <div className="about-me-box">
            <div className="about-details">
            
                <h3>About Us</h3>
                {/* <h1 data-aos="fade-up" data-aos-duration="500">Elevating Your Business to New Height With Us</h1> */}
                <p data-aos="fade-up" data-aos-duration="1000">"SP Advertising not just a marketing agency, we’re your partners in growth. We believe in transforming your vision into reality."</p>
              
                {/* <Link to={"/welcome-page"}><button>READ MORE</button></Link> */}
            </div>
        </div>    
      </div>
      <div className="team-image">
        <div className="team-image-con">
        <img className='team-1' src={team_img1} alt="" data-aos="fade-up" data-aos-duration="2000"/>
        <img className='team-2' src={team_img2} alt="" data-aos="fade-up" data-aos-duration="2000"/>
        <img className='team-3' src={team_img3} alt="" data-aos="fade-up" data-aos-duration="2000"/>
          
        </div>
      </div>
    </div>
      </div>
    <OurTeam/>
    </div>
  )
}

export default AboutMe
