import React from "react";
import "./home.scss";
import Navbar from "../../Layoutes/Navbar/Navbar";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "../../Layoutes/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
};

export default Home;
