import React from 'react'
import './Services.css'
import print from '../../assets/Services/PrintMedia/print.jpg'
import { Link } from 'react-router-dom'
import print_img2 from '../../assets/Services/PrintMedia/prini-img2.jpeg'
import Newspaper_Ads from '../../assets/Services/PrintMedia/Newspaper-Ads.jpg'
import Brochure from '../../assets/Services/PrintMedia/Brochure.jpg'
import inshop from '../../assets/Services/PrintMedia/inshop.png'

function PrintMedia() {
  return (
    <div className='service'>
    <div className="service-con">
      <div className="service-box">
      <div className="service-left">
              <h1>Tangible Impact: The Enduring Power of Print Media in Advertising</h1>
          </div>
      <div className="service-right">
              <img src={print} alt="" data-aos="zoom-in"/>
          </div>
          
      </div>
      <div className='ul'>
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Newspaper Ads</h1>
            <p>Newspaper ads are print advertisements placed in newspapers to reach a broad, local audience. They use compelling visuals and text to promote products or services, leveraging the newspaper’s daily readership for targeted exposure.</p>
          </div>
          <img src={Newspaper_Ads} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={Brochure} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>Brochure</h1>
            <p>A brochure is a printed booklet that provides detailed information about products, services, or organizations. It uses high-quality graphics and structured content to inform and persuade potential customers, often distributed in public places or direct mail.</p>
          </div>
        </div>
      
      
    
      <div className="topic-align1" id='topic-align2'>
        
          <div className='topic-left' data-aos="fade-right">
            <h1>Pamphlet</h1>
            <p>A pamphlet is a small, folded booklet or flyer designed to offer concise information about a specific topic, product, or service. It aims to educate and engage readers through clear, straightforward content and appealing design.</p>
          </div>
          <img src={print_img2} alt="" data-aos="zoom-in"/>
        </div>
        
      
    
      <div className="topic-align1">
        <img src={inshop} alt="" data-aos="zoom-in"/>
          <div className='topic-left' data-aos="fade-right">
            <h1>In-Shop Branding</h1>
            <p>In-shop branding includes print materials like posters, banners, and point-of-sale displays used within retail environments. It enhances the shopping experience by reinforcing brand identity, promoting products, and guiding customer behavior at the point of purchase.</p>
          </div>
        </div>
        
      
      </div>
      <Link to={"/Contact"}><button>Promote Now</button></Link>
    </div>
  </div>
  )
}

export default PrintMedia
