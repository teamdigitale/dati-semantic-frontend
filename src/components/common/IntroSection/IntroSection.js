import React from "react";
import styles from "./IntroSection.module.css";
import { array, bool, string } from "prop-types";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import { getHeroSpace } from "../../../services/imgHeroSpace";
import getAlertMessage from "../../../services/alertService";

const IntroSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  type,
  arrayBread,
  isSearch,
}) => {
  let heroSpace = "";
  if (type) {
    heroSpace = getHeroSpace(location?.href);
  }
  const alertMess = getAlertMessage();
  return (
    <React.Fragment>
      {arrayBread ? (
        <div
          className={
            !isSearch || isSearch == undefined
              ? "introSectionBread py-0 pl-3"
              : "introSectionBreadWhite" + "row mx-0 px-0 my-0 py-0 pl-3"
          }
        >
          <div className="col-xl-12 pl-5">
            <BreadCrumbs arrayBread={arrayBread} />
          </div>
        </div>
      ) : null}
      {alertMess && alertMess != "" ? (
        <div
          className={!isSearch ? "mantainenceAllert" : "mantainenceAllertWhite"}
        >
          <div
            className="container-fluid schemaPadding py-3"
            data-testid="messageAlert"
          >
            <div className="alert alert-warning m-0" role="alert">
              <strong>Avviso di manutenzione</strong> - {alertMess}
            </div>
          </div>
        </div>
      ) : null}
      <div
        data-testid="Header"
        className={!isSearch ? styles.bkgIntro : ""}
        role="complementary"
      >
        <div className="container-fluid schemaPadding py-5">
          <div className="row mx-0 ">
            <div className=" col-xl-6  mb-0 mb-xl-4 pl-xl-5">
              <div className={"font-weight-bold " + styles.title}>
                <h1>{title}</h1>
              </div>
              <p className={styles.subtitle}>{subtitle}</p>
              <div className={`mt-4 ${styles.buttonSection} row`}>
                {primaryButtonLink && primaryButtonText ? (
                  <div
                    className={
                      primaryButtonText.length > 20
                        ? "col-xl-5 mb-2 mb-xl-0 mx-0 px-0"
                        : "col-xl-4 mb-2 mb-xl-0 mx-0 px-0"
                    }
                  >
                    <a className={"btn btn-primary"} href={primaryButtonLink}>
                      {primaryButtonText}
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {secondaryButtonLink ? (
                  <div className="col-xl-6 d-flex justify-content-xl-start  mx-0 ml-xl-4 px-0 pl-xl-1">
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
            {type && heroSpace ? (
              <div className="col-xl-6 mt-5 d-flex justify-content-center">
                <img src={heroSpace} className={"img-fluid"} />
              </div>
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
  primaryButtonText: string,
  secondaryButtonText: string,
  primaryButtonLink: string,
  secondaryButtonLink: string,
  type: string,
  arrayBread: array,
  isSearch: bool,
};

IntroSection.defaultProps = {};

export default IntroSection;
