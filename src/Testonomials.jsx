import React from "react";
import Carousel from "react-bootstrap/Carousel";
import user1 from "./img/user-1.png";
import user2 from "./img/user-2.png";
import user3 from "./img/user-3.png";
import user4 from "./img/user-4.png";
const Testonomials = () => {
  const para = {
    text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  };
  const user= [user1,user2,user3,user4]
  const name= ['Willion Jackson','Edward Willson','Thomas Harrison','Frederick Scoot'];
  const places= ['Educity, USA','Knowlwdgeville, India','Studytown, India','Brainfield, USA']
  return (
    <>
      <div className="pb-4">
        <div>
          <h4 className="text-center mt-4">TESTONOMIALS</h4>
          <h1 className="text-center pb-4">What Student Says</h1>
        </div>
               <div className="d-flex align-items-center justify-content-center">
           <Carousel style={{width:'90%'}} interval={3000}>
            {user.map((val,ind) => {
              return(
              <Carousel.Item>
            <div className="d-flex flex-row">
            <div className="imgdiv">
              <img className="ms-2 me-2 mb-2 mt-2 carImg rounded-circle" src={val} alt="" /></div>
            <div className="ps-2 ms-2 mt-2"><h2 className="mt-0 mt-sm-3 mt-md-5 fs-1">{name[ind]}</h2><h5>{places[ind]}</h5>
            </div>
            </div><p className="ms-2 me-2 fs-5 fs-sm-3 fs-md-2">{para.text}</p>
          </Carousel.Item>
              )
            })}
              </Carousel>
      </div></div>

    </>
  );
};
export default Testonomials;
