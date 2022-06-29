import React, { useCallback } from "react";
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

  const categoryCells = categoryData.map((c) => {
    const onCategoryClick = useCallback(() => searchFor(c.key), [c.key]);
    return {
      key: c.key,
      icon: <CategoryIcon category={c} className="mt-5" />,
      label: c.label,
      onClick: onCategoryClick,
    };
  });

  return (
    <ExploreSection title="Esplora gli strumenti semantici per categoria">
      <div className="mt-4" role="list">
        {chunk(categoryCells, 3).map((row, rowIndex) => {
          return (
            <div
              key={"row-" + rowIndex}
              role="listitem"
              className="row ml-0 justify-content-around"
            >
              {row.map((item) => {
                return (
                  <div key={item.key} className={"d-flex mb-4"}>
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
