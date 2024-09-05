/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from "react";
import BreadCrumbs from "../../../common/BreadCrumbs/BreadCrumbs";
import BREADCRUMBS from "../../../../services/BreadCrumbsConst";
import sprite from "../../../../assets/images/sprite.svg";
import "../Validatore.css";
import { isMobile } from "../../../common/ResponsiveViews";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { VALIDATORE } from "../../../../services/routes";

const ValidatoreResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const response = location.state || {};
  const [stoplight, setStoplight] = useState(false);

  const buttonGroupErrorEl = document.getElementById("button-group-error");
  const backgroundEl = document.getElementById("background-custom");

  const errorRef = useRef(null);
  const warningRef = useRef(null);

  const errors = response?.errors;
  const warnings = response?.warnings;

  if (Object.values(response).length === 0) {
    return <Navigate to={`../../${VALIDATORE}`} replace={false} />;
  }

  const downloadFile = () => {
    let messages = [];
    let filename = "Lista.txt";

    if (response.errors.length > 0) {
      messages.push("LISTA ERRORI");
      messages = messages.concat(
        response.errors.map((error, index) => `${index + 1}. ${error.message}`)
      );
    }

    if (response.warnings.length > 0) {
      messages.push("LISTA WARNING");
      messages = messages.concat(
        response.warnings.map(
          (warning, index) => `${index + 1}. ${warning.message}`
        )
      );
    }

    if (messages.length === 0) {
      return;
    }

    const data = messages.join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePageReload = () => {
    navigate(`../../${VALIDATORE}`, { replace: true });
  };

  const handleShowErrors = () => {
    errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleShowWarnings = () => {
    warningRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleChangeBackground = () => {
    const offset = buttonGroupErrorEl.getBoundingClientRect().top;
    backgroundEl.style.background = `linear-gradient(to bottom, #f0f6fc ${
      offset - (isMobile() ? 0 : 100)
    }px, white 0)`;
  };

  useEffect(() => {
    if (buttonGroupErrorEl) {
      handleChangeBackground();
      window.addEventListener("resize", handleChangeBackground);

      if (!stoplight) setStoplight(true);
    }

    return () => {
      window.removeEventListener("resize", handleChangeBackground);
    };
  }, [buttonGroupErrorEl, response, backgroundEl]);

  useEffect(() => {
    setStoplight(true);
    if (backgroundEl)
      backgroundEl.style.background = `linear-gradient(to bottom, #f0f6fc 600px, white 0)`;
  }, []);

  return (
    <div data-testid="ValidatoreResult">
      <div id="background-custom">
        <div>
          {response &&
          response.errors.length === 0 &&
          response.warnings.length === 0 ? (
            <div className="mx-0">
              <div className="container-fluid px-xl-4 px-lg-2 px-0">
                <div className="row mx-0 px-0">
                  <div className="col-lg-12 ps-5">
                    <BreadCrumbs arrayBread={BREADCRUMBS.VALIDATORE_RESULT} />
                  </div>
                </div>
              </div>
              <div className="container-fluid schemaPadding">
                <div className="">
                  <div className="col-12">
                    <div>
                      <div className="col-lg-12">
                        <div>
                          {/* <button
                            type="button"
                            className="btn btn-outline-primary fw-bold ms-2"
                            onClick={handlePageReload}
                          >
                            <svg className="icon icon-sm ms-0 me-3" fill="blue">
                              <use href={sprite + "#it-arrow-left"}></use>
                            </svg>
                            Torna indietro
                          </button> */}
                          {/* <div className="col-lg-12 ps-2 mt-5 mb-4">
                            <div className="text-uppercase ms-0 title">
                              <div className="pt-1 ms-0 title text-success">
                                DOCUMENTO IDONEO
                              </div>
                            </div>
                          </div> */}

                          <div className="col-12 mt-5 mb-5 d-flex">
                            <svg
                              className="icon icon-xl me-3 mt-3"
                              fill="green"
                            >
                              <use href={sprite + "#it-check-circle"}></use>
                            </svg>
                            <h1 className="main col-6">
                              Complimenti, il tuo file risulta essere idoneo
                            </h1>
                          </div>
                          <div id="button-group-error" className="mb-5">
                            <a
                              className="btn btn-primary text-white ms-2 mb-5"
                              onClick={handlePageReload}
                            >
                              Valida un altro documento
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : response &&
            (response.errors.length !== 0 || response.warnings.length !== 0) ? (
            <>
              <div className="mx-0 mb-5">
                <div className="container-fluid px-xl-4 px-lg-2 px-0">
                  <div className="row mx-0 px-0">
                    <div className="col-lg-12 ps-5">
                      <BreadCrumbs arrayBread={BREADCRUMBS.VALIDATORE_RESULT} />
                    </div>
                  </div>
                </div>
                <div className="container-fluid schemaPadding d-flex">
                  <div className="">
                    <div className="col-12">
                      <div>
                        <div className="col-lg-12">
                          <div>
                            {warnings.length !== 0 && (
                              <div
                                className="schemaPadding py-2 ms-2 mt-3"
                                data-testid="messageAlert"
                              >
                                <div
                                  className="alert alert-warning m-0"
                                  role="alert"
                                >
                                  <strong>
                                    <span className="col-12">
                                      In caso di soli messaggi di avvertimento
                                      (WARNING) il processo di harvester sarà in
                                      grado di acquisire i metadati. E'
                                      consigliabile, ma non obbligatorio,
                                      procedere con la risoluzione degli
                                      avvertimenti segnalati.
                                    </span>
                                  </strong>
                                </div>
                              </div>
                            )}
                            {errors.length !== 0 && (
                              <div
                                className="schemaPadding py-2 ms-2 mt-1"
                                data-testid="messageAlert"
                              >
                                <div
                                  className="alert alert-danger m-0"
                                  role="alert"
                                >
                                  <strong>
                                    <span>
                                      In caso di segnalazione di errori (ERROR)
                                      il processo di harvesting NON potrà
                                      acquisire i metadati, in questo caso è
                                      NECESSARIO procedere con la correzione di
                                      tutti gli errori segnalati prima di poter
                                      sottomettere il file Turtle al processo di
                                      harvesting.
                                    </span>
                                  </strong>
                                </div>
                              </div>
                            )}

                            {/* <div className="col-lg-12 ps-2 mt-5 mb-4">
                              <div className="text-uppercase ms-0 title">
                                <div
                                  className="pt-1 ms-0 title"
                                  style={{ color: "hsl(0, 70%, 50%)" }}
                                >
                                  DOCUMENTO NON IDONEO
                                </div>
                              </div>
                            </div> */}

                            <div className="col-12 mt-5 mb-5 d-flex">
                              <svg
                                className="icon icon-xl me-3 mt-3"
                                fill="red"
                              >
                                <use href={sprite + "#it-error"}></use>
                              </svg>
                              <h1 className="main col-6">
                                Ci dispiace, il tuo file non risulta essere
                                idoneo
                              </h1>
                            </div>
                            <div id="button-group-error" className="d-flex">
                              {errors?.length !== 0 ? (
                                <div>
                                  <button
                                    className="btn btn-lg btn-danger fw-bold ms-2 "
                                    onClick={handleShowErrors}
                                  >
                                    Mostra errori
                                  </button>
                                </div>
                              ) : null}

                              {warnings?.length !== 0 ? (
                                <div>
                                  <button
                                    className="btn btn-lg btn-outline-warning fw-bold ms-2"
                                    onClick={handleShowWarnings}
                                    // style={{ color: "hsl(0, 70%, 50%)" }}
                                  >
                                    Mostra warning
                                  </button>
                                </div>
                              ) : null}

                              <div>
                                <a
                                  className="btn btn-lg btn-primary text-white ms-3"
                                  onClick={downloadFile}
                                >
                                  <svg
                                    className="icon icon-sm ms-0 me-2"
                                    fill="white"
                                  >
                                    <use href={sprite + "#it-download"}></use>
                                  </svg>
                                  Scarica Lista
                                </a>
                              </div>
                            </div>

                            {errors?.length !== 0 ? (
                              <>
                                <div
                                  className="col-12 pt-1 ms-1 mb-2 title"
                                  ref={errorRef}
                                  style={{
                                    color: "#455B71",
                                    marginTop: "6rem"
                                  }}
                                >
                                  LISTA ERRORI
                                </div>
                                <div
                                  className="card card-bg mt-4"
                                  style={{ minHeight: "3rem" }}
                                >
                                  <div className="col-12 card-space">
                                    <div className="row">
                                      <div
                                        className="pt-1 fw-bold mt-3 mb-4 ms-4"
                                        ref={errorRef}
                                        style={{
                                          fontSize: "0.8rem",
                                          width: "95%"
                                        }}
                                      >
                                        <span
                                          className="d-flex"
                                          style={{
                                            paddingBottom: "0.8rem",
                                            borderBottom: "1px solid black"
                                          }}
                                        >
                                          LISTA ERRORI
                                        </span>
                                      </div>
                                      {errors.map((error, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className="col-12 card-wrapper card-space mx-2"
                                          >
                                            <div className="col-12 ms-0 row">
                                              <h6
                                                className="col-1 me-5 ms-2 fw-bold"
                                                style={{ color: "#004080" }}
                                              >
                                                Errore {`${index + 1}`}
                                              </h6>
                                              <span className="col-10">
                                                {error.message}
                                              </span>
                                              <hr
                                                className="ms-3 me-4"
                                                style={{
                                                  paddingBottom: "0.1rem",
                                                  width: "95%"
                                                }}
                                              />
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null}

                            {warnings?.length !== 0 ? (
                              <>
                                <div
                                  className="col-12 pt-1 ms-1 mb-2 title"
                                  ref={warningRef}
                                  style={{
                                    color: "#455B71",
                                    marginTop: "6rem"
                                  }}
                                >
                                  LISTA WARNING
                                </div>

                                <div
                                  className="card card-bg mt-4"
                                  style={{ minHeight: "3rem" }}
                                >
                                  <div className="col-12 card-space">
                                    <div className="row">
                                      <div
                                        className="pt-1 mt-3 mb-4 ms-4 fw-bold"
                                        ref={warningRef}
                                        style={{
                                          fontSize: "0.8rem",
                                          width: "95%"
                                        }}
                                      >
                                        <span
                                          className="d-flex"
                                          style={{
                                            paddingBottom: "0.8rem",
                                            borderBottom: "1px solid black"
                                          }}
                                        >
                                          LISTA WARNING
                                        </span>
                                      </div>
                                      {warnings.map((warning, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className="col-12 card-wrapper card-space mx-2"
                                          >
                                            <div className="col-12 ms-0 row">
                                              <h6
                                                className="col-1 me-5 ms-2 fw-bold"
                                                style={{ color: "#004080" }}
                                              >
                                                Warning {`${index + 1}`}
                                              </h6>
                                              <span className="col-10">
                                                {warning.message}
                                              </span>
                                              <hr
                                                className="ms-3 me-4"
                                                style={{
                                                  paddingBottom: "0.1rem",
                                                  width: "95%"
                                                }}
                                              />
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null}

                            {/* <div className="col-12 d-flex justify-content-end">
                              <a
                                className="btn btn-lg btn-primary text-white mt-5"
                                onClick={downloadFile}
                              >
                                <svg
                                  className="icon icon-sm mt- ms-0 me-2"
                                  style={{ fill: "white" }}
                                >
                                  <use href={sprite + "#it-download"}></use>
                                </svg>
                                Scarica Lista
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

ValidatoreResult.propTypes = {};
ValidatoreResult.defaultPropTypes = {};

export default ValidatoreResult;
