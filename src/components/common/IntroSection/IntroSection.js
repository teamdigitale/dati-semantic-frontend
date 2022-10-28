import React from "react";
import styles from "./IntroSection.module.css";
import { array, string } from "prop-types";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const IntroSection = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  type,
  arrayBread,
}) => {
  return (
    <React.Fragment>
      {type && arrayBread ? (
        <div className="row mx-0 px-0 introSectionBread">
          <div className="col-lg-12 pl-5">
            <BreadCrumbs arrayBread={arrayBread} />
          </div>
        </div>
      ) : null}
      <div
        data-testid="Header"
        className="section section-muted"
        role="complementary"
      >
        <div className="container">
          <div className="row mx-0">
            <div className=" col-lg-6  mb-0 mb-lg-4">
              <div
                className={"text-uppercase font-weight-bold " + styles.title}
              >
                {title}
              </div>
              <h3 className={styles.subtitle + " font-weight-bold"}>
                {subtitle}
              </h3>
              <div className={styles.description}>{description}</div>
              <div className={`mt-4 ${styles.buttonSection} row`}>
                <div
                  className={
                    primaryButtonText.length > 20 ? "col-sm-6" : "col-sm-4"
                  }
                >
                  <a className={"btn btn-primary"} href={primaryButtonLink}>
                    {primaryButtonText}
                  </a>
                </div>
                {secondaryButtonLink ? (
                  <div className="col-sm-5">
                    <a
                      className={
                        "btn btn-outline-primary " + styles.btnSecondary
                      }
                      href={secondaryButtonLink}
                    >
                      {secondaryButtonText}
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {type ? (
              <div className="col-lg-6 mt-5 d-flex justify-content-center"></div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
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
  type: string,
  arrayBread: array,
};

IntroSection.defaultProps = {};

export default IntroSection;
