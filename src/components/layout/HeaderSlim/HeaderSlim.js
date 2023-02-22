import React from "react";
import "./HeaderSlim.css";

const HeaderSlim = () => (
  <header className="it-header-slim-wrapper" data-testid="Header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mb-0 px-xl-3">
          <div className="it-header-slim-wrapper-content ">
            <div className="d-lg-block navbar-brand normal-breack-text">
              <div className="row">
                <a
                  aria-label="Vai al sito del Dipartimento per la trasformazione digitale"
                  href="https://innovazione.gov.it/dipartimento/"
                >
                  <u>Dipartimento per la trasformazione digitale</u>
                </a>
                <span className="mr-1 ml-sm-1 ml-0"> e </span>
                <a
                  aria-label="Vai al sito dell'Istat"
                  href="https://www.istat.it/"
                >
                  <u>Istat</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

HeaderSlim.propTypes = {};

HeaderSlim.defaultProps = {};

export default HeaderSlim;
