import React from 'react'
import './OurTeam.css'
import about_img1 from '../../assets/about-img1.jpeg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import facebook_white from '../../assets/social_white.png'
import instagram_white from '../../assets/instagram_white.png'
import linkedin_white from '../../assets/linkedin_white.png'
import manu from '../../assets/manu.jpg'
import raju from '../../assets/raju.jpg'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import sushant_sir from '../../assets/sushant-sir.jpg'
import piyush_sir from '../../assets/piyush-sir.jpg'
import shreeya_mam from '../../assets/shreeya-mam.jpg'

function OurTeam() {
  return (
      <div className="our-team-con">

        <div className="head-box">
        <div className="head1-con">
          <div className="head-left" data-aos="fade-right">
            
            <h2>Sushant paretkar</h2>
            <p>Partner</p>
          </div>
          <div className="head-right"> 
            <img src={sushant_sir} alt="" />
          </div>
        </div>
        
        <div className="head1-con">
          <div className="head-left" data-aos="fade-right">
            
            <h2>Vishal Shadangi</h2>
            <p>Partner</p>
          </div>
          <div className="head-right">
            <img src={male} alt="" />
          </div>
        </div>

        <div className="head1-con">
          <div className="head-left" data-aos="fade-right">
            
            <h2>Piyush Mishra</h2>
            <p>Partner</p>
          </div>
          <div className="head-right">
            <img src={piyush_sir} alt="" />
          </div>
        </div>
        </div>
        
        
        <br />
        <div className="team-headline" data-aos="fade-up">
        <h1>Meet our team members</h1>
        </div><br />
        <div className="team-member">
          <div className="team-con">

          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our HR Miss Shreeya Singh
Keeping our workplace fun and fabulous! When not organizing interviews, She is busy planning the next team party or trip and perfecting the office vibe.
"</p>
                </div>
              </div>
              <img src={shreeya_mam} alt="" />
            </div>
            <div className="name"><h2>Shreeya Singh</h2></div>
            <div className="position"><p>HR</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Sales Manager S.Bujji Rao
Sealing deals with style and charm! who can turn a "maybe" into a "yes" by saying No fear when I am here. When not closing sales he keep the team entertained with the latest viral videos or reels.
"</p>
                </div>
              </div>
              <img src={male} alt="" />
            </div>
            <div className="name"><h2>S. Bujji</h2></div>
            <div className="position"><p>Sales Manager</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Digital Manager Vaibhav Watkar
All in One who helps everyone with their work and even give advice to make it more better. But sometimes forgets his own work. Our idea factory but always says "take reference" from different sources who turns clicks into gold!
"</p>
                </div>
              </div>
              <img src={male} alt="" />
            </div>
            <div className="name"><h2>Vaibhav Watkar</h2></div>
            <div className="position"><p>Digital Manager</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Web Developer Rahul Nishad 
                  Crafting websites with lots of patience and punctuality. Never takes a day off but somehow manages to get a day off and make digital dreams come true! Master of turning “404 Not Found” into “404 Awesome!"</p>
                </div>
              </div>
              <img src={male} alt="" />
            </div>
            <div className="name"><h2>Rahul Nishad</h2></div>
            <div className="position"><p>Web Developer</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Graphic Designer Miss Manushree Nahta
Crafting eye candy and pixel-perfect magic! When not designing, she is busy debating the best color palette and whether the font choice should be “Serif” or “Sans serif”. The only rule she follow is "more creativity" and "less seriousness" towards work.
"</p>
                </div>
              </div>
              <img src={manu} alt="" />
            </div>
            <div className="name"><h2>Manushree Nahta</h2></div>
            <div className="position"><p>Graphic Designer</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Digital Marketer Miss Ruchi Dua 
Her life motive is to “Post, like, repeat.” Make sure your brand not only stands out but also stands up and dances! Keeps saying the same thing over and over i.e lets make a reel on this trend.  

"</p>
                </div>
              </div>
              <img src={female} alt="" />
            </div>
            <div className="name"><h2>Ruchi Dua</h2></div>
            <div className="position"><p>Digital Marketer</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Web Developer Raju Rao
Crafting websites with the superhero speed as he loves marvels and avengers. He is the spiderman of our company because he develops the web."</p>
                </div>
              </div>
              <img src={raju} alt="" />
            </div>
            <div className="name"><h2>D Raju Rao</h2></div>
            <div className="position"><p>Web Developer</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Prashant Dewangan Turning pitches into wins and clients into fans! As our Sales Executive, Prashant has a knack for closing deals with flair and finesse. When he’s not engaging with clients, he’s probably on the hunt for the perfect snack around the office."</p>
                </div>
              </div>
              <img src={male} alt="" />
            </div>
            <div className="name"><h2>Prashant Dewangan</h2></div>
            <div className="position"><p>Sales Executive</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>
                  "Our Ashfaque Khan says Your success in sales begins with the belief that every challenge is an opportunity to create value, build relationships, and exceed expectations."</p>
                </div>
              </div>
              <img src={male} alt="" />
            </div>
            <div className="name"><h2>Ashfaque Khan</h2></div>
            <div className="position"><p>Sales Manager</p></div>
          </div>
          <div className="team-box" data-aos="fade-up">
            <div className="shine">
              <div className="shine-effect">
                <div className="team-icons">
                  <p>"Our Graphic Designer Miss Shivani vaswani says
                  Crafting visuals that speak louder than words, our Graphic Designer transforms ideas into captivating stories that leave a lasting impression."</p>
                </div>
              </div>
              <img src={female} alt="" />
            </div>
            <div className="name"><h2>Shivani vaswani</h2></div>
            <div className="position"><p>Graphics Designer</p></div>
          </div>
          
          </div>

        </div>
        <br /><br /><br />
       </div>
  )
}

export default OurTeam
