/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AssetTypeChip from "../../../search/AssetTypeChip/AssetTypeChip";
import styles from "./AssetDetailsSummary.module.css";
import { getCategories } from "../../../../assets/data/categories";
import PropTypes, { oneOf } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../../services/dataConstants";
import ModifiedOnOrVersion from "../../../common/ModifiedOnOrVersion/ModifiedOnOrVersion";

const AssetDetailsSummary = (props) => {
  const categories = getCategories().filter(
    (c) => props.themes.indexOf(c.uri) > -1
  );
  const [columnClass, setColumnClass] = useState("col-10");
  const [column2Class, setColumn2Class] = useState("col-2");

  const updateColumnClasses = () => {
    if (window.innerWidth <= 680) {
      setColumnClass("col-7");
      setColumn2Class("col-5");
    } else {
      setColumnClass("col-10");
      setColumn2Class("col-2");
    }
  };

  useEffect(() => {
    updateColumnClasses();
    window.addEventListener("resize", updateColumnClasses);
    return () => {
      window.removeEventListener("resize", updateColumnClasses);
    };
  }, []);
  return (
    <div data-testid="asset-details-summary">
      <div className="row pt-3 pb-3">
        <div className="col-6 text-uppercase font-weight-bold">
          <div className="category-top pt-1">
            {categories.map((c) => (
              <div key={c.key} className="category">
                {c.label}
              </div>
            ))}
          </div>
        </div>
        <div className="col-6 text-right">
          <AssetTypeChip type={props.type} bgColor={"blue"} />
        </div>
      </div>
      <div className="row pt-3 pb-3">
        <div className="col-12">
          <h1 className="h2">{props.title}</h1>
        </div>
      </div>
      <div className={"row " + styles.detailsCard}>
        <div className="col-12">
          <div className="card-wrapper card-space">
            <div className="card card-bg my-2 pl-5 pr-5 pt-5">
              <div className={"row " + styles.description}>
                <div
                  className={`${columnClass} ${styles.scrollable}`}
                  tabIndex="0"
                >
                  <div className={"pr-3 pt-1" + styles.descriptionText}>
                    {props.description}
                  </div>
                </div>
                <div className={`${column2Class} text-right`}>
                  <ModifiedOnOrVersion
                    type={props.type}
                    modifiedOn={props.modifiedOn}
                    versionInfo={props.versionInfo}
                    size={"large"}
                    status={props.status}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AssetDetailsSummary.propTypes = {
  themes: PropTypes.array.isRequired,
  type: oneOf(SUPPORTED_ASSET_TYPES).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modifiedOn: PropTypes.string,
  versionInfo: PropTypes.string,
  status: PropTypes.string,
};

export default AssetDetailsSummary;
