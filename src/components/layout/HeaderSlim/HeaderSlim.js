import React from "react";

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
              Team Digitale
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
