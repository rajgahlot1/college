import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import React, {useState, useEffect } from 'react';
import Page1 from './Page1'
import Header from './Header'
import Program from './Program'
import About from './About.jsx'
import Campus from './Campus.jsx'
import Footer from './Footer.jsx';
import Testonomials from './Testonomials.jsx'
import Contact from './Contact.jsx';
const App = () => {
  const [bgclr,setbgclr]= useState(false);
  const [scrol,setScrol]= useState(false);
  const [scrol1,setScrol1]= useState(false);
  const [scrol2,setScrol2]= useState(false);


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ?setbgclr(true): setbgclr(false);
window.scrollY >420 ?setScrol(true): setScrol(false);
window.scrollY >770 ?setScrol1(true): setScrol1(false);
window.scrollY >1120 ?setScrol2(true): setScrol2(false);
    })
  },[])
  return (
    <>
   <Header bgclr={bgclr}/>
   <Page1/>
   <Program subTitle="OUR PROGRAM" title="What We Offer" scrol={scrol} scrol1={scrol1} scrol2={scrol2}/>
   <About/>
   <Campus/>
  <Testonomials/>
  <Contact/>
  <Footer/>
    </>
  )
}

export default App