import React from "react";
import play from "./img/play-icon.png";
import about from "./img/about.png";
const About = () => {
  return (
    <>
      <div className="row mt-5 mb-5">
        {" "}
        <h4 className="text-center">ABOUT UNIVERSITY</h4>
        <h1 className="text-center mb-2">Nurturing Tommorow's Leader Today</h1>
        <div className="col-sm-4 col-12">
          <div className="position-relative mt-5 me-2 pb-2 ms-3">
            <img src={about} className="img-fluid w-100" alt="" />
            <img
              src={play}
              className="img-fluid w-25 position-absolute playbtn"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-sm-8 text-container font-monospace">
          <p className="font-monospace lh-lg lh-sm ms-3 ms-sm-0 ">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge circullum is
            designed to empower students with the knowledge skills and
            experience needed to excel in the dynamic field of education. <br />
            <br />
            With a focus an innovation hands-on learning adn personalized
            mantorship our programs prepare aspiring education to make a
            meaningful impact in classrooms, schools, and communities. <br />
            <br />
            Whether you aspireto become a teacher, administrator, counsler or
            educational leader our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential shaping
            the future of education.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
