import { routes } from "../../../services/routes";
import React from "react";
import "./Contribute.css";

const Contribute = () => {
  return (
    <div data-testid="Contribute" className="contribute section section-muted">
      <div className="container">
        <div className="header">
          <div className="subtext">CONTRIBUISCI</div>
          <div className="main-text">Scopri come contribuire</div>
          <a
            className="btn btn-primary w-20 p-2 contribute-btn"
            href={routes.explore()}
          >
            Maggiori informazioni
          </a>
        </div>
      </div>
    </div>
  );
};

Contribute.propTypes = {};
Contribute.defaultPropTypes = {};
export default Contribute;
