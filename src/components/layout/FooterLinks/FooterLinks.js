import React from "react";
import { routes } from "../../../services/routes";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks} role="contentinfo">
      <div className="container">
        <div className="row">
          <p className="justify-content-center pt-3 pr-3">
            <a className={styles.bottomLabel} href="#">
              Note Legali
            </a>
          </p>
          <p className="justify-content-center pt-3 pr-3">
            <a className={styles.bottomLabel} href={routes.privacyPolicy()}>
              Privacy Policy
            </a>
          </p>
          <p className="justify-content-center pt-3 pr-3">
            <a
              className={styles.bottomLabel}
              href="https://form.agid.gov.it/view/eb6c03ab-525a-42f7-bb41-e828d89f5b82"
            >
              Dichiarazione di Accessibilità
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {};

FooterLinks.defaultProps = {};

export default FooterLinks;
