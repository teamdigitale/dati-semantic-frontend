import React from "react";
import { getCategories } from "../../assets/data/categories";
import "./Categories.css";

const categoryData = getCategories();

const Categories = () => (
  <div data-testid="Categories">
    <div className="row p-3">
      <h2>naviga i dati per categoria tematica</h2>
    </div>
    <div className="row" role="list">
      {categoryData.map((category) => (
        <div key={category.key} className="col-3">
          <div
            className="p-2 m-1 align-middle border shadow-sm"
            role="listitem"
          >
            <p className="font-weight-bolder clearfix">
              {" "}
              <img
                className={`${category.key.toLowerCase()}-category-icon category-icon float-left`}
                title={category.label}
                alt={category.key}
              />
              {category.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
