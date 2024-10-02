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

      <a className='watsapp' aria-label="Chat on WhatsApp" to="https://wa.me/918085354646"><img src={whatsapp} alt="" /></a>
      <div className="navbar-con">
        
      <div className="logo"><Link to={'/'} onClick={()=>setMenu("Home")}><img src={logo} alt="" /></Link></div>
      <div className="menu">
        <ul className='navbar-menu'>
       
      <Link to={'/'} onClick={()=>setMenu("Home")} className={menu==="Home"?"active":"deactive"}><p>Home</p></Link>
      
      <Link to={'/About'} onClick={()=>setMenu("About")} className={menu==="About"?"active":"deactive"}><p>About</p></Link>

        <div className="services">
        <div className="up-down">
        <div ><p className={menu==="Services"?"active":"deactive"}>Services</p></div>
        <img src={up_down} alt="" />
        </div>
        <ul>
          <Link to={'/Outdoor-Advertising'}><li onClick={()=>setMenu("Services")} >Outdoor Advertising</li></Link>
          <Link to={'/Digital-Marketing'}><li onClick={()=>setMenu("Services")}>Digital Marketing</li></Link>
          <Link to={'/Designing-Services'}><li onClick={()=>setMenu("Services")}>Designing Services</li></Link>
          <Link to={'/Print-Media'}><li onClick={()=>setMenu("Services")}>Print Media</li></Link>
          <Link to={'/Branding-Strategy'}><li onClick={()=>setMenu("Services")}>Branding & Strategy</li></Link>
          <Link to={'/Event-Promotion'}><li onClick={()=>setMenu("Services")}>Event Promotion</li></Link>
        </ul>
        </div>
        <Link to={"/Welcome-page"} onClick={()=>setMenu("Client")} className={menu==="Client"?"active":"deactive"}><p>Clients</p></Link>
         <Link to={'/Portfolio'} onClick={()=>setMenu("Portfolio")} className={menu==="Portfolio"?"active":"deactive"}><p>Portfolio</p></Link>
         <Link to={'/Blog'} onClick={()=>setMenu("Blog")} className={menu==="Blog"?"active":"deactive"}><p>Blog</p></Link>
        </ul>
      </div>
      <div className="cart">
         <Link to={"/Contact"} onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active1":""}><button>Contact Us</button></Link>
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
