import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header id="Home_Header">
      <div className="container">
        <div id="mainTextDiv">
          <p class="mainPageText big">
            {t("mainText")}
          </p>
          
         <form action="/contact" target="_self">
          <button id="mainButton">
            {t("miniText")}
            <p id="arrow">❯</p>   
          </button>    
          </form>        
        </div>

        <div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;