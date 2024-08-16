import React from "react";
import "./Section2.scss";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="Home_sec2">
        <div className="miniDivAbout">
          <p id="miniTextAbout">{t("miniAboutUs")}</p>
          <p id="aboutBigText">
            {t("aboutUsTxtMini")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Section2;
