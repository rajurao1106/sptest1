import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Navbar/logo.webp'
import up_down from '../../assets/Navbar/up-down.svg'
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import menu from '../../assets/Navbar/menu.png';
import whatsapp from '../../assets/Navbar/watsapp.png';


function Navbar() {

  const [icon, setIcon] = useState("false")
  const clickEvent = () => {
    setIcon(!icon)
  }

  return (
    <div className='navbar'>

      <a className='watsapp' aria-label="Chat on WhatsAp" href="https://wa.me/918085354646"><img src={whatsapp} alt="" /></a>
      <div className="navbar-con">
        
      <div className="logo"><Link to={"/"} ><img src={logo} alt="" /></Link></div>
      <div className="menu">
        <ul className='navbar-menu'>

        <Link to={"/"} >Home</Link>
        <Link to={"/about"}>About Us</Link>

        <div className="services">
        <div className="up-down">
        <div >Services</div>
        <img src={up_down} alt="" />
        </div>
        <ul>
          <Link to={"/Outdoor-Advertising"}><li>Outdoor Advertising</li></Link>
          <Link to={"/Digital-Marketing"}><li>Digital Marketing</li></Link>
          <Link to={"/Designing-Services"}><li>Designing Services</li></Link>
          <Link to={"/Print-Media"}><li>Print Media</li></Link>
          <Link to={"/Branding-Strategy"}><li>Branding & Strategy</li></Link>
          <Link to={"/Event-Promotion"}><li>Event Promotion</li></Link>
        </ul>
        </div>
        <Link to={"/Welcome-page"}  >Clients</Link>
        <Link to={"/Blog"}>Blog</Link>
        {/* <Link to={"/Portfolio"}>Portfolio</Link> */}
        </ul>
      </div>
      <div className="cart">
         <Link to={"/Contact"}><button>Contact Us</button></Link>
      </div>
      <div className="menu-btn">
      <Menu className='menu-con' menuButton={<MenuButton className='btn-menu'><img src={menu} alt="" className='menu-button'/></MenuButton>}>
      
      <Link to={"/"}><MenuItem className='menubox'>Home</MenuItem></Link>
      <Link to={"/about"}><MenuItem className='menubox'>About Us</MenuItem></Link>

      <SubMenu label="Services" className='menubox'>
      <Link to={"/Outdoor-Advertising"}><MenuItem className='menubox'>Outdoor Advertising</MenuItem></Link>
      <Link to={"/Digital-Marketing"}><MenuItem className='menubox'>Digital Marketing</MenuItem></Link>
      <Link to={"/Designing-Services"}><MenuItem className='menubox'>Designing Services</MenuItem></Link>
      <Link to={"/Print-Media"}><MenuItem className='menubox'>Print Media</MenuItem></Link>
      <Link to={"/Branding-Strategy"}><MenuItem >Branding & Strategy</MenuItem></Link>
      <Link to={"/Event-Promotion"}><MenuItem className='menubox'>Event Promotion</MenuItem></Link>
      </SubMenu>

      <Link to={"/Welcome-page"}><MenuItem className='menubox'>Client</MenuItem></Link>
      <Link to={"/Blog"}><MenuItem className='menubox'>Blog</MenuItem></Link>
    </Menu>
      </div>
      </div>
      
    
    </div>
  )
}

export default Navbar
