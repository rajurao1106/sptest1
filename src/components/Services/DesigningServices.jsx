import React from 'react'
import './Services.css'
import design from '../../assets/Services/DesigningServices/design.jpg'
import { Link } from 'react-router-dom'
import packaging_img from '../../assets/Services/DesigningServices/packaging-img.jpg' 
import packaging_img2 from '../../assets/Services/DesigningServices/creative-design3.jpg' 
import packaging_img1 from '../../assets/Services/DesigningServices/creative-design8.jpg' 

function DesigningServices() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1>Visual Storytelling: Designing Services for Enhanced Brand Identity and User Experience</h1>
          </div>
      <div className="service-right">
              <img src={design} alt="" data-aos="zoom-in"/>
          </div>
          
      </div>
      <div className='ul'>
    
      <div className="topic-align1" id="topic-align2">
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Packaging</h1>
            <p>In today's competitive market, having the Best Packaging Design Service is essential to capture consumer attention. Our creative solutions ensure your packaging is not only visually stunning but also functional and aligned with your brand's identity. With the Best Packaging Design Service, you can make a memorable impact that drives sales and brand loyalty.</p>
          </div>
          <img src={packaging_img} alt="" data-aos="zoom-in"/>
        </div>
        
      <div className="topic-align1">
        <img src={packaging_img1} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Creative Concepts</h1>
            <p>Creative concepts involve generating original ideas and visual strategies to convey a brand’s message uniquely. This process includes brainstorming, sketching, and developing innovative themes that resonate with target audiences and differentiate the brand.</p>
          </div>
        </div>
      
      <div className="topic-align1" id="topic-align2">
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Design & Artwork</h1>
            <p>Design & artwork encompass the creation of visual elements for various media. This includes graphic design, illustrations, and layouts that effectively communicate ideas, enhance brand identity, and engage audiences through aesthetically pleasing and functional visuals.</p>
          </div>
          <img src={packaging_img2} alt="" data-aos="zoom-in"/>
        </div>
        
      

        
      
      </div>
      <Link to={"/Contact"}><button>Promote Now</button></Link>
    </div>
  </div>
  )
}

export default DesigningServices
