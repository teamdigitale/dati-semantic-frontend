import React, { useCallback } from "react";
import ExploreSection from "../ExploreSection/ExploreSection";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import "./ExploreByText.css";
import PatternFilter from "../../search/PatternFilter/PatternFilter";

const ExploreByText = () => {
  const navigate = useNavigate();

  const doSubmit = useCallback((value) => {
    navigate(routes.search({ pattern: value }));
  }, []);

  const onPatternChange = useCallback((value) => doSubmit(value), []);

  return (
    <ExploreSection title="Cerca nel catalogo per parola chiave">
      <div className="container-fluid schemaPadding">
        <PatternFilter onPatternUpdate={onPatternChange} isHomeSection />
      </div>
    </ExploreSection>
  );
};

ExploreByText.propTypes = {};

ExploreByText.defaultProps = {};

export default ExploreByText;
