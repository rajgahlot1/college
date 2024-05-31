import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import React from 'react'
import './index.css'
import Page1 from './Page1'
import Header from './Header'
import Program from './Program'
import About from './About.jsx'
import Campus from './Campus.jsx'
import Testonomials from './Testonomials.jsx'
const App = () => {
  return (
    <>
   <Header/>
   <Page1/>
   <Program subTitle="OUR PROGRAM" title="What We Offer"/>
   <About/>
   <Campus/>
  <Testonomials/>
    </>
  )
}

export default App