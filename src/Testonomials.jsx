import React from "react";
import user1 from './img/user-1.png'
import user2 from './img/user-2.png'
import bicon from './img/back-icon.png'
import nicon from './img/next-icon.png'
// import user3 from './img/user-3.png'
// import user4 from './img/user-4.png'
const Testonomials = () => {
  return (
    <>
      <div>
        <div>
          <h4 className="text-center">TESTONOMIALS</h4>
          <h1 className="text-center">What Student Says</h1>
        </div>
        <div className="row">
        <div className="col-2 d-flex align-items-center justify-content-center">
            <img className="img-fluid border p-2 bg-dark rounded-circle" src={bicon} alt="" />
          </div>
          <div className="col-4 pb-2">
            <img className="img-fluid" src={user1} alt="" />
          </div>
          <div className="col-4 pb-2">
            <img className="img-fluid" src={user2} alt="" />
          </div>
          
          <div className="col-2 d-flex align-items-center justify-content-center">
            <img className="img-fluid border p-2 bg-dark rounded-circle" src={nicon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testonomials;
