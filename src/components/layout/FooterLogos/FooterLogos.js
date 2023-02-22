import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dipartimento.svg";
import { ReactComponent as IstatLogo } from "../../../assets/images/istat-logo.svg";
import { ReactComponent as PnrrLogo } from "../../../assets/images/logo-eu.svg";
import { ReactComponent as RepubblicaLogo } from "../../../assets/images/repubblica-logo-colorato-footer.svg";
import { ReactComponent as Divider } from "../../../assets/images/line_13.svg";
import "./FooterLogos.css";

const FooterLogos = () => {
  return (
    <div className="container-fluid px-5">
      <div className="row footer_logoteam">
        <div className="footer_logo_img">
          <a
            aria-label="Vai al sito del pnrr"
            href="https://ec.europa.eu/info/index_it"
          >
            <PnrrLogo
              className="img-fluid img-logo-header-normal d-inline-block align-top mr-1 p-2 rounded"
              alt="Pnrr_logo"
              title="Pnrr"
            />
          </a>
        </div>
        <div className="footer_logo_img">
          <a
            aria-label="Vai al sito del governo italiano"
            href="https://www.governo.it/"
          >
            <RepubblicaLogo
              className="img-fluid img-logo-header-normal d-inline-block align-top p-2 rounded"
              alt="Repubblica_italiana_logo"
              title="Repubblica Italiana"
            />
          </a>
        </div>
        <div className="footer_logo_img">
          <Divider
            className="img-fluid img-logo-header-normal  d-inline-block align-top p-2 rounded"
            alt="divisore"
            title=""
          />
        </div>
        <div className="footer_logo_img mr-4">
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
