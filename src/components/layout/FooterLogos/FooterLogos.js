import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dipartimento.svg";
import { ReactComponent as IstatLogo } from "../../../assets/images/istat-logo.svg";
import "./FooterLogos.css";

const FooterLogos = () => {
  return (
    <div className="container">
      <div className="row pl-4 footer_logoteam">
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
        <div className="footer_logo_img">
          <a aria-label="Vai al sito dell'ISTAT" href="https://www.istat.it/">
            <IstatLogo className="istat-logo" alt="" title="Istat" />
          </a>
        </div>
      </div>
    </div>
  );
};

FooterLogos.propTypes = {};

FooterLogos.defaultProps = {};

export default FooterLogos;
