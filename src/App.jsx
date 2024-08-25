import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Blog from './components/Blog/Blog.jsx';
import ChooseUs from './components/ChooseUs/ChooseUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollEffect from './components/ScrollEffect/ScrollEffect.jsx';
import BrandingStrategy from './components/Services/BrandingStrategy.jsx';
import DigitalMarketing from './components/Services/DigitalMarketing.jsx';
import DesigningServices from './components/Services/DesigningServices.jsx';
import EventPromotion from './components/Services/EventPromotion.jsx';
import OutdoorAdvertising from './components/Services/OutdoorAdvertising.jsx';
import PrintMedia from './components/Services/PrintMedia.jsx';
import Showcase from './components/Showcase/Showcase.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './useScrollToTop.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

function App() {

  return (
    <>
    <Router>
    <ScrollToTop />
    <Navbar/>
      <Routes>
          <Route path="/sptest1/"element={<Home/>} />
          <Route path='/about' element={<AboutMe/>}/>
          <Route path='/Choose-Us' element={<ChooseUs/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path="/Footer"element={<Footer/>}/>
          <Route path="/ScrollEffect"element={<ScrollEffect/>}/>
          <Route path="/Showcase"element={<Showcase/>}/>
          <Route path="/Welcome-Page"element={<WelcomePage/>}/>
          <Route path="/services"element={<WhatWeDo/>}/>
          <Route path="/Outdoor-Advertising"element={<OutdoorAdvertising/>}/>
          <Route path="/Digital-Marketing"element={<DigitalMarketing/>}/>
          <Route path="/Designing-Services"element={<DesigningServices/>}/>
          <Route path="/Print-Media"element={<PrintMedia/>}/>
          <Route path="/Branding-Strategy"element={<BrandingStrategy/>}/>
          <Route path="/Event-Promotion"element={<EventPromotion/>}/>
          <Route path="/Blog"element={<Blog/>}/>
          <Route path="/Portfolio"element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </Router>
   
    </>
  )
}

export default App
