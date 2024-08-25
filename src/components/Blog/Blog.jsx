import React from 'react'
import './Blog.css'
import update_image from '../../assets/Blog/brand.jpg'
import img3 from '../../assets/Blog/img3.webp'
import img4 from '../../assets/Blog/img4.webp'
import img5 from '../../assets/Blog/img5.webp'
import img6 from '../../assets/Blog/img6.webp'
import arrow from '../../assets/Blog/right-arrow.png'
import outdoor_img1 from '../../assets/Blog/outdoor-img1.jpg'
import digital_marketing_img from '../../assets/Blog/digital-marketing-img.jpg' 
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className='blog'>
      <div className="blog-con">
        <div className="new-update">
            
            <div className="headline" data-aos="fade-right">
                <div className="headline-con">
                <h1>The Significance of Branding in Digital Marketing</h1>
                <h3>Exploring how a strong brand identity can impact
                your digital marketing efforts and overall online 
                presence. Discussing the significance of content marketing
                and providing tips on creating and distributing high-quality content.</h3>
                </div>
            </div>
            <div className="update-image">
                <img src={update_image} alt="" data-aos="zoom-in"/>
            </div>
        </div>
      </div>
      <div className="articles">
        <div className="article-search">
            <h1>Latest articles</h1>
            <div className="topics">
                {/* <button>All</button>
                <button>Branding</button>
                <button>Development</button>
                <button>Design</button> */}
            </div>
        </div>
        <div className="latest-article" >
        <div className="article-box" >
                <div className="img-text">
                    
                    <img src={outdoor_img1} alt="" />
                    <h3>Capturing Attention On-the-Go: The Power of Outdoor Advertising in Public Spaces</h3>
                </div>
                <Link to={"/Outdoor-Advertising"}><p>Read More <div className="p-dot"></div></p></Link>
                
            </div>
            <div className="article-box">
                <div className="img-text">
                    <img src={digital_marketing_img} alt="" />
                    <h3>Connecting Brands with Audiences: Digital Marketing Strategies for Enhanced Engagement</h3>
                </div>
                <Link to={"/Digital-Marketing"} ><p>Read More <div className="p-dot"></div></p></Link>
            </div>
            <div  className="article-box">
                <div className="img-text">
                    <img src={img3} alt="" />
                    <h3>Visual Storytelling: Designing Services for Enhanced Brand Identity and User Experience</h3>
                </div>
                <Link to={"/Designing-Services"}><p>Read More <div className="p-dot"></div></p></Link>
            </div>
            <div  className="article-box">
                <div className="img-text">
                    <img src={img5} alt="" />
                    <h3>Crafting Unique Brand Identities: Strategic Planning for Long-Term Success</h3>
                </div>
                <Link to={"/Print-Media"}><p>Read More <div className="p-dot"></div></p></Link>
            </div>
            <div  className="article-box">
                <div className="img-text">
                    <img src={img4} alt="" />
                    <h3>Tangible Impact: The Enduring Power of Print Media in Advertising</h3>
                </div>
                <Link to={"/Branding-Strategy"}><p>Read More <div className="p-dot"></div></p></Link>
            </div>
            <div  className="article-box">
                <div className="img-text">
                    <img src={img6} alt="" />
                    <h3>Driving Engagement and Attendance: Effective Strategies for Event Promotion</h3>
                </div>
                <Link to={"/Event-Promotion"}><p>Read More <div className="p-dot"></div></p></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
