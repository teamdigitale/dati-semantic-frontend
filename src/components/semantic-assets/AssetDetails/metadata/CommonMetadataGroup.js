/* eslint-disable prettier/prettier */
import AssetIriRow from "./AssetIriRow";
import MetadataRow from "./MetadataRow";
import { getFrequencyLabel } from "../../../../assets/data/accrualPeriodicity";
import React from "react";
import { getLanguageLabel } from "../../../../assets/data/languages";
import getDetailsPropTypes from "../DetailsPropTypes";
import { asItalianDate } from "../../../../services/stringUtils";

const stripMailToPrefix = (maybeMailTo) => {
  return maybeMailTo.replace("mailto:", "");
};

const getLanguages = (languages) => {
  return languages.map((l) => getLanguageLabel(l)).join(", ");
};

export const getSummaries = (list) => {
  return list
    .map((i) => {
      if (i.summary === null) {
        const iris = i.iri.split("/");
        return iris[iris.length - 1];
      } else {
        return i.summary;
      }
    })
    .join(", ");
};

const CommonMetadataGroup = (props) => {
  const details = props.details;
  return (
    <div data-testid="common-metadata">
      <AssetIriRow assetIri={details.assetIri} type={details.type} />
      <hr />
      <MetadataRow name="Titolare" value={details.rightsHolder.summary}  iconLink={details.rightsHolder.iri}/>
      {details.issuedOn && (
        <MetadataRow
          name={"Data creazione"}
          value={asItalianDate(details.issuedOn)}
        />
      )}
      {details.modifiedOn && (
        <MetadataRow
          name={"Ultima Modifica"}
          value={asItalianDate(details.modifiedOn)}
        />
      )}
      {details.versionInfo && (
        <MetadataRow name={"Note Versione"} value={details.versionInfo} />
      )}
      {details.accrualPeriodicity && (
        <MetadataRow
          name={"Frequenza di aggiornamento"}
          value={getFrequencyLabel(details.accrualPeriodicity)}
        />
      )}
      {details.contactPoint?.summary && (
        <MetadataRow
          name={"Contatti"}
          value={stripMailToPrefix(details.contactPoint.summary)}
        />
      )}
      {details.publishers && (
        <MetadataRow
          name={"Editore"}
          value={getSummaries(details.publishers)}
        />
      )}
      {details.creators && (
        <MetadataRow name={"Creatore"} value={getSummaries(details.creators)} />
      )}
      {details.languages?.length > 0 && (
        <MetadataRow name={"Lingua"} value={getLanguages(details.languages)} />
      )}
      {details["conformsTo"] && getSummaries(details["conformsTo"]) && (
        <MetadataRow
          name={"Conforme a"}
          value={getSummaries(details["conformsTo"])}
        />
      )}
    </div>
  );
};

CommonMetadataGroup.propTypes = { ...getDetailsPropTypes() };

export default CommonMetadataGroup;
