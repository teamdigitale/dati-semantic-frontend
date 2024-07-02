import React from "react";
import styles from "./IntroSection.module.css";
import { array, bool, string } from "prop-types";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import { getHeroSpace } from "../../../services/imgHeroSpace";
import getAlertMessage from "../../../services/alertService";
import { Link } from "react-router-dom";

const IntroSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  type,
  arrayBread,
  isSearch
}) => {
  let heroSpace = "";
  if (type) {
    heroSpace = getHeroSpace(location?.href);
  }
  const alertMess = getAlertMessage();
  return (
    <>
      {arrayBread ? (
        <div
          className={
            !isSearch || isSearch == undefined
              ? "secondaryBkg py-0 ps-3 ps-lg-5"
              : "introSectionBreadWhite " +
                "row mx-0 px-0 my-0 py-0 ps-3 ps-lg-5"
          }
        >
          <div className="col-xl-12 ps-lg-5">
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
        className={!isSearch ? styles.bkgIntro : "bg-white"}
      >
        <div className="container-fluid schemaPadding py-5">
          <div className="row mx-0 ">
            <div className=" col-xl-6 mb-0 mb-xl-4 ps-0">
              <div className={"fw-bold " + styles.title}>
                <h1 className="h3">{title}</h1>
              </div>
              <p className={"lead"}>{subtitle}</p>
              <div
                className={`mt-4 ${styles.buttonSection} row`}
                style={{ gap: "20px" }}
              >
                {primaryButtonLink && primaryButtonText ? (
                  <div
                    className={
                      primaryButtonText.length > 20
                        ? "col-xl-5 mb-2 mb-xl-0 mx-2 px-1"
                        : "col-xl-4 mb-0 mb-xl-0 ms-2 px-0"
                    }
                    style={{ width: "fit-content" }}
                  >
                    <Link className={"btn btn-primary"} to={primaryButtonLink}>
                      {primaryButtonText}
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                {secondaryButtonLink ? (
                  <div className="col-xl-6 ms-xl-0 ms-2 d-flex justify-content-xl-start px-0 mx-0">
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
                <img src={heroSpace} className={"img-fluid"} alt="" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
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
  isSearch: bool
};

export default IntroSection;
