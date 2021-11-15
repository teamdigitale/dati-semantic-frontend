import React from "react";
import { shape, string } from "prop-types";
import styles from "./VocabDetails.module.css";
import { getCategories } from "../../../assets/data/categories";

const categories = getCategories();

const displayTheme = (theme) => {
  let category = categories.find((c) => c.uri === theme);
  return (
    <div key={theme} className="row p-2">
      {/*<div className="col-md-4">{category.hoverImg}</div>*/}
      {/*<div className="col-md-4">{category.label}</div>*/}
      <div className="col-12">
        <img
          className={`${category.key.toLowerCase()}-category-icon category-icon-small float-left`}
          title={category.label}
          alt={category.key}
        />
        {category.label}
        <br />
        <a href={category.uri}>{category.uri}</a>
      </div>
    </div>
  );
};

const displayThemes = (themes) => {
  if (!themes) {
    return;
  }

  return (
    <>
      <div className="row p-3">
        <div className="col-12">
          <h4>Categorie</h4>
        </div>
      </div>
      {themes.map((t) => displayTheme(t))}
    </>
  );
};

const VocabDetails = ({ details }) => (
  <div className="container" data-testid="VocabDetails">
    <div className="row p-3">
      <div className="col-12">
        <h2>{details.title}</h2>
        <h3>Vocabolario di Controllo</h3>
      </div>
    </div>
    <div className="row p-3">
      <div className="col-md-4">
        <div className={styles.propertyLabel}>Titolare del dataset</div>
        <div className={styles.propertyValue}>{details.rightsHolder}</div>
      </div>
      <div className="col-md-4">
        <div className={styles.propertyLabel}>Identificativo</div>
        <div className={styles.propertyValue}>{details.id}</div>
      </div>
      <div className="col-md-4">
        <div className={styles.propertyLabel}>Data di ultima modifica</div>
        <div className={styles.propertyValue}>{details.modified}</div>
      </div>
    </div>
    {displayThemes(details.themes)}
  </div>
);

VocabDetails.propTypes = {
  details: shape({
    title: string.isRequired,
  }).isRequired,
};

VocabDetails.defaultProps = {};

export default VocabDetails;
