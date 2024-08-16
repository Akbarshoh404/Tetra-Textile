import React from "react";
import "./Section3.scss";
import ph1 from "../../Images/11.jpg";
import ph2 from "../../Images/22.jpg";
import ph3 from "../../Images/33.jpg";
import ph4 from "../../Images/44.jpg";
import ph5 from "../../Images/55.jpg";
import ph6 from "../../Images/66.jpg";
const Section3 = () => {
  return (
    <>
      <div id="Home_sec3">
        <img src={ph1} alt="" className="imgMini" />
        <img src={ph2} alt="" className="imgMini" />
        <img src={ph3} alt="" className="imgMini" />
        <img src={ph4} alt="" className="imgMini" />
        <img src={ph5} alt="" className="imgMini" />
        <img src={ph6} alt="" className="imgMini" />
      </div>
    </>
  );
};

export default Section3;
