import React from "react";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import ExploreSection from "../ExploreSection/ExploreSection";
import { chunk } from "../../../services/arrayUtils";
import styles from "./ExploreByCategory.module.css";

const categoryData = getCategories();

const ExploreByCategory = () => {
  const navigate = useNavigate();

  const searchFor = (key) => {
    navigate(routes.search({ themes: [key] }));
  };

  const categoryCells = categoryData.map((c) => ({
    key: c.key,
    icon: <CategoryIcon category={c} className="mt-5" />,
    label: c.label,
    onClick: () => searchFor(c.key),
  }));

  return (
    <ExploreSection title="Esplora gli strumenti semantici per categoria">
      <div className="ml-4 pl-5 mt-4" role="list">
        {chunk(categoryCells, 3).map((row, rowIndex) => {
          return (
            <div key={"row-" + rowIndex} className="row ml-0 mb-4 pb-4">
              {row.map((item) => {
                return (
                  <div key={item.key} className={"col-4"}>
                    <div
                      className={"shadow-lg category-tile " + styles.item}
                      onClick={item.onClick}
                      data-testid={item.key}
                    >
                      <div
                        className={"pt-4 " + styles.itemIcon}
                        alt={item.label}
                      >
                        <CategoryIcon category={item} />
                      </div>
                      <div
                        className={
                          "text-center font-weight-bold px-5 pt-5 " +
                          styles.itemLabel
                        }
                      >
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </ExploreSection>
  );
};

ExploreByCategory.propTypes = {};

ExploreByCategory.defaultProps = {};

export default ExploreByCategory;
