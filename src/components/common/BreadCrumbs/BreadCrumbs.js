import React from "react";

export const BreadCrumbs = (arrayBread) => {
  return (
    <React.Fragment>
      <nav
        className="breadcrumb-container"
        aria-label="Percorso di navigazione"
      >
        <ol className="breadcrumb">
          {arrayBread.arrayBread?.map((bread, i) => {
            return bread.link != "" && bread.link != "back" ? (
              <li className="breadcrumb-item" key={bread.id + "key" + i}>
                <a className="link" href={bread.link} title={bread.label}>
                  {bread.label}
                </a>
                <span className="separator">/</span>
              </li>
            ) : bread.link == "back" ? (
              <li
                className="breadcrumb-item"
                key={bread.id + "keyBack" + i}
                onClick={() => history.back()}
              >
                <a className="link" href="#" title={bread.label}>
                  {bread.label}
                </a>
                <span className="separator">/</span>
              </li>
            ) : (
              <li
                className="breadcrumb-item active"
                aria-current="page"
                key={bread.id + "Skey" + i}
                title={bread.label}
              >
                <strong>{bread.label}</strong>
              </li>
            );
          })}
        </ol>
      </nav>
    </React.Fragment>
  );
};

export default BreadCrumbs;
