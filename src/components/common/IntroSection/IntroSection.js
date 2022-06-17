import React from "react";
import styles from "./IntroSection.module.css";
import { string } from "prop-types";

const IntroSection = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
}) => {
  return (
    <div data-testid="Header" className="section section-muted">
      <div className="container">
        <div className="pl-5 ml-5">
          <div className={"text-uppercase font-weight-bold " + styles.title}>
            {title}
          </div>
          <div className={styles.subtitle + " font-weight-bold"}>
            {subtitle}
          </div>
          <div className={styles.description}>{description}</div>
          <div className={"mt-4 " + styles.buttonSection}>
            <a className={"btn btn-primary mr-4"} href={primaryButtonLink}>
              {primaryButtonText}
            </a>
            {secondaryButtonLink ? (
              <a
                className={"btn btn-outline-primary " + styles.btnSecondary}
                href={secondaryButtonLink}
              >
                {secondaryButtonText}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

IntroSection.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string,
  primaryButtonText: string.isRequired,
  secondaryButtonText: string,
  primaryButtonLink: string.isRequired,
  secondaryButtonLink: string,
};

IntroSection.defaultProps = {};

export default IntroSection;
