import React from "react";
import Carousel from "react-bootstrap/Carousel";
import user1 from "./img/user-1.png";
import user2 from "./img/user-2.png";
import bicon from "./img/back-icon.png";
import nicon from "./img/next-icon.png";
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
      <div>
        <div>
          <h4 className="text-center mt-4">TESTONOMIALS</h4>
          <h1 className="text-center pb-4">What Student Says</h1>
        </div>
        {/* <div className="row mt-5" style={{height:'200px'}}>
          <div className="col d-flex align-items-center justify-content-center">
            <img
              className="img-fluid border p-2 bg-dark rounded-circle"
              src={bicon}
              alt=""
            />
          </div>
          <div className="d-flex ">
          <div className="col-4 pb-2 row row-cols-2 d-flex border pt-2 me-2 border-dark rounded">
            <div className="col">
              <img className="img-fluid rounded-circle" src={user1} alt="" />
            </div>

            <div className="col">
              <h4>William Jackson</h4>
              <h6>Edusity, USA</h6>
            </div>
            <div className="col-12">
              Choosing to pursue my degree at Edusity was one of the bast
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations
            </div>
          </div>
          <div className="col-4 pb-2 row row-cols-2 d-flex border pt-2 me-2 border-dark rounded">
            <div className="col">
              <img className="img-fluid rounded-circle" src={user2} alt="" />
            </div>

            <div className="col">
              <h4>William Jackson</h4>
              <h6>Edusity, USA</h6>
            </div>
            <div className="col-12">
              Choosing to pursue my degree at Edusity was one of the bast
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations
            </div>
          </div>
          <div className="col-4 pb-2 row row-cols-2 d-flex border pt-2 me-2 border-dark rounded">
            <div className="col">
              <img className="img-fluid rounded-circle" src={user3} alt="" />
            </div>

            <div className="col">
              <h4>William Jackson</h4>
              <h6>Edusity, USA</h6>
            </div>
            <div className="col-12">
              Choosing to pursue my degree at Edusity was one of the bast
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations
            </div>
          </div>
          <div className="col-4 pb-2 row row-cols-2 d-flex border pt-2 me-2 border-dark rounded">
            <div className="col">
              <img className="img-fluid rounded-circle" src={user4} alt="" />
            </div>

            <div className="col">
              <h4>William Jackson</h4>
              <h6>Edusity, USA</h6>
            </div>
            <div className="col-12">
              Choosing to pursue my degree at Edusity was one of the bast
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations
            </div>
          </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <img
              className="img-fluid border p-2 bg-dark rounded-circle"
              src={nicon}
              alt=""
            />
          </div>
        </div> */}
        <div className="d-flex align-items-center justify-content-center">
           <Carousel style={{width:'90%'}}>
            {user.map((val,ind) => {
              console.log(val)
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
          {/* <Carousel.Item>
            <div className="d-flex flex-row">
            <div className="imgdiv">
              <img className="ms-2 me-2 mb-2 mt-2 carImg rounded-circle" src={user1} alt="" /></div>
            <div className="ps-2 ms-2 mt-2"><h2>William Jackson</h2><h5>Edusity, USA</h5>
            </div>
            </div><p>{para.text}</p>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-row">
            <div className="imgdiv">
              <img className="ms-2 me-2 mb-2 mt-2 carImg rounded-circle" src={user2} alt="" /></div>
            <div className="ps-2 ms-2 mt-2"><h2>William Jackson</h2><h5>Edusity, USA</h5>
            </div>
            </div><p>{para.text}</p>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-row">
            <div className="imgdiv">
              <img className="ms-2 me-2 mb-2 mt-2 carImg rounded-circle" src={user3} alt="" /></div>
            <div className="ps-2 ms-2 mt-2"><h2>William Jackson</h2><h5>Edusity, USA</h5>
            </div>
            </div><p>{para.text}</p>
          </Carousel.Item> */}
        </Carousel>
      </div></div>

    </>
  );
};

export default Testonomials;

// function DarkVariantExample() {
// return (
// <Carousel data-bs-theme="dark">
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={user1}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h5>First slide label</h5>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={user2}
//       alt="Second slide"
//     />
//     <Carousel.Caption>
//       <h5>Second slide label</h5>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={user3}
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h5>Third slide label</h5>
//       <p>
//         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//       </p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//   <Carousel variant="dark">
//   <Carousel.Item>
//     <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', width: '100%', backgroundColor: '#ddd' }}>
//       <div className="h-25 w-25">,,,,,,,,,,,,,,,,,,,,,,,,</div>
//     </div>

//   </Carousel.Item>
//   <Carousel.Item>
//     <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', width: '100%', backgroundColor: '#bbb' }}>
//       <div className="h-25 w-25">1111111111111111111</div>
//     </div>

//   </Carousel.Item>
// </Carousel>
// );
// }
