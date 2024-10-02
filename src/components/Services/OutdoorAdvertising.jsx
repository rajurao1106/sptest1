import React from 'react'
import './Services.css'
import outdoor_img1 from '../../assets/Services/OutdoorAdvertising/outdoor-img1.jpg'
import { Link } from 'react-router-dom'
import showcase1 from '../../assets/Services/OutdoorAdvertising/showcase1.webp'
import showcase2 from '../../assets/Services/OutdoorAdvertising/showcase2.webp'
import outdoor_img2 from '../../assets/Services/OutdoorAdvertising/outdoor-advertising5.jpg'
import gantry from '../../assets/Services/OutdoorAdvertising/gantry.jpg'

function OutdoorAdvertising() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1 data-aos="fade-right">Capturing Attention On-the-Go: The Power of Outdoor Advertising in Public Spaces</h1>
          </div>
      <div className="service-right">
              <img src={outdoor_img1} alt="" data-aos="zoom-in"/>
          </div>
          
      </div>
      <div className='ul'>
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Mobile Hoarding</h1>
            <p>Mobile Hoarding Advertising features large, movable panels on vehicles, offering flexible campaigns that reach high-traffic areas, events, or neighborhoods for dynamic exposure. SP Advertising provides top-notch Best Mobile Hoarding Advertising services, ensuring your brand gains maximum visibility and impact on the go.</p>
          </div>
          <img src={showcase1} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={outdoor_img2} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Hoardings</h1>
            <p>Hoarding Advertising involves large, stationary boards placed in prominent locations to capture attention and deliver high-impact campaigns to both pedestrians and drivers. SP Advertising excels in providing Best Hoarding Advertising services, ensuring your brand achieves maximum visibility in key locations.</p>
          </div>
        </div>
      
      
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Gantry</h1>
            <p>Gantries Advertising utilizes large, elevated structures that hold advertising panels or digital screens above roadways, highways, or busy intersections. Designed for maximum visibility from a distance, SP Advertising offers top-tier Best Gantries Advertising services to ensure your brand captures the attention of both drivers and pedestrians in high-traffic areas.</p>
          </div>
          <img src={gantry} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={showcase2} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Pole Kiosk</h1>
            <p>Pole kiosks Advertising features small vertical panels mounted on street poles, ideal for displaying posters or digital content in urban and high-traffic areas. SP Advertising specializes in Best Pole kiosks Advertising, providing strategic placements to maximize brand visibility and reach in key locations.</p>
          </div>
        </div>
        
      
      </div>
      <Link to={"/Contact"}><button>Promote Now</button></Link>
    </div>
  </div>
  )
}

export default OutdoorAdvertising
