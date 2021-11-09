import React from "react";
import HeaderMainTitle from "../HeaderMainTitle/HeaderMainTitle";

const HeaderNavigation = () => (
  <div className="it-nav-wrapper">
    <HeaderMainTitle />
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
                  <h2 id="main-menu-title" className="visually-hidden">
                    Main Menu
                  </h2>
                  <div className="menu-wrapper">
                    <ul block="headermenu" className="navbar-nav">
                      <li className="nav-item dropdown megamenu">
                        <a
                          className="nav-link dropdown-toggle   pl-0 focus-element"
                          data-toggle="dropdown"
                          href=""
                        >
                          <span>Dati</span>

                          <svg className="icon">
                            <use xlinkHref="/themes/contrib/bootstrap_italia/assets/icons/sprite.svg#it-expand"></use>
                          </svg>
                        </a>

                        <div className="dropdown-menu">
                          <div className="row">
                            <div className="col-xs-12  col-lg  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/view-dataset"
                                        title="Il catalogo nazionale dei dati aperti"
                                      >
                                        <span>Open Data</span>
                                        <p className="pt-3">
                                          Il catalogo nazionale dei dati aperti
                                        </p>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  col-lg  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/elenco-harvest-sources"
                                        title="Elenco dei cataloghi federati con il portale dati.gov.it"
                                      >
                                        <span>Cataloghi</span>
                                        <p className="pt-3">
                                          Elenco dei cataloghi federati con il
                                          portale dati.gov.it
                                        </p>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  col-lg  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/amministrazioni"
                                        title="e altri soggetti che rendono disponibili dati di tipo aperto"
                                      >
                                        <span>Amministrazioni</span>
                                        <p className="pt-3">
                                          e altri soggetti che rendono
                                          disponibili dati di tipo aperto
                                        </p>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  col-lg   it-vertical ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0  d-block "
                                        href="/base-dati-informazioni"
                                        title="Art. 24-quater, comma 2, del D.L. n. 90/2014"
                                      >
                                        <span>Basi di Dati</span>
                                        <p className="pt-3">
                                          Art. 24-quater, comma 2, del D.L. n.
                                          90/2014
                                        </p>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown megamenu">
                        <a
                          className="nav-link dropdown-toggle   pl-0 focus-element"
                          data-toggle="dropdown"
                          href=""
                        >
                          <span>Fare Open Data</span>

                          <svg className="icon">
                            <use xlinkHref="/themes/contrib/bootstrap_italia/assets/icons/sprite.svg#it-expand"></use>
                          </svg>
                        </a>

                        <div className="dropdown-menu">
                          <div className="row">
                            <div className="col-xs-12  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/fare-open-data/Strumenti-per-gli-Open-Data"
                                      >
                                        <span>Strumenti per gli Open Data</span>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/geodati"
                                      >
                                        <span>Geodati</span>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/Come-alimentare-il-Catalogo-nazionale"
                                      >
                                        <span>
                                          Come alimentare il Catalogo nazionale
                                        </span>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/contesto-normativo"
                                      >
                                        <span>Contesto Normativo</span>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown megamenu">
                        <a
                          className="nav-link dropdown-toggle   pl-0 focus-element"
                          data-toggle="dropdown"
                          href=""
                        >
                          <span>Monitoraggio</span>

                          <svg className="icon">
                            <use xlinkHref="/themes/contrib/bootstrap_italia/assets/icons/sprite.svg#it-expand"></use>
                          </svg>
                        </a>

                        <div className="dropdown-menu">
                          <div className="row">
                            <div className="col-xs-12  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/monitoraggio/paniere-dataset"
                                      >
                                        <span>Paniere Dataset</span>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/monitoraggio/grado-maturit%C3%A0-OD"
                                      >
                                        <span>
                                          Grado di maturità degli Open Data
                                        </span>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xs-12  ">
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  <li>
                                    <h3 className="no_toc">
                                      <a
                                        className="list-item    large medium pl-0 "
                                        href="/Monitoraggio/Statistiche"
                                      >
                                        <span>Statistiche</span>
                                      </a>
                                    </h3>
                                  </li>

                                  <div className="link-list-wrapper">
                                    <ul className="link-list"></ul>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item megamenu">
                        <a
                          className="nav-link    pl-0 focus-element"
                          href="/sviluppatori"
                        >
                          <span>Sviluppatori</span>

                          <svg className="icon"></svg>
                        </a>
                      </li>

                      <li className="nav-item megamenu">
                        <a
                          className="nav-link    pl-0 focus-element"
                          href="/scrivi-redazione"
                        >
                          <span>Scrivi alla redazione</span>

                          <svg className="icon"></svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeaderNavigation.propTypes = {};

HeaderNavigation.defaultProps = {};

export default HeaderNavigation;
