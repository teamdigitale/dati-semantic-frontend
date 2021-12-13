import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "design-react-kit";
import { routes } from "../../../services/routes";

const menuItems = [{ label: "Esplora", href: routes.explore() }];
const additionalMenuItems = [
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="it-region-header-nav" className="region header_nav">
              <nav
                role="navigation"
                aria-labelledby="main-menu"
                className="navbar navbar-expand-lg has-megamenu"
              >
                <button
                  className="custom-navbar-toggler"
                  type="button"
                  aria-controls="main-menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  data-target="#main-menu"
                >
                  <Icon icon="it-burger" />
                </button>
                <div
                  className="navbar-collapsable"
                  id="main-menu"
                  style={{ display: " none" }}
                >
                  <div className="close-div sr-only">
                    <button className="btn close-menu" type="button">
                      <span className="it-close">Chiudi</span>
                    </button>
                  </div>
                  <h2 id="main-menu-title" className="d-none">
                    Main Menu
                  </h2>
                  <div className="menu-wrapper">
                    <ul className="navbar-nav float-left">
                      {menuItems.map((menuItem) => (
                        <li className="nav-item megamenu" key={menuItem.label}>
                          <Link
                            className={
                              "nav-link justify-content-center focus-element" +
                              (isActive(menuItem.href) ? " active" : "")
                            }
                            to={menuItem.href}
                          >
                            <span>{menuItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="navbar-nav float-right">
                      {additionalMenuItems.map((menuItem) => (
                        <li className="nav-item megamenu" key={menuItem.label}>
                          <Link
                            className={
                              "nav-link justify-content-center focus-element" +
                              (isActive(menuItem.href) ? " active" : "")
                            }
                            to={menuItem.href}
                          >
                            <span>{menuItem.label}</span>
                          </Link>
                        </li>
                      ))}
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
