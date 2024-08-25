import React from 'react'
import './WelcomePage.css'
import client_image1 from '../../assets/WelcomePage/client1.webp'
import client_image2 from '../../assets/WelcomePage/client2.webp'
import client_image3 from '../../assets/WelcomePage/client3.webp'
import client_image4 from '../../assets/WelcomePage/client4.webp'
import client_image5 from '../../assets/WelcomePage/client5.webp'
import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WelcomePage() {

  return (
    <div className='welcome' id='welcome'>
        <h1>WELCOME TO SP ADVERTISING</h1><br />
      <div className="welcome-con">
        <div className="welcome-box">
        <div className="logo2">
            
        </div>
        <div className="welcome-sentence">
            <div className="sentence-center">
            <p>At SP Advertising, we are dedicated to providing top-notch advertising services to our clients. We specialize in creating eye-catching ads that grab the attention of your target audience and deliver results. Our team of experts is passionate about what we do, and we work tirelessly to ensure that every project we take on is a success. From print ads to digital campaigns, we've got you covered.</p>
            
            <p>we are committed to delivering exceptional advertising solutions tailored to our clients' needs. We excel in crafting compelling ads that captivate target audiences and drive impactful results. Our dedicated team of professionals brings a wealth of experience and creativity to every project, ensuring that each campaign—whether print or digital—achieves its objectives. Our passion for advertising fuels our relentless pursuit of excellence, making us a trusted partner for businesses looking to enhance their brand presence and achieve their marketing goals.</p>
            </div>
            </div>
        </div>
      <marquee className="clients-image">
      <img className='client-img1' src={client_image1} alt="" />
      <img className='client-img2' src={client_image2} alt="" />
      <img className='client-img3' src={client_image3} alt="" />
      <img className='client-img4' src={client_image4} alt="" />
      <img className='client-img5' src={client_image5} alt="" />
      <img className='client-img1' src={client_image1} alt="" />
      <img className='client-img2' src={client_image2} alt="" />
      <img className='client-img3' src={client_image3} alt="" />
      <img className='client-img4' src={client_image4} alt="" />
      <img className='client-img5' src={client_image5} alt="" />
      </ marquee>
        </div>
      
    </div>
  )
}

export default WelcomePage
