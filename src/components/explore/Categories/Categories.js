import React from "react";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import styles from "./Categories.module.css";
import { chunk } from "../../../services/arrayUtils";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";

const categoryData = getCategories();

const Categories = () => {
  const navigate = useNavigate();

  const searchFor = (key) => {
    navigate(routes.search({ theme: key }));
  };

  return (
    <div data-testid="Categories">
      <div className="row p-3">
        <h2>Esplora gli strumenti semantici per categoria</h2>
      </div>
      {chunk(categoryData, 3).map((c, index) => (
        <div key={"categoryRow" + index} className="row" role="list">
          {c.map((category) => (
            <div
              key={category.key}
              className={styles.outerSquare + " col-4"}
              onClick={() => searchFor(category.key)}
            >
              <div className="p-2 m-1 align-middle shadow-lg" role="listitem">
                <div className={styles.innerSquare}>
                  <div className="mx-auto w-75">
                    <CategoryIcon
                      category={category}
                      size="large"
                      className="large-centered"
                    />
                  </div>
                  <p className="font-weight-bolder clearfix m-3 text-lg-center">
                    {category.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
