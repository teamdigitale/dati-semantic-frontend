import { number } from "prop-types";
import React from "react";
import { DIGITALE_DOCS_URL, GITHUB_SCHEMA } from "../../../services/routes";
import sprite from "../../../assets/images/sprite.svg";
export const EndSection = (props) => {
  // const buttonStyles = {
  //   display: "inline-block",
  //   padding: "0.5rem 1rem",
  //   border: "1px solid white",
  //   color: "white",
  //   textDecoration: "none",
  //   fontWeight: "bold",
  //   background: "transparent",
  // };
  return (
    <React.Fragment>
      <div className="endSectionBkg">
        <div className="container-fluid schemaPadding">
          {props.type && props.type == 1 ? (
            <div className="mx-0 py-5" data-testid="endSection_1">
              <div className="col-xl-8">
                <div className="mx-0">
                  <h2 className="txtWhite">
                    Non hai trovato quello che cercavi?
                    <br /> Contribuisci al catalogo
                  </h2>
                </div>

                <div className="mx-0">
                  <div className="col-lg-12">
                    <p className="txtWhite">
                      Scopri come contribuire al catalogo con un contenuto
                      semantico,
                      <br /> leggi la guida su docs italia
                    </p>
                  </div>
                </div>
                <div className="col-xl-7 mt-2 mt-lg-0 ms-0 d-flex justify-content-start">
                  <a
                    className="btn btn-primary endSection link fw-bold"
                    href={DIGITALE_DOCS_URL}
                    role="button"
                    aria-label="scopri come contribuire"
                    title="vai alla pagina di docs italia"
                  >
                    Scopri come contribuire
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="row mx-0 py-5" data-testid="endSection_2">
              <div className="">
                <div className="row mx-0">
                  <h2 className="txtWhite">
                    Schema è un catalogo in
                    <br /> continua evoluzione
                  </h2>
                </div>

                <div className="row mx-0">
                  <div className="col-xl-12">
                    <p className="txtWhite">
                      Se trovi errori o bug apri una issue su GitHub.
                      {/* <br /> Se vuoi contribuire al catalogo con un contenuto{" "}
                      leggi la guida su docs italia                    */}
                    </p>
                  </div>
                </div>
                <div className="mx-0 ms-2 mt-2 d-flex">
                  <div className="">
                    <a
                      className="btn btn-primary endSection link fw-bold d-flex"
                      href={GITHUB_SCHEMA}
                      role="button"
                      aria-label="vai su GitHub di schema"
                      title="vai su GitHub di schema"
                    >
                      Vai su GitHub
                      <div className="">
                        <svg className="icon icon-sm icon-primary ms-2">
                          <use href={sprite + "#it-github"}></use>
                        </svg>{" "}
                      </div>
                    </a>
                  </div>
                  {/* <div className="col-xl-7 ms-5 mt-lg-0 d-flex justify-content-start">
                    <a
                      className="btn ms-0 ms-xl-2 mt-xl-0"
                      href={DIGITALE_DOCS_URL}
                      role="button"
                      aria-label="scopri come contribuire"
                      title="vai alla pagina di docs italia"
                      style={buttonStyles}
                    >
                      Scopri come contribuire
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
EndSection.propTypes = {
  type: number.isRequired
};
EndSection.defaultProps = {};
export default EndSection;
