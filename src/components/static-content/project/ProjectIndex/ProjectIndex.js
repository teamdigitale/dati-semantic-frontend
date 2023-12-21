import React, { useState } from "react";
import "./ProjectIndex.css";
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
        <nav
          className="sidebar-wrapper it-line-right-side"
          data-testid="ProjectIndex"
          id="nav"
        >
          <div className="sidebar-linklist-wrapper">
            <div className="link-list-wrapper">
              <h3 className="fw-bold" id="pageindextitle">
                INDICE DELLA PAGINA
              </h3>
              <div className="ps-4 pe-4 mb-2">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="progressbar"
                    aria-hidden="true"
                    style={{ width: progress + "%" }}
                  ></div>
                </div>
              </div>
              <ul className="link-list" aria-labelledby="pageindextitle">
                <li>
                  <button
                    role="link"
                    data-testid="ProjectIndexBtn"
                    className="btn text-start"
                    onClick={() => selectSectionPage("Introduzione", 25)}
                    aria-current={
                      section === "Introduzione" ? "location" : "false"
                    }
                  >
                    <span className="text-primary-title">Introduzione</span>
                  </button>
                </li>
                <li>
                  <button
                    role="link"
                    data-testid="ProjectIndexBtn2"
                    className="btn text-start"
                    onClick={() => selectSectionPage("utilizzare", 50)}
                    aria-current={
                      section === "utilizzare" ? "location" : "false"
                    }
                  >
                    <span className="text-primary-title text-nowrap">
                      Come utilizzare il catalogo
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    role="link"
                    data-testid="ProjectIndexBtn3"
                    className="btn text-start"
                    onClick={() => selectSectionPage("attuatori", 75)}
                    aria-current={
                      section === "attuatori" ? "location" : "false"
                    }
                  >
                    <span className="text-primary-title">Enti attuatori</span>
                  </button>
                </li>
                <li>
                  <button
                    role="link"
                    data-testid="ProjectIndexBtn4"
                    className="btn text-start"
                    onClick={() => selectSectionPage("normativo", 100)}
                    aria-current={
                      section === "normativo" ? "location" : "false"
                    }
                  >
                    <span className="text-primary-title">Quadro normativo</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <div data-testid="ProjectIndexE"></div>
      )}
    </React.Fragment>
  );
};
ProjectIndex.propTypes = { changeSection: () => {} };
ProjectIndex.defaultPropTypes = {};
export default ProjectIndex;