import React from "react";
import "./navbar.scss";
import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import { Dropdown } from "rsuite";
import { useTranslation } from "react-i18next";
import logo from "../../Images/tetraLogo black.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const changelanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <nav id="nav">
        <div className="nav_container">
          <div id="nav_div1">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div class="twoelements">
            <div id="nav_div3">
              <Link to="/">
                <li className="panelNavElem">{t("nav_p1")}</li>
              </Link>
              <Link to="/about">
                <li className="panelNavElem">{t("nav_p2")}</li>
              </Link>
              <Link to="/production">
                <li className="panelNavElem"  id="navbar">{t("nav_p3")}</li>
              </Link>
              <Link to="/contact">
                <li className="panelNavElem">{t("nav_p4")}</li>
              </Link>
            </div>

            <div id="nav_div2">
              <div id="nav_div">
                <Dropdown title={t("language")} id="dropdown">
                  <Dropdown.Item>
                    <p onClick={() => changelanguage("ru")}>Russian</p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    {" "}
                    <p onClick={() => changelanguage("uz")}>Uzbek</p>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>

            <ButtonToolbar>
              <Button onClick={() => setOpen(true)} id="toolbar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </Button>
            </ButtonToolbar>

            <Drawer open={open} onClose={() => setOpen(false)} id="drawer">
              <Drawer.Body id="draweer">
                <ul id="drawer_ul">
                  <Link to="/">
                    <li className="panelNavElem">{t("nav_p1")}</li>
                  </Link>
                  <Link to="/about">
                    <li className="panelNavElem">{t("nav_p2")}</li>
                  </Link>
                  <Link to="/production">
                    <li className="panelNavElem">{t("nav_p3")}</li>
                  </Link>
                  <Link to="/contact">
                    <li className="panelNavElem">{t("nav_p4")}</li>
                  </Link>

                  <div id="nav_div" className="drawer_lang">
                    <Dropdown title={t("language")} id="dropdown">
                      <Dropdown.Item>
                        <p onClick={() => changelanguage("ru")}>Russian</p>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        {" "}
                        <p onClick={() => changelanguage("uz")}>Uzbek</p>
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </ul>
              </Drawer.Body>
            </Drawer>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
