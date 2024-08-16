import React from "react";
import "./Section1.scss";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    
      <div id="Home_sec1">
        <div className="mainBlock">
          <div className="blocks">
            <p className="bigNmb">
              <span id="0101">
                <CountUp end={8} scrollSpyOnce enableScrollSpy duration={4} className="nmb"/>
              </span>
              +
            </p>
            <p className="descriptionNmb">{t("firstNmb")}</p>
          </div>
          <div className="blocks">
            <p className="bigNmb">
              <span id="0102">
                <CountUp end={20} scrollSpyOnce enableScrollSpy duration={4} className="nmb"/>
              </span>
              +
            </p>
            <p className="descriptionNmb">{t("secondNmb")}</p>
          </div>
          <div className="blocks">
            <p className="bigNmb">
              <span id="0101" >
                {" "}
                <CountUp end={250} scrollSpyOnce enableScrollSpy duration={4} className="nmb"/>
              </span>
              +
            </p>
            <p className="descriptionNmb">{t("thirdNmb")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
