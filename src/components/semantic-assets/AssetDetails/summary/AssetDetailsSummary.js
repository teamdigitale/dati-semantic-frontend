import AssetTypeChip from "../../../search/AssetTypeChip/AssetTypeChip";
import styles from "./AssetDetailsSummary.module.css";
import { getCategories } from "../../../../assets/data/categories";
import PropTypes, { oneOf } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../../services/dataConstants";
import { asItalianDate } from "../../../../services/stringUtils";

const AssetDetailsSummary = (props) => {
  const categories = getCategories().filter(
    (c) => props.themes.indexOf(c.uri) > -1
  );
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
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className={"row " + styles.detailsCard}>
        <div className="col-12">
          <div className="card-wrapper card-space">
            <div className="card card-bg my-2 pl-5 pr-5 pt-5">
              <div className={"row " + styles.description}>
                <div className={"col-10 " + styles.scrollable}>
                  <div className={"pr-3 pt-1" + styles.descriptionText}>
                    {props.description}
                  </div>
                </div>
                <div className="col-2 text-right">
                  <span>
                    Ultima modifica
                    <br />
                    <strong>
                      {props.modifiedOn
                        ? asItalianDate(props.modifiedOn)
                        : "n/a"}
                    </strong>
                  </span>
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
};

export default AssetDetailsSummary;
