import React from "react";
import "./HeaderSlim.css";

const HeaderSlim = () => (
  <div className="it-header-slim-wrapper" data-testid="Header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-slim-wrapper-content">
            <a
              className="d-none d-lg-block navbar-brand"
              href="https://teamdigitale.governo.it/"
            >
              Dipartimento per la trasformazione Digitale + ISTAT
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeaderSlim.propTypes = {};

HeaderSlim.defaultProps = {};

export default HeaderSlim;
