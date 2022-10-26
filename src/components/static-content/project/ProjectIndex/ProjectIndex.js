import React, { useState } from "react";
const ProjectIndex = (props) => {
  const [progress, setProgress] = useState(25);
  const selectSectionPage = (idSection, progrssBar) => {
    setProgress(progrssBar);
    props.changeSection(idSection.toUpperCase());
  };
  return (
    <React.Fragment>
      <div className="sidebar-wrapper it-line-right-side sticky-top">
        <div className="sidebar-linklist-wrapper">
          <div className="link-list-wrapper">
            <div className="container pr-4 mb-4">
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
                  <span className="text-primary-title">Introduzione</span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={() => selectSectionPage("utilizzare", 50)}
                >
                  <span className="text-primary-title">
                    Come utilizzare il catalogo
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={() => selectSectionPage("attuatori", 75)}
                >
                  <span className="text-primary-title">Enti attuatori</span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={() => selectSectionPage("normativo", 100)}
                >
                  <span className="text-primary-title">Quadro normativo</span>
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
