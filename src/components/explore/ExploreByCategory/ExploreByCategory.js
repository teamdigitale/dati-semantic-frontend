import React, { useCallback } from "react";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import ExploreSection from "../ExploreSection/ExploreSection";
import { chunk } from "../../../services/arrayUtils";
/* import styles from "./ExploreByCategory.module.css"; */

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
      <div className="mt-4 container-fluid px-5 pb-5" role="list">
        <div className="row mx-0">
          <div className="col-xl-12 d-flex justify-content-start">
            {chunk(categoryCells, categoryCells.length).map((row, rowIndex) => {
              return (
                <div
                  role="listitem"
                  className="row mx-0 px-3"
                  key={"row" + rowIndex}
                >
                  {row.map((item) => {
                    return (
                      <div
                        className="col-xl-4 col-lg-6 px-2 my-4 pointer"
                        key={item.key}
                        onClick={item.onClick}
                        data-testid={item.key}
                      >
                        <a href="#" className="searchForCategoryLink">
                          <div className="card card-teaser rounded shadow">
                            <div className="card-body">
                              <div className="row mx-0 px-1">
                                <div className="col-lg-4 d-flex justify-content-lg-start justify-content-center align-items-end">
                                  <CategoryIcon category={item} />
                                </div>
                                <div className="col-lg-8 d-flex justify-content-lg-start justify-content-center align-items-center">
                                  <p className="h5">
                                    <strong className="text-center">
                                      {item.label}
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ExploreSection>
  );
};

ExploreByCategory.propTypes = {};

ExploreByCategory.defaultProps = {};

export default ExploreByCategory;
