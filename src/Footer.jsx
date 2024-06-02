import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer>
        <div className='bg-dark ms-1 ms-sm-5 me-sm-5 me-1' style={{height:'1px'}}></div>
        <div className='d-flex align-items-center justify-content-between ms-sm-5 me-sm-5'>
<div className='ms-sm-5 ms-1'><p>Ⓒ 2024 Edusity. All rights reserved.</p></div>
       <div className='me-sm-5 me-1'><ul className='d-flex gap-5'><li>Terms of service</li><li>Privacy Policy</li></ul></div>
        </div>
        </footer></>
  )
}

export default Footer;