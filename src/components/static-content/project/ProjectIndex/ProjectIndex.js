import React, { useState } from "react";
const ProjectIndex = (props) => {
  const [progress, setProgress] = useState(25);
  const [section, setSection] = useState("Introduzione");
  const selectSectionPage = (idSection, progrssBar) => {
    idSection && idSection !== null && idSection !== ""
      ? setSection(idSection)
      : null;
    progrssBar && progrssBar !== null && progrssBar !== ""
      ? setProgress(Number(progrssBar))
      : null;
    idSection && idSection !== null && idSection !== ""
      ? props.changeSection(idSection?.toUpperCase())
      : null;
  };
  return (
    <React.Fragment>
      {progress && section ? (
        <div
          className="sidebar-wrapper it-line-right-side sticky-top"
          data-testid="ProjectIndex"
        >
          <div className="sidebar-linklist-wrapper">
            <div className="link-list-wrapper">
              <ul className="link-list">
                <li>
                  <h3>INDICE DELLA PAGINA</h3>
                </li>
                <li>
                  <div className="container pl-4 pr-4 mb-2">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="10"
                        style={{ width: progress + "%" }}
                      ></div>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    data-testid="ProjectIndexBtn"
                    className="btn lineUnder"
                    onClick={() => selectSectionPage("Introduzione", 25)}
                  >
                    <span
                      className={
                        "text-primary-title " +
                        (section && section === "Introduzione"
                          ? "active"
                          : "deactive")
                      }
                    >
                      Introduzione
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    data-testid="ProjectIndexBtn2"
                    className="btn lineUnder"
                    onClick={() => selectSectionPage("utilizzare", 50)}
                  >
                    <span
                      className={
                        "text-primary-title text-left  py-2" +
                        (section && section === "utilizzare"
                          ? "active"
                          : "deactive")
                      }
                    >
                      Come utilizzare il catalogo
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    data-testid="ProjectIndexBtn3"
                    className="btn lineUnder"
                    onClick={() => selectSectionPage("attuatori", 75)}
                  >
                    <span
                      className={
                        "text-primary-title " +
                        (section && section === "attuatori"
                          ? "active"
                          : "deactive")
                      }
                    >
                      Enti attuatori
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    data-testid="ProjectIndexBtn4"
                    className="btn lineUnder"
                    onClick={() => selectSectionPage("normativo", 100)}
                  >
                    <span
                      className={
                        "text-primary-title " +
                        (section && section === "normativo"
                          ? "active"
                          : "deactive")
                      }
                    >
                      Quadro normativo
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div data-testid="ProjectIndexE"></div>
      )}
    </React.Fragment>
  );
};
ProjectIndex.propTypes = { changeSection: () => {} };
ProjectIndex.defaultPropTypes = {};
export default ProjectIndex;
