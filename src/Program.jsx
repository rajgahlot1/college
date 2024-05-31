import React from "react";
import program1 from "./img/program-1.png";
import program2 from "./img/program-2.png";
import program3 from "./img/program-3.png";
import proIcon1 from "./img/program-icon-1.png";
import proIcon2 from "./img/program-icon-2.png";
import proIcon3 from "./img/program-icon-3.png";
const Program = ({ title, subTitle }) => {
  const imgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const Images=[proIcon1,proIcon2,proIcon3];
  const Images2= [program1,program2,program3]
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h3 className="pt-5 text-center">{subTitle}</h3>
        <p className="pt-2 text-center fs-1 fw-bold">{title}</p>
        <div style={imgStyle} className="row pb-5 pt-5 ms-3 me-3 mb-3 ">
            {Images.map((val,ind)=>{
                return(
                 <div className="col-sm-4 col-8 mb-2">
                 <div className="position-relative">
                   <img
                     src={Images2[ind]}
                     className="img-fluid mt-sm-auto mb-sm-auto mb-3 mt-3 img1"
                     alt=""
                     style={{ zIndex: "1" }}
                   />
                   <img
                     src={val}
                    
                     className="position-absolute img-fluid img2"
                     alt=""
                   />
                 </div>
               </div>)
            })}
        </div>
      </div>
    </>
  );
};

export default Program;
