import React from "react";
import FaqHeader from "../FaqHeader/FaqHeader";
import FaqBody from "../FaqBody/FaqBody";
import Contribute from "../../../common/Contribute/Contribute";

const FaqPage = () => {
  return (
    <div data-testid="FaqPage">
      <FaqHeader />
      <FaqBody />
      <Contribute />
    </div>
  );
};

FaqPage.propTypes = {};

FaqPage.defaultProps = {};

export default FaqPage;
