
import React from 'react'
import mainIcon from './img/mail-icon.png'
import phoneIcon from './img/phone-icon.png'
import messageIcon from './img/msg-icon.png'
import locationIcon from './img/location-icon.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5cc7cd01-69fc-4bcc-a03a-d3188e6f71fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (<>
    <div className="contact pb-4">
      <div>
        <h4 className="text-center mt-4">CONTACT US</h4>
        <h1 className="text-center pb-2">Get in Touch</h1>
      </div>
      <div className='row'>
      <div className="col-12 col-sm ms-3 ms-sm-5 me-3 ms-sm-4">
        <div className='text-bolder fs-4'>Send us a message <img className='ms-3 mb-1' style={{width:'50px'}} src={messageIcon} alt="" /></div>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
         <ul style={{minWidth:'336px'}}><li className='mt-3'><img className='me-3 img-fluid' src={mainIcon} alt="" />hello.challanger@gmail.com</li><li className='mt-3'><img className='me-3 img-fluid' src={phoneIcon} alt="" />124-456-7890</li><li className='mt-3'><img className='me-3 img-fluid' src={locationIcon} alt="" />77 Massachusetts Ave, Cambridge 
      <br/>  <span className='ms-5'>MA 02139, United States</span></li></ul>
      </div>
<div className='col-12 col-sm'>
  <form onSubmit={onSubmit} action="" className='d-flex ms-2 ps-2 me-2 ms-sm-3 me-sm-3 flex-column'>
  <label className='pt-2 ms-2'>Your name</label>
  <input className='p-2' type="text" name='name' placeholder='Enter your name' required/> 
  <label className='pt-2 ms-2'>Your phone</label>
  <input className='p-2' type="text" name='tel' placeholder='Enter your mobile' required/> 
  <label className='pt-2 ms-2'>Your email</label>
  <input className='p-2' type="text" name='email' placeholder='Enter your email' required/> 
  <label className='pt-2 ms-2'>Any message</label>
  <input className='p-2' type="text" name='message' placeholder='Enter your message'/>
  <input type="submit" className='btn btn-outline-primary border-2 border-primary  fw-bold mt-2 fs-3 border' value='Submit'/> 
  </form><span className='ms-3 fs-4'>{result}</span>
</div>
  </div></div>
  </>
  )
}
export default Contact;
