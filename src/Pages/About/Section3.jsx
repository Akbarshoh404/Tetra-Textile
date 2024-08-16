import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Section3.scss";
import { useTranslation } from "react-i18next";
import img1 from '../../Images/saff.png'
import img2 from '../../Images/chust.png'
import img3 from '../../Images/global textile.jpg'
import img4 from '../../Images/diva.png'

const Section3 = () => {
  const { t, i18n } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <p id="Ab_p">{t("hamkorTxt")}</p>
      <Slider {...settings} className="about_slider">
        <div className="item">
          <img
          src={img1}
            alt=""
            className="item_img"
          />
        </div>
        <div className="item">
          <img
          src={img2}
            alt=""
            className="item_img"
          />
        </div>
        <div className="item">
          <img
          src={img3}
            alt=""
            className="item_img"
          />
        </div>
        <div className="item">
          <img
          src={img4}
            alt=""
            className="item_img"
          />
        </div>
      </Slider>
    </>
  );
};

export default Section3;
