import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Navbar/logo.webp'
import up_down from '../../assets/Navbar/up-down.svg'
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import menu_icon from '../../assets/Navbar/menu.png';
import whatsapp from '../../assets/Navbar/watsapp.png';


function Navbar() {

  const [menu, setMenu] = useState(() => {
    return localStorage.getItem("menu") || "Home";
  });

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);

  return (
    <div className='navbar' >

      <a className='watsapp' aria-label="Chat on WhatsAp" href="https://wa.me/918085354646"><img src={whatsapp} alt="" /></a>
      <div className="navbar-con">
        
      <div className="logo"><a href='/' onClick={()=>setMenu("Home")}><img src={logo} alt="" /></a></div>
      <div className="menu">
        <ul className='navbar-menu'>

        <p><a href='/' id='home1' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</a></p>
         <p><a href='/About' onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>
         About</a></p>

        <div className="services">
        <div className="up-down">
        <div ><p className={menu==="Services"?"active":""}>Services</p></div>
        <img src={up_down} alt="" />
        </div>
        <ul>
          <a href='/Outdoor-Advertising'><li onClick={()=>setMenu("Services")} >Outdoor Advertising</li></a>
          <a href='/Digital-Marketing'><li onClick={()=>setMenu("Services")}>Digital Marketing</li></a>
          <a href='/Designing-Services'><li onClick={()=>setMenu("Services")}>Designing Services</li></a>
          <a href='/Print-Media'><li onClick={()=>setMenu("Services")}>Print Media</li></a>
          <a href='/Branding-Strategy'><li onClick={()=>setMenu("Services")}>Branding & Strategy</li></a>
          <a href='/Event-Promotion'><li onClick={()=>setMenu("Services")}>Event Promotion</li></a>
        </ul>
        </div>
        <p><a href={"/Welcome-page"} onClick={()=>setMenu("Client")} className={menu==="Client"?"active":""}>Clients</a></p>
        <p> <a href='/Portfolio' onClick={()=>setMenu("Portfolio")} className={menu==="Portfolio"?"active":""}>Portfolio</a></p>
        <p> <a href='/Blog' onClick={()=>setMenu("Blog")} className={menu==="Blog"?"active":""}>Blog</a></p>
        </ul>
      </div>
      <div className="cart">
         <Link to={"/Contact"}><button>Contact Us</button></Link>
      </div>
      <div className="menu-btn">
      <Menu className='menu-con' menuButton={<MenuButton className='btn-menu'><img src={menu_icon} alt="" className='menu-button'/></MenuButton>}>
      
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
      <Link to={"/Portfolio"}><MenuItem className='menubox'>Portfolio</MenuItem></Link>
      <Link to={"/Contact"}><MenuItem className='menubox'>Contact Us</MenuItem></Link>
    </Menu>
      </div>
      </div>
      
    
    </div>
  )
}

export default Navbar
