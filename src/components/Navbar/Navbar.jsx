import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import up_down from '../../assets/up-down.svg'
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import menu from '../../assets/menu.png'
import whatsapp from '../../assets/watsapp.png'


function Navbar() {
 

  return (
    <div className='navbar'>
      <a className='watsapp' aria-label="Chat on WhatsApp" href="https://wa.me/918085354646"><img src={whatsapp} alt="" /></a>
      <div className="navbar-con">
      <div className="logo"><Link to={"/sptest1/"} ><img src={logo} alt="" /></Link></div>
      <div className="menu">
        <ul className='navbar-menu'>

        <Link to={"/sptest1/"} >Home</Link>
        <Link to={"/sptest1/about"}>About Us</Link>

        <div className="services">
        <div className="up-down">
        <div >Services</div>
        <img src={up_down} alt="" />
        </div>
        <ul>
          <Link to={"/sptest1/Outdoor-Advertising"}><li>Outdoor Advertising</li></Link>
          <Link to={"/sptest1/Digital-Marketing"}><li>Digital Marketing</li></Link>
          <Link to={"/sptest1/Designing-Services"}><li>Designing Services</li></Link>
          <Link to={"/sptest1/Print-Media"}><li>Print Media</li></Link>
          <Link to={"/sptest1/Branding-Strategy"}><li>Branding & Strategy</li></Link>
          <Link to={"/sptest1/Event-Promotion"}><li>Event Promotion</li></Link>
        </ul>
        </div>
        <Link to={"/sptest1/Welcome-page"}  >Clients</Link>
        <Link to={"/sptest1/Blog"}>Blog</Link>
        <Link to={"/sptest1/Portfolio"}>Portfolio</Link>
        </ul>
      </div>
      <div className="cart">
         <Link to={"/sptest1/Contact"}><button>Contact Us</button></Link>
      </div>
      <div className="menu-btn">
      <Menu className='menu-con' menuButton={<MenuButton className='btn-menu'><img src={menu} alt="" className='menu-button'/></MenuButton>}>
      
      <Link to={"/sptest1/"}><MenuItem className='menubox'>Home</MenuItem></Link>
      <Link to={"/sptest1/about"}><MenuItem className='menubox'>About Us</MenuItem></Link>

      <SubMenu label="Services" className='menubox'>
      <Link to={"/sptest1/Outdoor-Advertising"}><MenuItem className='menubox'>Outdoor Advertising</MenuItem></Link>
      <Link to={"/sptest1/Digital-Marketing"}><MenuItem className='menubox'>Digital Marketing</MenuItem></Link>
      <Link to={"/sptest1/Designing-Services"}><MenuItem className='menubox'>Designing Services</MenuItem></Link>
      <Link to={"/sptest1/Print-Media"}><MenuItem className='menubox'>Print Media</MenuItem></Link>
      <Link to={"/sptest1/Branding-Strategy"}><MenuItem >Branding & Strategy</MenuItem></Link>
      <Link to={"/sptest1/Event-Promotion"}><MenuItem className='menubox'>Event Promotion</MenuItem></Link>
      </SubMenu>

      <Link to={"/sptest1/Welcome-page"}><MenuItem className='menubox'>Client</MenuItem></Link>
      <Link to={"/sptest1/Blog"}><MenuItem className='menubox'>Blog</MenuItem></Link>
    </Menu>
      </div>
      </div>
      
    
    </div>
  )
}

export default Navbar
