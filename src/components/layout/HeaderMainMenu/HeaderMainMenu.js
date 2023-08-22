import React from "react";
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
  const isActive = (href) => {
    if (href === pathname) {
      return true;
    }

    return href === "/" && pathname === "/search";
  };

  return (
    <div className="it-header-navbar-wrapper">
      <div className="container-fluid px-lg-4">
        <div className="row">
          <div className="col-12">
            <div id="it-region-header-nav" className="region header_nav">
              <nav
                role="navigation"
                aria-labelledby="main-menu"
                className="navbar navbar-expand-lg has-megamenu theme-dark-mobile px-2"
              >
                <button
                  className="custom-navbar-toggler"
                  type="button"
                  aria-controls="main-menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-toggle="navbarcollapsible"
                  data-target="#main-menu"
                >
                  <svg className="icon">
                    <use href={sprite + "#it-burger"}></use>
                  </svg>{" "}
                </button>
                <div
                  className="navbar-collapsable"
                  id="main-menu"
                  style={{ display: " none" }}
                >
                  <div className="close-div visually-hidden">
                    <button className="btn close-menu" type="button">
                      <span className="it-close">Chiudi</span>
                    </button>
                  </div>
                  <h2 id="main-menu-title" className="d-none">
                    Main Menu
                  </h2>
                  <div className="menu-wrapper">
                    <ul className="navbar-nav container-fluid" role="list">
                      <div className="mainmenu_left">
                        {menuItems.map((menuItem) => (
                          <li
                            className="nav-item megamenu"
                            key={menuItem.label}
                            role="listitem"
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
                      </div>
                      <div className="mainmenu_right">
                        {additionalMenuItems.map((menuItem) => (
                          <li
                            className="nav-item megamenu"
                            key={menuItem.label}
                            role="listitem"
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
                      </div>
                    </ul>
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
