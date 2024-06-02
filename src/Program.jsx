import React from "react";
import program1 from "./img/program-1.png";
import program2 from "./img/program-2.png";
import program3 from "./img/program-3.png";
import proIcon1 from "./img/program-icon-1.png";
import proIcon2 from "./img/program-icon-2.png";
import proIcon3 from "./img/program-icon-3.png";
const Program = ({ title, subTitle,scrol,scrol1,scrol2}) => {
  const imgStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const Images=[proIcon1,proIcon2,proIcon3];
  const Images2= [program1,program2,program3]
  const imgName= ['Graduation Degree','Masters Degree','Post Graduation'];
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column" id='program'>
        <h3 className="pt-md-5 pt-3 text-center">{subTitle}</h3>
        <p className="pt-2 text-center fs-1 fw-bold">{title}</p>
        <div style={imgStyle} className="row pb-md-5 pt-md-5 ms-md-3 me-md-3 mb-md-3 ">
            {Images.map((val,ind)=>{
              const imgClass=
                ind===0&& scrol?'imga1': ind===1&& scrol1? 'imga1' : ind===2&& scrol2? 'imga1': ''
                return(
                 <div className="col-sm-4 col-8 mb-2">
                 <div className="position-relative img1 mt-sm-auto mb-sm-auto mb-3 mt-3">
                   <img 
                     src={Images2[ind]}
                     className="img-fluid "
                     alt=""
                     style={{ zIndex: "1" }}
                   />
                   <div className={`position-absolute img2 ${imgClass} d-flex align-items-center justify-content-center flex-column`}>
                   <img
                     src={val}
                     className="w-25 img-fluid"
                     alt=""
                   /><h2 className="fs-md-1 fs-5">{imgName[ind]}</h2>
                   </div>
                 </div>
               </div>)
            })}
        </div>
      </div>
    </>
  );
};

export default Program;
