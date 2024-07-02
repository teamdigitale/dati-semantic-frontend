import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dipartimento.svg";
import { ReactComponent as IstatLogo } from "../../../assets/images/istat-logo.svg";
import { ReactComponent as PnrrLogo } from "../../../assets/images/logo-eu.svg";
import "./FooterLogos.css";

const FooterLogos = () => {
  return (
    <div className="container">
      <div className="footer_logoteam  logos list-unstyled d-flex flex-column flex-md-row flex-wrap align-items-center mb-0 justify-content-md-start g-2">
        <div className="footer_logo_img">
          <a
            aria-label="Vai al sito del pnrr"
            href="https://ec.europa.eu/info/index_it"
          >
            <PnrrLogo
              className="img-fluid img-logo-header-normal d-inline-block align-top me-1 p-2 rounded"
              alt="Pnrr_logo"
              title="Pnrr"
            />
          </a>
        </div>
        <div className="footer_logo_img">
          <a
            aria-label="Vai al sito del Dipartimento per la trasformazione digitale"
            href="https://innovazione.gov.it/dipartimento/"
          >
            <Logo
              className="img-fluid img-logo-header-normal d-inline-block align-top p-2 rounded"
              alt=""
              title="Dipartimento per la trasformazione digitale"
            />
          </a>
        </div>
        <div className="footer_logo_img ps-1 ps-lg-4">
          <a aria-label="Vai al sito dell'ISTAT" href="https://www.istat.it/">
            <IstatLogo className="istat-logo" alt="" title="Istat" />
          </a>
        </div>
      </div>
    </div>
  );
};

FooterLogos.propTypes = {};

export default FooterLogos;
