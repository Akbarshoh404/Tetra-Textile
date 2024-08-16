import React from "react";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="About_sec2">
        <div className="container">
          <div className="ab_card firstTxt">
            {t("about1Txt")}
          </div>
          <div className="ab_card secondTxt">
            {t("about2Txt")}
           </div>
          <div className="ab_card thirdTxt">
            {t("about3Txt")}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
