import React from "react";
import gallary1 from "./img/gallery-1.png";
import gallary2 from "./img/gallery-2.png";
import gallary3 from "./img/gallery-3.png";
import gallary4 from "./img/gallery-4.png";
import nextIcon from "./img/next-icon.png";
const Campus = () => {
  const gallary = [gallary1, gallary2, gallary3, gallary4];
  return (
    <>
      <div id='campus'>
        <h3 className="text-center pb-2">GALARY</h3>
        <h1 className="text-center pb-2">Campus Photos</h1>
        <div className="row row-cols-2 row-cols-md-4 ms-2 me-2">
          {gallary.map((val) => {
            return (
              <div className="col pb-2">
                <img className="img-fluid" src={val} alt="" />
              </div>
            );
          })}
        </div>
        <div className="text-align-center mt-3 pb-4 text-center">
          <div className="btn bg-primary text-bg-dark w-50 border-2 fs-3 text-center rounded-pill">
            See more here
            <img
              style={{ width: "40px" }}
              className="img-fluid ps-2"
              src={nextIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Campus;
