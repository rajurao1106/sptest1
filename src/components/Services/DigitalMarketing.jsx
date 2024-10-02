import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import digital_marketing_img from '../../assets/Services/DigitalMarketing/digital-marketing-img.jpg' 
import digital_marketing_img1 from '../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg' 
import digital_marketing_img2 from '../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg' 
import digital_marketing_img3 from '../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg' 
import digital_marketing_img4 from '../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg' 

function DigitalMarketing() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1>Connecting Brands with Audiences: Digital Marketing Strategies for Enhanced Engagement</h1>
          </div>
      <div className="service-right">
              <img src={digital_marketing_img} alt="" data-aos="zoom-in"/>
          </div>
      </div>
      <div className='ul'>
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Website Development</h1>
            <p>SP Advertising offers exceptional Website Development services to enhance your online presence. Our team specializes in creating user-friendly, visually appealing websites that drive engagement and conversions, ensuring your brand stands out in the digital landscape with top-notch Website Development services.</p>
          </div>
          <img src={digital_marketing_img1} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={digital_marketing_img2} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>SEO / SEM Optimization</h1>
            <p>SP Advertising provides premier SEO / SEM Optimization Service to boost your online visibility and drive targeted traffic to your website. Our expert team focuses on strategic SEO / SEM Optimization Service to enhance your search engine rankings and optimize your online marketing efforts for maximum impact and growth.</p>
          </div>
        </div>
      
      
      
      <div className="topic-align1" id='topic-align2'> 
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Social Media Marketing</h1>
            <p>SP Advertising provides the best Social Media Marketing Service to amplify your brand's presence across social media platforms. Our tailored approach ensures you receive the best Social Media Marketing Service, leveraging strategic content, targeted campaigns, and performance analytics to drive engagement and achieve your marketing objectives.</p>
          </div>
          <img src={digital_marketing_img3} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={digital_marketing_img4} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Application Development</h1>
            <p>SP Advertising delivers the best Application Development Service to create innovative, high-performance applications tailored to your business needs. Our commitment to excellence ensures you receive the best Application Development Service, with custom solutions that enhance functionality and user experience, driving your success in the digital landscape.</p>
          </div>
        </div>
        
      
      </div>
      <Link to={"/Contact"}><button>Promote Now</button></Link>
    </div>
  </div>
  )
}

export default DigitalMarketing
