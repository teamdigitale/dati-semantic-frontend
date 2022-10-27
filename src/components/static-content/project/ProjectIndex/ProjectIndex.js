import React, { useState } from "react";
const ProjectIndex = (props) => {
  const [progress, setProgress] = useState(25);
  const [section, setSection] = useState("Introduzione");
  const selectSectionPage = (idSection, progrssBar) => {
    setSection(idSection);
    setProgress(progrssBar);
    props.changeSection(idSection.toUpperCase());
  };
  return (
    <React.Fragment>
      <div
        className="sidebar-wrapper it-line-right-side sticky-top"
        data-testid="ProjectIndex"
      >
        <div className="sidebar-linklist-wrapper">
          <div className="link-list-wrapper">
            <div className="container pl-4 pr-4 mb-4">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progress + "%" }}
                ></div>
              </div>
            </div>

            <ul className="link-list">
              <li>
                <h3>INDICE DELLA PAGINA</h3>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={() => selectSectionPage("Introduzione", 25)}
                >
                  <span
                    className={
                      "text-primary-title " +
                      (section == "Introduzione" ? "active" : "deactive")
                    }
                  >
                    Introduzione
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={() => selectSectionPage("utilizzare", 50)}
                >
                  <span
                    className={
                      "text-primary-title " +
                      (section == "utilizzare" ? "active" : "deactive")
                    }
                  >
                    Come utilizzare il catalogo
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={() => selectSectionPage("attuatori", 75)}
                >
                  <span
                    className={
                      "text-primary-title " +
                      (section == "attuatori" ? "active" : "deactive")
                    }
                  >
                    Enti attuatori
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={() => selectSectionPage("normativo", 100)}
                >
                  <span
                    className={
                      "text-primary-title " +
                      (section == "normativo" ? "active" : "deactive")
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
    </React.Fragment>
  );
};
ProjectIndex.propTypes = { changeSection: () => {} };
ProjectIndex.defaultPropTypes = {};
export default ProjectIndex;
