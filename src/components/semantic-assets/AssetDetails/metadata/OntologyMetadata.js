import CommonMetadataGroup, { getSummaries } from "./CommonMetadataGroup";
import getDetailsPropTypes from "../DetailsPropTypes";
import MetadataRow from "./MetadataRow";
import Anchor from "../../../common/Anchor/Anchor";
import style from "./MetadataRow.module.css";
const OntologyMetadata = ({ details }) => {
  const getSummaryFormIri = (iri) => {
    if (iri && iri != null) {
      const iris = iri.split("/");
      return iris[iris.length - 1];
    }
  };
  return (
    <div data-testid="ontology-metadata">
      <CommonMetadataGroup details={details} />
      {details.keyClasses?.length > 0 && (
        <div>
          <div className="row">
            <div className="col-3">
              <div className="pr-3">
                <h3 className={style.propertyName}>Concetti principali</h3>
              </div>
            </div>
            <div className="col-8">
              {details.keyClasses && details.keyClasses.length > 0 ? (
                details.keyClasses.map((keyClass, index) => {
                  {
                    return (
                      <span key={keyClass.iri} className={style.propertyValue}>
                        {index > 0 && ", "}
                        <Anchor
                          href={keyClass.iri}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {keyClass.summary !== null && keyClass.iri
                            ? keyClass.summary
                            : getSummaryFormIri(keyClass.iri)}
                        </Anchor>
                      </span>
                    );
                  }
                })
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <hr />
        </div>
      )}
      {console.log(details.keyClasses)}
      {details.prefix && (
        <MetadataRow name={"Prefisso"} value={details.prefix} />
      )}
      {details.projects?.length > 0 && (
        <MetadataRow
          name={"Progetti che usano l’ontologia"}
          value={getSummaries(details.projects)}
        />
      )}
    </div>
  );
};

OntologyMetadata.propTypes = { ...getDetailsPropTypes() };

export default OntologyMetadata;
