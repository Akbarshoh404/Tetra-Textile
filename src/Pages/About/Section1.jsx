import React from "react";
import imgAbout from "../../Images/aboutImg.jpg"
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="About_sec1">
        <div className="container">
          <div id="About_sec1_div">
            <div>
              <p>{t("aboutTxtTopic")}</p>
              <p>{t("aboutTxt")}</p>
            </div>

            <img className="imgAboutMain"
              src={imgAbout}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
