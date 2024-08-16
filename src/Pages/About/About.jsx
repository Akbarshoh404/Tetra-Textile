import React from "react";
import Navbar from "../../Layoutes/Navbar/Navbar copy";
import Footer from "../../Layoutes/Footer/Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import "./about.scss";
import Section3 from "./Section3";

const About = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
};

export default About;
