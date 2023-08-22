/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from "react";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import EndSection from "../../common/EndSection/EndSection";
import { baseUrl } from "../../../services/fetchUtils";
import sprite from "../../../assets/images/sprite.svg";
import "./Validatore.css";

const Validatore = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showResult, setShowResult] = useState("false");
  const [selectedType, setSelectedType] = useState("");
  const [response, setResponse] = useState(null);

  const intervalRef = useRef(null);
  const errorRef = useRef(null);
  const warningRef = useRef(null);

  const errors = response?.errors;
  const warnings = response?.warnings;

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
        body: formData,
      }).then((response) => {
        if (response.status > 400) {
          throw new Error(
            alert("Errore durante la validazione del file."),
            window.location.reload()
          );
        }
        response.json().then((data) => {
          setResponse(data);
        });
        setShowResult("true");
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

  const handlePageReload = () => {
    window.location.reload();
  };

  const handleShowErrors = () => {
    errorRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleShowWarnings = () => {
    warningRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div data-testid="Validatore">
      {showResult === "false" ? (
        <div className="mx-0 detailsContainer mb-5">
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
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="col-lg-6 ps-0">
                        <div className="text-uppercase ms-0 title">
                          <div className="pt-1 ms-2 title">
                            Validazione documento
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 text-end">
                        <div
                          className="bg-primary chip chip-simple chip-lg"
                          style={{ border: "none" }}
                        >
                          <span className="label">Validatore semantico</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row pt-3 pb-3">
                    <div className="col-12">
                      <h1 className="main ms-2">
                        Carica il file TTL per validarlo
                      </h1>
                    </div>
                    <div className="description col-6 mb-2">
                      Viene effettuata una valutazione sintattica e semantica
                      del file ttl secondo le linee guida definite da Ontopia
                      per la pubblicazione dei contenuti semantici sul portale
                      NDC.
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <div className="card-wrapper card-space">
                        <div
                          className="card card-bg mt-4"
                          style={{ height: "23rem" }}
                        >
                          <div className="mb-2">
                            <div style={{ width: "auto" }} tabIndex="0">
                              <>
                                <h1
                                  className="subtitle col-16 mt-4"
                                  style={{ marginLeft: "1.5rem" }}
                                >
                                  Che tipologia di file devi validare?
                                </h1>
                                <div
                                  className="mt-4"
                                  style={{ marginLeft: "1.3rem" }}
                                >
                                  <div className="form-check form-check-inline me-4">
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
                                  </div>
                                  <div className="form-check form-check-inline me-4">
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
                                  </div>
                                  <div className="form-check form-check-inline me-4">
                                    <input
                                      name="gruppo2"
                                      type="radio"
                                      id="radio6"
                                      checked={selectedType === "schema"}
                                      onChange={() => setSelectedType("schema")}
                                    />
                                    <label htmlFor="radio6">Schema dati</label>
                                  </div>
                                </div>
                                <h1
                                  className="subtitle col-16 mt-5 "
                                  style={{ marginLeft: "1.5rem" }}
                                >
                                  Allega il file
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
                                        className="icon icon-sm"
                                        aria-hidden="true"
                                      >
                                        <use href={sprite + "#it-upload"}></use>
                                      </svg>
                                      <span>Upload</span>
                                    </label>
                                  </div>
                                </form>
                              )}
                              {currentStep === 2 && (
                                <div className="my-4 ms-1">
                                  <ul className="upload-file-list mt-4 ms-4">
                                    <li
                                      className="upload-file success"
                                      style={{
                                        marginBottom: "0.4rem",
                                        marginTop: "0.5rem",
                                        maxWidth: "50%",
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
                                          width: "11.67rem",
                                        }}
                                      >
                                        <div
                                          className="progress-bar"
                                          role="progressbar"
                                          style={{
                                            width: `calc(10rem * ${
                                              uploadProgress / 100
                                            })`,
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
                                        className="upload-file success"
                                        style={{
                                          marginBottom: "0.4rem",
                                          marginTop: "0.5rem",
                                          maxWidth: "100%",
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
                                              <span
                                                style={{
                                                  color: "black",
                                                  fontWeight: "bold",
                                                }}
                                              >
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
                                          style={{ fill: "white" }}
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
                            <hr
                              className="border col-11 mb-0 mt-3 pe-4"
                              style={{
                                marginLeft: "1.5rem",
                              }}
                            />
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
                                <a
                                  className="btn btn-lg disabled ms-4 mt-4 mb-3"
                                  style={{
                                    backgroundColor: "#D9DADB",
                                    color: "#768594",
                                  }}
                                >
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
      ) : (
        <div>
          {response &&
          response.errors.length === 0 &&
          response.warnings.length === 0 ? (
            <div className="mx-0 detailsContainer">
              <div className="container-fluid schemaPadding">
                <div className="pt-5">
                  <div className="col-12">
                    <div>
                      <div className="col-lg-12">
                        <div>
                          <button
                            type="button"
                            className="btn btn-outline-primary fw-bold ms-2"
                            onClick={handlePageReload}
                          >
                            <svg
                              className="icon icon-sm ms-0 me-3"
                              style={{ fill: "blue" }}
                            >
                              <use href={sprite + "#it-arrow-left"}></use>
                            </svg>
                            Torna indietro
                          </button>
                          <div className="col-lg-12 ps-2 mt-5 mb-4">
                            <div className="text-uppercase ms-0 title">
                              <div
                                className="pt-1 ms-0 title"
                                style={{ color: "green" }}
                              >
                                DOCUMENTO IDONEO
                              </div>
                            </div>
                          </div>

                          <div className="col-12 mb-5 d-flex">
                            <svg
                              className="icon icon-xl me-3 mt-3"
                              style={{ fill: "green" }}
                            >
                              <use href={sprite + "#it-check-circle"}></use>
                            </svg>
                            <h1 className="main col-6">
                              Complimenti, il tuo documento risulta essere
                              idoneo.
                            </h1>
                          </div>
                          <div className=" mb-5">
                            <a
                              className="btn btn-primary text-white ms-2 "
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
              <div className="mx-0 detagliContainer mb-5">
                <div className="container-fluid schemaPadding d-flex">
                  <div className="pt-5">
                    <div className="col-12">
                      <div>
                        <div className="col-lg-12">
                          <div>
                            {warnings.length !== 0 && (
                              <div
                                className="schemaPadding py-3 ms-2 mb-4"
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
                                      grado di acquisire il materiale semantico.
                                      E' consigliabile, ma non obbligatorio,
                                      procedere con la risoluzione degli
                                      avvertimenti segnalati.
                                    </span>
                                  </strong>
                                </div>
                              </div>
                            )}
                            {errors.length !== 0 && (
                              <div
                                className="schemaPadding py-3 ms-2 mb-4"
                                data-testid="messageAlert"
                              >
                                <div
                                  className="alert alert-danger m-0"
                                  role="alert"
                                >
                                  <strong>
                                    <span style={{ marginRight: "" }}>
                                      In caso di segnalazione di errori (ERROR)
                                      il processo di harvesting NON potrà
                                      acquisire il metariale semantico, in
                                      questo caso è NECESSARIO procedere con la
                                      correzione di tutti gli errori segnalati
                                      prima di poter sottomettere l'asset
                                      semantico al processo di harvesting.
                                    </span>
                                  </strong>
                                </div>
                              </div>
                            )}

                            <button
                              type="button"
                              className="btn btn-outline-primary fw-bold ms-2"
                              onClick={handlePageReload}
                            >
                              <svg
                                className="icon icon-sm ms-0 me-3"
                                style={{ fill: "blue" }}
                              >
                                <use href={sprite + "#it-arrow-left"}></use>
                              </svg>
                              Torna indietro
                            </button>
                            <div className="col-lg-12 ps-2 mt-5 mb-4">
                              <div className="text-uppercase ms-0 title">
                                <div
                                  className="pt-1 ms-0 title"
                                  style={{ color: "hsl(0, 70%, 50%)" }}
                                >
                                  DOCUMENTO NON IDONEO
                                </div>
                              </div>
                            </div>

                            <div className="col-12 mb-5 d-flex">
                              <svg
                                className="icon icon-xl me-3 mt-3"
                                style={{ fill: "red" }}
                              >
                                <use href={sprite + "#it-error"}></use>
                              </svg>
                              <h1 className="main col-6">
                                Attenzione, si è verificato un problema con la
                                tua richiesta
                              </h1>
                            </div>
                            <div className="d-flex">
                              {errors?.length !== 0 ? (
                                <div>
                                  <a
                                    className="btn btn-lg btn-danger fw-bold text-white ms-2 "
                                    onClick={handleShowErrors}
                                  >
                                    Mostra errori
                                  </a>
                                </div>
                              ) : null}

                              {warnings?.length !== 0 ? (
                                <div>
                                  <a
                                    className="btn btn-lg btn-outline-danger fw-bold ms-2"
                                    onClick={handleShowWarnings}
                                    style={{ color: "hsl(0, 70%, 50%)" }}
                                  >
                                    Mostra warning
                                  </a>
                                </div>
                              ) : null}

                              <div>
                                <a
                                  className="btn btn-lg btn-primary text-white ms-3"
                                  onClick={downloadFile}
                                >
                                  <svg
                                    className="icon icon-sm ms-0 me-2"
                                    style={{ fill: "white" }}
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
                                    marginTop: "6rem",
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
                                        className="pt-1"
                                        ref={errorRef}
                                        style={{
                                          fontWeight: "700",
                                          fontSize: "0.8rem",
                                          marginTop: "1rem",
                                          marginBottom: "1.5rem",
                                          marginLeft: "1.6rem",
                                          margin: "1.4rem",
                                          width: "95%",
                                        }}
                                      >
                                        <span
                                          style={{
                                            display: "flex",
                                            paddingBottom: "0.8rem",
                                            borderBottom: "1px solid black",
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
                                                style={{
                                                  marginLeft: "1rem",
                                                  marginRight: "1.4rem",
                                                  paddingBottom: "0.1rem",
                                                  width: "95%",
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
                                    marginTop: "6rem",
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
                                        className="pt-1"
                                        ref={warningRef}
                                        style={{
                                          fontWeight: "700",
                                          fontSize: "0.8rem",
                                          marginTop: "1rem",
                                          marginBottom: "1.5rem",
                                          marginLeft: "1.6rem",
                                          margin: "1.4rem",
                                          width: "95%",
                                        }}
                                      >
                                        <span
                                          style={{
                                            display: "flex",
                                            paddingBottom: "0.8rem",
                                            borderBottom: "1px solid black",
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
                                                style={{
                                                  marginLeft: "1rem",
                                                  marginRight: "1.4rem",
                                                  paddingBottom: "0.1rem",
                                                  width: "95%",
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

                            <div className="col-12 d-flex justify-content-end">
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
                            </div>
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
      )}
      <EndSection type={1} />
    </div>
  );
};

Validatore.propTypes = {};
Validatore.defaultPropTypes = {};

export default Validatore;
