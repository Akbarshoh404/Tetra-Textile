import React from "react";
import img1 from "../../Images/polotno/SUPREM.jpg"
import img2 from "../../Images/polotno/FUTER.jpeg"
import img3 from "../../Images/polotno/PIKE.jpeg"
import img4 from "../../Images/polotno/RIBANA.jpg"
import img5 from "../../Images/polotno/INTERLOK.jpg"
import img6 from "../../Images/polotno/DVUXNITKA.jpg"
import img7 from "../../Images/polotno/JAKKARD.png"
import img8 from "../../Images/polotno/VELYUR.jpg"
import img9 from "../../Images/polotno/TRYOXNITKA.jpg"

import { useTranslation } from "react-i18next";

const Section = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="Product">
        <div className="container">
          <p id="pr_1">{t("ourProducts")}</p>

          <div id="pr_grid">
            <div className="pr_card">
              <div class="prd_card">
                <img
                  src={img1}
                  alt=""
                />

                <div>
                  <p class="productsTxt bold">{t("1productName")}</p>
                  <p class="productsTxt">
                    {t("1productTxt")}
                  </p>
                </div>
              </div>
            </div>
            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img2}
                  alt=""
                />

                <div>
                  <p class="productsTxt bold">{t("2productName")}</p>
                  <p class="productsTxt">
                    {t("2productTxt")}
                  </p>
                </div>
              </div>
            </div>


            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img3}
                  alt=""
                />

                <div>
                  <p class="productsTxt bold">{t("3productName")}</p>
                  <p class="productsTxt">
                    {t("3productTxt")}
                  </p>
                </div>
              </div>
            </div>
            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img4}
                  alt=""
                />

                <div>
                  <p class="productsTxt  bold">{t("4productName")}</p>
                  <p class="productsTxt">
                    {t("4productTxt")}
                  </p>
                </div>
              </div>
            </div>
            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img5}
                  alt=""
                />

                <div>
                  <p class="productsTxt  bold">{t("5productName")}</p>
                  <p class="productsTxt">
                    {t("5productTxt")}
                  </p>
                </div>
              </div>
            </div>
            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img6}
                  alt=""
                />

                <div>
                  <p class="productsTxt bold">{t("6productName")}</p>
                  <p class="productsTxt">
                    {t("6productTxt")}
                  </p>
                </div>
              </div>
            </div>
            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img7}
                  alt=""
                />

                <div>
                  <p class="productsTxt bold">{t("7productName")}</p>
                  <p class="productsTxt">
                    {t("7productTxt")}
                  </p>
                </div>
              </div>
            </div>
            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img8}
                  alt=""
                />

                <div>
                  <p class="productsTxt bold">{t("8productName")}</p>
                  <p class="productsTxt">
                    {t("8productTxt")}
                  </p>
                </div>
              </div>
            </div>
            <div className="pr_card">
              <div class="prd_card">
                <img class = "productsImg"
                  src={img9}
                  alt=""
                />

                <div>
                  <p class="productsTxt bold">{t("9productName")}</p>
                  <p class="productsTxt">
                    {t("9productTxt")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
