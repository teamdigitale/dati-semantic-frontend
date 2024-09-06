/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from "react";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import { baseUrl } from "../../../services/fetchUtils";
import sprite from "../../../assets/images/sprite.svg";
import "./Validatore.css";
import { useNavigate } from "react-router-dom";
import { isMobile } from "../../common/ResponsiveViews";
import { bool } from "prop-types";

const Validatore = ({ test = false }) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [response, setResponse] = useState(null);
  const [stoplight, setStoplight] = useState(false);

  const buttonGroupEl = document.getElementById("button-group");
  const backgroundEl = document.getElementById("background-custom");

  const intervalRef = useRef(null);

  // Required for tooltip functionality (from bootstrap docs)
  if (!test) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    // eslint-disable-next-line no-unused-vars
    const tooltipList = tooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }

  const handleFileSelect = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop();

    if (fileExtension !== "ttl") {
      return;
    }

    setSelectedFile(file);
    setCurrentStep(2);
    intervalRef.current = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress === 120) {
          clearInterval(intervalRef.current);
          setCurrentStep(3);
        }
        return prevProgress + 30;
      });
    }, 500);
  };

  const cleanStateForHistory = (state) => {
    const stateWithNoFunctions = {};
    for (const key of Object.keys(state)) {
      if (typeof key !== "function") {
        stateWithNoFunctions[key] = state[key];
      }
    }
    return stateWithNoFunctions;
  };

  const handleSubmit = () => {
    if (selectedFile) {
      let formData = new FormData();
      formData.append(
        "file",
        new Blob([selectedFile], { type: "text/turtle" }),
        selectedFile.name
      );

      let type = "";
      if (document.getElementById("radio4").checked) {
        type = "ontology";
      } else if (document.getElementById("radio5").checked) {
        type = "controlled vocabulary";
      } else if (document.getElementById("radio6").checked) {
        type = "schema";
      }

      fetch(`${baseUrl()}/validate?type=${type}`, {
        method: "POST",
        body: formData
      }).then((response) => {
        if (response.status > 400) {
          throw new Error(window.open("/error-page", "_self"));
        }
        response.json().then((data) => {
          setResponse(data);
          navigate("risultato", { state: cleanStateForHistory(data) });
        });
      });
    }
  };

  const getFileSize = (sizeInBytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
    const formattedSize = (sizeInBytes / Math.pow(1024, i)).toFixed(2);
    return `${formattedSize} ${sizes[i]}`;
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setCurrentStep(1);
    setUploadProgress(0);
    clearInterval(intervalRef.current);
  };

  const handleChangeBackground = () => {
    const offset = buttonGroupEl.getBoundingClientRect().top + window.scrollY;

    backgroundEl.style.background = `linear-gradient(to bottom, #f0f6fc ${
      offset - (isMobile() ? 80 : 140)
    }px, white 0)`;
  };

  useEffect(() => {
    if (buttonGroupEl) {
      handleChangeBackground();
      window.addEventListener("resize", handleChangeBackground);

      if (!stoplight) setStoplight(true);
    }

    return () => {
      window.removeEventListener("resize", handleChangeBackground);
    };
  }, [buttonGroupEl, response, backgroundEl]);

  useEffect(() => {
    setStoplight(true);
    if (backgroundEl)
      backgroundEl.style.background = `linear-gradient(to bottom, #f0f6fc 600px, white 0)`;
  }, []);

  return (
    <div data-testid="Validatore">
      <div id="background-custom">
        <div className="mx-0 mb-5">
          <div className="container-fluid px-xl-4 px-lg-2 px-0">
            <div className="row mx-0 px-0">
              <div className="col-lg-12 ps-5">
                <BreadCrumbs arrayBread={BREADCRUMBS.VALIDATORE} />
              </div>
            </div>
          </div>

          <div className="container-fluid schemaPadding">
            <div className="row pt-5">
              <div className="col-12">
                <div>
                  {/* <div className="col-lg-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="col-lg-6 ps-0">
                        <div className="text-uppercase ms-0 title">
                          <div className="pt-1 ms-2 title">
                            Validazione documento
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 text-end">
                        <div className="bg-primary chip chip-simple chip-lg border-0">
                          <span className="label">Validatore semantico</span>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="row pt-3 pb-3">
                    <div className="col-12">
                      <h1 className="main ms-2">
                        Valida i metadati delle risorse semantiche
                      </h1>
                    </div>
                    <div className="description col-12 col-md-6 mb-2">
                      Per la pubblicazione sul Catalogo, i metadati devono
                      essere conformi alle regole indicate nella{" "}
                      <a
                        className="link-primary assetIri"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://teamdigitale.github.io/dati-semantic-guida-ndc-docs/docs/manuale-operativo/indicazioni-su-modellazione-e-metadatazione-degli-asset-semantici.html"
                      >
                        Guida al Catalogo
                      </a>
                      . Questo strumento ti permette di validare il file Turtle
                      e di ottenere dei warning/errori sui metadati se presenti.
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <div className="card-wrapper card-space">
                        <div id="cardValidator" className="card card-bg mt-4">
                          <div className="mb-2">
                            <div className="w-auto" tabIndex="0">
                              <>
                                <h1 className="subtitle col-16 mt-4">
                                  Seleziona per quale tipo di risorsa semantica
                                  vuoi validare il file Turtle
                                </h1>
                                <div
                                  id="button-group"
                                  className="mt-4"
                                  style={{ marginLeft: "1.3rem" }}
                                >
                                  {/* style={{display: 'inline-flex'}} */}
                                  <div className="form-check form-check-inline me-2">
                                    <input
                                      name="gruppo2"
                                      type="radio"
                                      id="radio4"
                                      checked={selectedType === "ontology"}
                                      onChange={() =>
                                        setSelectedType("ontology")
                                      }
                                    />
                                    <label htmlFor="radio4">Ontologia</label>

                                    <svg
                                      data-bs-toggle="tooltip"
                                      title="Adottare le regole di metadatazione dell’ontologia ADMS-AP_IT"
                                      data-bs-placement="right"
                                      data-bs-custom-class="tooltip"
                                      className="icon icon-xs icon-secondary ms-1"
                                      style={{ verticalAlign: "text-top" }}
                                    >
                                      <use
                                        href={`${sprite}#it-info-circle`}
                                      ></use>
                                    </svg>
                                  </div>
                                  <div className="form-check form-check-inline me-2">
                                    <input
                                      name="gruppo2"
                                      type="radio"
                                      id="radio5"
                                      checked={
                                        selectedType === "controlled vocabulary"
                                      }
                                      onChange={() =>
                                        setSelectedType("controlled vocabulary")
                                      }
                                    />
                                    <label htmlFor="radio5">
                                      Vocabolario controllato
                                    </label>
                                    <svg
                                      data-bs-toggle="tooltip"
                                      title="Adottare le regole di metadatazione DCAT-AP_IT e una licenza aperta"
                                      data-bs-placement="right"
                                      className="icon icon-xs icon-secondary ms-1"
                                      style={{ verticalAlign: "text-top" }}
                                    >
                                      <use
                                        href={`${sprite}#it-info-circle`}
                                      ></use>
                                    </svg>
                                  </div>
                                  <div className="form-check form-check-inline me-2">
                                    <input
                                      name="gruppo2"
                                      type="radio"
                                      id="radio6"
                                      checked={selectedType === "schema"}
                                      onChange={() => setSelectedType("schema")}
                                    />
                                    <label htmlFor="radio6">Schema dati</label>
                                    <svg
                                      data-bs-toggle="tooltip"
                                      title="Il file index.ttl deve adottare le regole di metadatazione dell’ontologia ADMS-AP_IT"
                                      data-bs-placement="right"
                                      className="icon icon-xs icon-secondary ms-1"
                                      style={{ verticalAlign: "text-top" }}
                                    >
                                      <use
                                        href={`${sprite}#it-info-circle`}
                                      ></use>
                                    </svg>
                                  </div>
                                </div>
                                <h1 className="subtitle col-16 mt-5">
                                  Allega il file Turtle
                                </h1>
                              </>
                              {currentStep === 1 && (
                                <form
                                  method="post"
                                  action=""
                                  encType="multipart/form-data"
                                >
                                  {" "}
                                  <div className="mt-2 ms-0 py-1 btn-lg">
                                    <input
                                      type="file"
                                      name="upload2"
                                      id="upload2"
                                      className="upload"
                                      onChange={handleFileSelect}
                                      accept=".ttl"
                                    />
                                    <label htmlFor="upload2">
                                      <svg
                                        className="icon icon-sm me-1"
                                        aria-hidden="true"
                                        style={{ verticalAlign: "text-bottom" }}
                                      >
                                        <use href={sprite + "#it-upload"}></use>
                                      </svg>
                                      Upload
                                    </label>
                                  </div>
                                </form>
                              )}
                              {currentStep === 2 && (
                                <div className="my-4 ms-1">
                                  <ul className="upload-file-list mt-4 ms-4">
                                    <li
                                      className="upload-file success mb-2 mt-2"
                                      style={{
                                        maxWidth: "50%"
                                      }}
                                    >
                                      <svg
                                        className="icon icon-sm"
                                        aria-hidden="true"
                                      >
                                        <use href={sprite + "#it-file"}></use>
                                      </svg>
                                      <p>
                                        {selectedFile && selectedFile.name}
                                        <span className="upload-file-weight"></span>
                                      </p>
                                      <button onClick={handleCancel}>
                                        <svg
                                          className="icon ms-0 "
                                          aria-hidden="true"
                                        >
                                          <use
                                            href={sprite + "#it-close"}
                                          ></use>
                                        </svg>
                                      </button>
                                    </li>
                                    <li className="upload-file success mb-0">
                                      <div
                                        className="progress"
                                        style={{
                                          width: "11.67rem"
                                        }}
                                      >
                                        <div
                                          className="progress-bar"
                                          role="progressbar"
                                          style={{
                                            width: `calc(10rem * ${
                                              uploadProgress / 100
                                            })`
                                          }}
                                          aria-valuenow={uploadProgress}
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              )}
                              {currentStep === 3 && (
                                <div className="col-lg-12">
                                  <div className="my-2 ms-1 d-flex">
                                    <ul className="upload-file-list mt-2 ms-4">
                                      <li
                                        className="upload-file success mb-2 mt-2"
                                        style={{
                                          maxWidth: "100%"
                                        }}
                                      >
                                        <svg
                                          className="icon icon-sm"
                                          aria-hidden="true"
                                        >
                                          <use href={sprite + "#it-file"}></use>
                                        </svg>
                                        <p>
                                          {selectedFile && (
                                            <strong>{selectedFile.name}</strong>
                                          )}
                                          <span className="upload-file-weight ms-3">
                                            {selectedFile && (
                                              <span className="fw-bold text-black">
                                                {getFileSize(selectedFile.size)}
                                              </span>
                                            )}
                                          </span>
                                        </p>
                                        <button
                                          style={{ marginLeft: "5rem" }}
                                          disabled
                                        >
                                          <svg
                                            className="icon"
                                            aria-hidden="true"
                                          >
                                            <use
                                              href={sprite + "#it-check"}
                                            ></use>
                                          </svg>
                                        </button>
                                      </li>
                                    </ul>
                                    <div className="ms-5 mt-2 text-end">
                                      <a
                                        className="btn btn-danger btn-sm me-1 px-3 text-white"
                                        onClick={handleCancel}
                                      >
                                        <svg
                                          className="icon icon-sm ms-0 me-3"
                                          fill="white"
                                        >
                                          <use
                                            href={sprite + "#it-delete"}
                                          ></use>
                                        </svg>
                                        <span>Rimuovi allegato</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <hr className="border col-11 mb-0 mt-3 pe-4 ms-4" />
                          </div>
                          <div>
                            {currentStep === 3 && selectedType ? (
                              <div>
                                <a
                                  className="btn btn-lg btn-primary text-white ms-4 mt-3 mb-3"
                                  onClick={handleSubmit}
                                >
                                  Valida documento
                                </a>
                              </div>
                            ) : (
                              <div>
                                <a className="btn btn-lg btn-light disabled ms-4 mt-4 mb-3">
                                  Valida documento
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
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
};

Validatore.propTypes = { test: bool };
Validatore.defaultPropTypes = {};

export default Validatore;
