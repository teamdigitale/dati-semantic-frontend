import React from "react";

const Header = () => (
  <div className="it-header-slim-wrapper" data-testid="Header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-slim-wrapper-content">
            <a className="d-none d-lg-block navbar-brand" href="#">
              Team Digitale
            </a>
            <div className="nav-mobile">
              <nav>
                <div className="link-list-wrapper collapse" id="menu2">
                  <ul className="link-list">
                    <li>
                      <a className="list-item" href="#">
                        Chi Siamo
                      </a>
                    </li>
                    <li>
                      <a className="list-item active" href="#">
                        Documentazione
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
