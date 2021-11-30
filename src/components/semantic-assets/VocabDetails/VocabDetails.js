import React from "react";
import { arrayOf, oneOf, shape, string } from "prop-types";
import styles from "./VocabDetails.module.css";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import {
  getAssetLabel,
  SUPPORTED_ASSET_TYPES,
} from "../../../services/dataConstants";
import { getFrequencyLabel } from "../../../assets/data/accrualPeriodicity";

const categories = getCategories();

const displayTheme = (theme) => {
  let category = categories.find((c) => c.uri === theme);
  return (
    <div key={theme} className="row p-2">
      <div className="col-12">
        <CategoryIcon category={category} className="float-left" size="small" />
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

const displayNodeSummaries = (title, nodes) => {
  if (!nodes) {
    return;
  }

  return (
    <div className="row p-3">
      <div className="col-md-12">
        <div className={styles.propertyLabel}>{title}</div>
        {nodes.map((node) => (
          <div key={node.iri}>
            <a href={node.iri}>{node.iri}</a>
            <div className={styles.propertyValue}>{node.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderItems = (items, showAsLinks) => {
  if (!items || items.length === 0) {
    return;
  }

  return items.map((item) => (
    <div key={item}>{showAsLinks ? <a href={item}>{item}</a> : item}</div>
  ));
};

const notEmpty = (items) => {
  return items && items.length > 0;
};

const VocabDetails = ({ details }) => (
  <div className="container" data-testid="VocabDetails">
    <div className="row p-3">
      <div className="col-12">
        <h2>{details.title}</h2>
        <h3>{getAssetLabel(details.type)}</h3>
      </div>
    </div>
    <div className="row p-3">
      <div className="col-12">
        <p>{details.description}</p>
      </div>
    </div>
    {displayThemes(details.themes)}
    {displayNodeSummaries("Titolare del dataset", [details.rightsHolder])}
    <div className="row p-3">
      <div className="col-md-12">
        <div className={styles.propertyLabel}>Identificativo</div>
        <a href={details.assetIri}>{details.assetIri}</a>
      </div>
    </div>
    <div className="row p-3">
      <div className="col-md-12">
        <div className={styles.propertyLabel}>Data di ultima modifica</div>
        <div className={styles.propertyValue}>{details.modifiedOn}</div>
      </div>
    </div>
    <div className="row p-3">
      <div className="col-md-12">
        <div className={styles.propertyLabel}>Periodicità di maturazione</div>
        <div className={styles.propertyValue}>{details.accrualPeriodicity}</div>
        <div className={styles.propertyValue}>
          {getFrequencyLabel(details.accrualPeriodicity)}
        </div>
      </div>
    </div>
    <div className="row p-3">
      <div className="col-md-12">
        <div className={styles.propertyLabel}>Distribuzione</div>
        {renderItems(details.distributionUrls, true)}
      </div>
    </div>

    {notEmpty(details.subjects) && (
      <div className="row p-3">
        <div className="col-md-12">
          <div className={styles.propertyLabel}>Sottotema</div>
          {renderItems(details.subjects, true)}
        </div>
      </div>
    )}

    {details.contactPoint &&
      displayNodeSummaries("Punto di contatto", [details.contactPoint])}

    {notEmpty(details.publishers) &&
      displayNodeSummaries("Editrice", details.publishers)}

    {notEmpty(details.creators) &&
      displayNodeSummaries("Creatrice", details.creators)}

    {details.versionInfo && (
      <div className="row p-3">
        <div className="col-md-12">
          <div className={styles.propertyLabel}>
            Informazioni sulla versione
          </div>
          <div className={styles.propertyValue}>{details.versionInfo}</div>
        </div>
      </div>
    )}

    {details.issuedOn && (
      <div className="row p-3">
        <div className="col-md-12">
          <div className={styles.propertyLabel}>Emesso il</div>
          <div className={styles.propertyValue}>{details.issuedOn}</div>
        </div>
      </div>
    )}

    {notEmpty(details.languages) && (
      <div className="row p-3">
        <div className="col-md-12">
          <div className={styles.propertyLabel}>Le lingue</div>
          {renderItems(details.languages, true)}
        </div>
      </div>
    )}

    {notEmpty(details.temporal) && (
      <div className="row p-3">
        <div className="col-md-12">
          <div className={styles.propertyLabel}>Temporale</div>
          {renderItems(details.temporal)}
        </div>
      </div>
    )}

    {notEmpty(details.conformsTo) &&
      displayNodeSummaries("Conforme a", details.conformsTo)}

    <div className="row p-3">
      <div className="col-md-12">
        <div className={styles.propertyLabel}>Concetti importanti</div>
        <div className={styles.propertyValue}>{details.keyConcept}</div>
      </div>
    </div>

    <div className="row p-3">
      <div className="col-md-12">
        <div className={styles.propertyLabel}>URL dell&apos;endpoint</div>
        <a href={details.endpointUrl}>{details.endpointUrl}</a>
      </div>
    </div>
  </div>
);

VocabDetails.propTypes = {
  details: shape({
    type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
    assetIri: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    modifiedOn: string.isRequired,
    themes: arrayOf(string).isRequired,
    rightsHolder: shape({
      iri: string.isRequired,
      summary: string.isRequired,
    }).isRequired,
    accrualPeriodicity: string.isRequired,
    distributionUrls: arrayOf(string).isRequired,
    subjects: arrayOf(string),
    contactPoint: shape({
      iri: string.isRequired,
      summary: string.isRequired,
    }),
    publishers: arrayOf(
      shape({
        iri: string.isRequired,
        summary: string,
      })
    ),
    creators: arrayOf(
      shape({
        iri: string.isRequired,
        summary: string,
      })
    ),
    versionInfo: string,
    issuedOn: string,
    languages: arrayOf(string),
    temporal: arrayOf(string),
    conformsTo: arrayOf(
      shape({
        iri: string.isRequired,
        summary: string,
      })
    ),
    keyConcept: string,
    endpointUrl: string,
  }).isRequired,
};

VocabDetails.defaultProps = {};

export default VocabDetails;
