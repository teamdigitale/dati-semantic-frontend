import React from "react";
import "./HeaderSlim.css";

const HeaderSlim = () => (
  <div className="it-header-slim-wrapper" data-testid="Header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-slim-wrapper-content">
            <p className="d-none d-lg-block navbar-brand">
              <a href="https://innovazione.gov.it/dipartimento/">
                Dipartimento per la trasformazione Digitale
              </a>
              <span> + </span>
              <a href="https://www.istat.it/">ISTAT</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeaderSlim.propTypes = {};

HeaderSlim.defaultProps = {};

export default HeaderSlim;
