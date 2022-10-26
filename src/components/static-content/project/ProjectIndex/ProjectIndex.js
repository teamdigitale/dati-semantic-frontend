import React from "react";
const ProjectIndex = () => {
  const selectSectionPage = (idSection, event) => {
    event.preventDefault();
    console.log(idSection);
  };
  return (
    <React.Fragment>
      <div className="sidebar-wrapper it-line-right-side">
        <div className="sidebar-linklist-wrapper">
          <div className="link-list-wrapper">
            <ul className="link-list">
              <li>
                <h3>Il progetto</h3>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={($event) => selectSectionPage("ciao", $event)}
                >
                  <span className="text-primary-title">Introduzione</span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={($event) => selectSectionPage("e", $event)}
                >
                  <span className="text-primary-title">
                    Come utilizzare il catalogo
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={($event) => selectSectionPage("e", $event)}
                >
                  <span className="text-primary-title">Enti attuatori</span>
                </button>
              </li>
              <li>
                <button
                  className="btn lineUnder"
                  onClick={($event) => selectSectionPage("papà", $event)}
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

export default ProjectIndex;
