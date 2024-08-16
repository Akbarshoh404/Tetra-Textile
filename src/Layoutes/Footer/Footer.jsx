import React from "react";
import "./footer.scss";
import logo from "../../Images/Logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>{t("locationText")}</h4>
                    <a href="https://yandex.com/maps/10335/tashkent/?ll=69.244116%2C41.172951&mode=search&sll=69.244232%2C41.173113&text=41.173113%2C69.244232&z=19.49">{t("location")}</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>{t("phoneNumberText")}</h4>
                    <span>+998 (90) 350 42 00</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>{t("emailText")}</h4>
                    <span>akmaluz@mail.ru</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <img src={logo} class="img-fluid" alt="logo" />
                  </div>
                  <div class="footer-text">
                    <p>
                      {t("footerText")}
                    </p>
                  </div>
                
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30 universalFooter">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>{t("usefulLinks")}</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">{t("nav_p1")}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t("nav_p2")}</Link>
                    </li>
                    <li>
                      <Link to="/contact">{t("nav_p4")}</Link>
                    </li>
                    <li>
                      <Link to="/production">{t("nav_p3")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>{t("joinText")}</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <Link to="https://t.me/knittinguzbekistan">
                      <button id="sub_button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-telegram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                        </svg>
                        <span>Telegram</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
