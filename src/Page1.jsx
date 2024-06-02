import React from 'react'
import arrow from './img/white-arrow.png'
const Page1 = () => {
  return (
    <>
    <div className='page1 ht-100 d-flex flex-column align-items-center justify-content-center' id='home'>
        <div className='mx-2 fs-1 text-center'>We ensure better education for a better world</div>
        <p className='text-center mx-2'>Our cutting edge circullum is designed to empower students with the knowledge, skill and experience needed to 
            excel in the dynamic field of education.
        </p>
        <div className='btn text-white fs-2 rounded-pill  btn-outline-primary'>Explore Us <img className='ms-2 h-50' src={arrow} alt="arrow" /></div>

    </div>
    </>
  )
}

export default Page1