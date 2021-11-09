import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Categorie", href: "/" },
  { label: "Ontologie", href: "#" },
  { label: "Vocabolari", href: "vocabularies" },
];
const HeaderMainMenu = () => (
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
                <svg className="icon">
                  <use xlinkHref="/themes/contrib/bootstrap_italia/assets/icons/sprite.svg#it-burger"></use>
                </svg>
              </button>
              <div
                className="navbar-collapsable"
                id="main-menu"
                style={{ display: " none" }}
              >
                <div className="overlay" style={{ display: " none" }}></div>
                <div className="close-div sr-only">
                  <button className="btn close-menu" type="button">
                    <span className="it-close"></span>Chiudi
                  </button>
                </div>
                <h2 id="main-menu-title" className="d-none">
                  Main Menu
                </h2>
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    {menuItems.map((menuItem) => (
                      <li className="nav-item megamenu" key={menuItem.label}>
                        <NavLink
                          className="nav-link    pl-0 focus-element"
                          to={menuItem.href}
                        >
                          <span>{menuItem.label}</span>
                        </NavLink>
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

HeaderMainMenu.propTypes = {};

HeaderMainMenu.defaultProps = {};

export default HeaderMainMenu;
