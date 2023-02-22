import React from "react";
import { routes } from "../../../services/routes";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks} role="contentinfo">
      <div className="container-fluid px-5">
        <div className="row mx-0 my-0 pt-3 align-items-center">
          {/* <p className="pl-1 pr-5">
            <a className={styles.bottomFooter} href={routes.legalNotice()}>
              Note Legali
            </a>
          </p> */}
          <p className=" pr-5">
            <a className={styles.bottomFooter} href={routes.privacyPolicy()}>
              Informativa privacy
            </a>
          </p>
          <p className="pr-5">
            <a
              className={styles.bottomFooter}
              href="https://form.agid.gov.it/view/eb6c03ab-525a-42f7-bb41-e828d89f5b82"
            >
              Dichiarazione di accessibilità
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
