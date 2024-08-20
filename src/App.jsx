import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Blog from './components/Blog/Blog.jsx';
import ChooseUs from './components/ChooseUs/ChooseUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollEffect from './components/ScrollEffect/ScrollEffect.jsx';
import BrandingStrategy from './components/Services/BrandingStrategy.jsx'
import DigitalMarketing from './components/Services/DigitalMarketing.jsx';
import DesigningServices from './components/Services/DesigningServices.jsx';
import EventPromotion from './components/Services/EventPromotion.jsx';
import OutdoorAdvertising from './components/Services/OutdoorAdvertising.jsx';
import PrintMedia from './components/Services/PrintMedia.jsx';
import Showcase from './components/Showcase/Showcase.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import WelcomePage from './components/WelcomePage/WelcomePage.jsx';
import Career from './components/Career/Career.jsx';
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
          <Route path='/sptest1/about' element={<AboutMe/>}/>
          <Route path='/sptest1/Choose-Us' element={<ChooseUs/>}/>
          <Route path='/sptest1/Contact' element={<Contact/>}/>
          <Route path="/sptest1/Footer"element={<Footer/>}/>
          <Route path="/sptest1/ScrollEffect"element={<ScrollEffect/>}/>
          <Route path="/sptest1/Showcase"element={<Showcase/>}/>
          <Route path="/sptest1/Welcome-Page"element={<WelcomePage/>}/>
          <Route path="/sptest1/services"element={<WhatWeDo/>}/>
          <Route path="/sptest1/Outdoor-Advertising"element={<OutdoorAdvertising/>}/>
          <Route path="/sptest1/Digital-Marketing"element={<DigitalMarketing/>}/>
          <Route path="/sptest1/Designing-Services"element={<DesigningServices/>}/>
          <Route path="/sptest1/Print-Media"element={<PrintMedia/>}/>
          <Route path="/sptest1/Branding-Strategy"element={<BrandingStrategy/>}/>
          <Route path="/sptest1/Event-Promotion"element={<EventPromotion/>}/>
          <Route path="/sptest1/Blog"element={<Blog/>}/>
          <Route path="/sptest1/Portfolio"element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </Router>
   
    </>
  )
}

export default App
