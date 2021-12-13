import React from "react";
import FaqHeader from "../FaqHeader/FaqHeader";
import FaqBody from "../FaqBody/FaqBody";

const FaqPage = () => {
  return (
    <div data-testid="FaqPage">
      <FaqHeader />
      <FaqBody />
    </div>
  );
};

FaqPage.propTypes = {};

FaqPage.defaultProps = {};

export default FaqPage;
