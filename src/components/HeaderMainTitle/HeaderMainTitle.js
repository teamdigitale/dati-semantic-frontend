import React from "react";
import { ReactComponent as Logo } from "../../assets/images/dt-logo.svg";

const siteTitle = "NDC";
const siteTagLine = "National Data Catalog";

const HeaderMainTitle = () => (
  <div className="it-header-center-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-center-content-wrapper">
            <div className="it-brand-wrapper">
              <div id="it-region-brand" className="region brand">
                <div id="it-block-headerlogo-3">
                  <div>
                    <a href="/" className="focus-element">
                      <Logo
                        className="img-fluid img-logo-header-normal d-inline-block align-top p-2 rounded"
                        alt="Logo"
                        title="Logo"
                        width="78"
                        height="78"
                      />
                      <div className="it-brand-text">
                        <h2 className="no_toc font-45">{siteTitle}</h2>
                        <h3
                          className="no_toc d-none d-md-block"
                          style={{ fontSize: "30px" }}
                        >
                          {siteTagLine}
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
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
