/* eslint-disable prettier/prettier */
import React from "react";
import { routes } from "../../../services/routes";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className="it-footer-small-prints clearfix mt-5">
      <div className="container">
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li className="list-inline-item">
            <a className={styles.bottomFooter} href={routes.privacyPolicy()}>
              Informativa privacy
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className={styles.bottomFooter}
              href="https://form.agid.gov.it/view/eb6c03ab-525a-42f7-bb41-e828d89f5b82"
            >
              Dichiarazione di accessibilità
            </a>
          </li>
          <li className="list-inline-item">
            <a className={styles.bottomFooter} href={routes.legalNotice()}>
              Note legali
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {};

FooterLinks.defaultProps = {};

export default FooterLinks;
