import React from "react";
import { getCategories } from "../../assets/data/categories";
import CategoryIcon from "../common/CategoryIcon/CategoryIcon";
import { Link } from "react-router-dom";

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
              <Link to={"/search?theme=" + category.key}>
                <CategoryIcon
                  category={category}
                  size="large"
                  className="float-left"
                />
              </Link>
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
