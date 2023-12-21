import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../services/routes";
import "./HeaderMainMenu.css";
import sprite from "../../../assets/images/sprite.svg";

const menuItems = [{ label: "Catalogo", href: routes.search() }];
const additionalMenuItems = [
  { label: "L’iniziativa", href: routes.project() },
  { label: "Domande frequenti", href: routes.faq() },
];
const HeaderMainMenu = () => {
  const { pathname } = useLocation();
  const [screenSize, setScreenSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize([window.innerWidth, window.innerHeight]);
    });
  }, []);
  const isActive = (href) => {
    if (href === pathname) {
      return true;
    }

    return href === "/" && pathname === "/search";
  };

  const handleClick = (event) => {
    const width = window.innerWidth;
    if (width <= 991) {
      const toggler = document.querySelector(".custom-navbar-toggler");
      toggler.click();

      event.preventDefault();
    }
  };
  return (
    <div className="it-header-navbar-wrapper">
      <div className="container-fluid px-lg-4">
        <div className="row">
          <div className="col-12">
            <div id="it-region-header-nav" className="region header_nav">
              <nav
                className="navbar navbar-expand-lg has-megamenu theme-dark-mobile px-2"
                aria-label="menu principale"
              >
                <button
                  className="custom-navbar-toggler"
                  type="button"
                  aria-controls="main-menu"
                  aria-expanded="false"
                  aria-label="Attiva/Disattiva Navigazione"
                  data-bs-toggle="navbarcollapsible"
                  data-bs-target="#main-menu"
                >
                  <svg className="icon bg-override">
                    <use href={sprite + "#it-burger"}></use>
                  </svg>
                </button>
                <div className="navbar-collapsable" id="main-menu">
                  <div className="overlay"></div>
                  <div className="close-div">
                    <button className="btn close-menu" type="button">
                      <span className="visually-hidden">Chiudi</span>
                      <svg className="icon">
                        <use href={sprite + "#it-close-big"}></use>
                      </svg>
                    </button>
                  </div>
                  <h2 id="main-menu-title" className="d-none">
                    Menu Principale
                  </h2>
                  <div className="menu-wrapper">
                    {screenSize[0] <= 991 && (
                      <nav className="navbar-nav container-fluid">
                        <div className="d-flex flex-column">
                          <ul className="mainmenu_left m-0 list-unstyled">
                            {menuItems.map((menuItem) => (
                              <li
                                className="nav-item megamenu"
                                key={menuItem.label}
                                onClick={handleClick}
                                aria-current={
                                  isActive(menuItem.href) ? "page" : "false"
                                }
                              >
                                <Link
                                  title={menuItem.label}
                                  aria-label={menuItem.label}
                                  className={
                                    "nav-link justify-content-center focus-element me-3" +
                                    (isActive(menuItem.href) ? " active" : "")
                                  }
                                  to={menuItem.href}
                                >
                                  <span className="">{menuItem.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <ul className="list-unstyled">
                            {additionalMenuItems.map((menuItem) => (
                              <li
                                className="nav-item megamenu"
                                key={menuItem.label}
                                onClick={handleClick}
                                aria-current={
                                  isActive(menuItem.href) ? "page" : "false"
                                }
                              >
                                <Link
                                  title={menuItem.label}
                                  aria-label={menuItem.label}
                                  className={
                                    "nav-link justify-content-center focus-element" +
                                    (isActive(menuItem.href) ? " active" : "")
                                  }
                                  to={menuItem.href}
                                >
                                  <span className="">{menuItem.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </nav>
                    )}
                    {screenSize[0] > 991 && (
                      <nav className="navbar-nav container-fluid">
                        <ul className="mainmenu_left mb-0">
                          {menuItems.map((menuItem) => (
                            <li
                              className="nav-item megamenu"
                              key={menuItem.label}
                              onClick={handleClick}
                              aria-current={
                                isActive(menuItem.href) ? "page" : "false"
                              }
                            >
                              <Link
                                title={menuItem.label}
                                aria-label={menuItem.label}
                                className={
                                  "nav-link justify-content-center focus-element me-3" +
                                  (isActive(menuItem.href) ? " active" : "")
                                }
                                to={menuItem.href}
                              >
                                <span className="">{menuItem.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <ul className="mainmenu_right mb-0">
                          {additionalMenuItems.map((menuItem) => (
                            <li
                              className="nav-item megamenu"
                              key={menuItem.label}
                              onClick={handleClick}
                              aria-current={
                                isActive(menuItem.href) ? "page" : "false"
                              }
                            >
                              <Link
                                title={menuItem.label}
                                aria-label={menuItem.label}
                                className={
                                  "nav-link justify-content-center focus-element" +
                                  (isActive(menuItem.href) ? " active" : "")
                                }
                                to={menuItem.href}
                              >
                                <span className="">{menuItem.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderMainMenu.propTypes = {};

HeaderMainMenu.defaultProps = {};

export default HeaderMainMenu;