import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dt-logo.svg";
import { Link } from "react-router-dom";

const siteTitle = "Schema";
const siteTagLine = "Il catalogo nazionale della semantica dei dati";

const HeaderMainTitle = () => (
  <div className="it-header-center-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-center-content-wrapper">
            <div className="it-brand-wrapper">
              <Link to="/" className="focus-element" aria-label="Vai alla home">
                <Logo
                  className="img-fluid img-logo-header-normal d-inline-block align-top p-2 rounded"
                  alt=""
                  title="Home"
                  width="78"
                  height="78"
                />
                <div className="it-brand-text">
                  <h2 className="no_toc">{siteTitle}</h2>
                  <h3 className="no_toc d-none d-md-block">{siteTagLine}</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeaderMainTitle.propTypes = {};

HeaderMainTitle.defaultProps = {};

export default HeaderMainTitle;
