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
    <div
      data-testid="Header"
      className="section section-muted"
      role="complementary"
    >
      <div className="container">
        <div className="offset-lg-1 col-lg-6 col-md-8 mb-0 mb-lg-4">
          <div className={"text-uppercase font-weight-bold " + styles.title}>
            {title}
          </div>
          <h3 className={styles.subtitle + " font-weight-bold"}>{subtitle}</h3>
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
