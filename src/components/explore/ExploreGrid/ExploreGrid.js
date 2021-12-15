import React from "react";
import { arrayOf, element, func, shape, string } from "prop-types";
import styles from "./ExploreGrid.module.css";
import { chunk } from "../../../services/arrayUtils";

const ExploreGrid = ({ cells, optionalClass }) => (
  <div data-testid="ExploreGrid" role="list">
    {chunk(cells, 3).map((c, index) => (
      <div
        key={"gridRow" + index}
        className="row pt-3 ml-4 pl-5 pr-3"
        role="row"
      >
        {c.map((cell) => (
          <div
            key={cell.key}
            className={"col-4 " + styles.clickable}
            onClick={cell.onClick}
            role="cell"
          >
            <div
              className={`p-2 mx-2 mt-3 mb-2 align-middle shadow-lg ${optionalClass}`}
            >
              <div>
                <div className="mx-auto w-75">{cell.icon}</div>
                <p className="font-weight-bolder clearfix m-3 text-lg-center">
                  {cell.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

ExploreGrid.propTypes = {
  cells: arrayOf(
    shape({
      key: string.isRequired,
      onClick: func,
      icon: element,
      label: string.isRequired,
    })
  ),
  optionalClass: string,
};

ExploreGrid.defaultProps = {};

export default ExploreGrid;
