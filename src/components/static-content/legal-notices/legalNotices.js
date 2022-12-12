import React, { useEffect } from "react";
import getAlertMessage from "../../../services/alertService";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import ContentParagraph from "../../common/ContentParagraph/ContentParagraph";
import "../privacy-policy/PrivacyPolicyPage/PrivacyPolicyPage.css";
export const LeaglNotices = () => {
  useEffect(() => {
    document.title = "Note Legali - Catalogo Nazionale Dati";
  });
  const alertMess = getAlertMessage();
  return (
    <div data-testid="legalNotices">
      <div className="container-fluid px-xl-4 px-lg-2 px-0">
        <div className="row mx-0 px-0">
          <div className="col-lg-12 pl-5">
            <BreadCrumbs arrayBread={BREADCRUMBS.LEGALNOTICES} />
          </div>
        </div>
      </div>

      {alertMess && alertMess != "" ? (
        <div className={"mantainenceAllertWhite"}>
          <div className="container-fluid schemaPadding py-3">
            <div className="alert alert-warning m-0" role="alert">
              <strong>Avviso di manutenzione</strong> - {alertMess}
            </div>
          </div>
        </div>
      ) : null}
      <div data-testid="legalNoticesBody" className="policy-body">
        <div className="container-fluid schemaPadding">
          <div className="col-lg-6 pt-5">
            <div className="text-center text-sm-left pb-4">
              <h1>Note Legali</h1>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <ContentParagraph title="Test">
              <p>test paragrafo 1</p>
            </ContentParagraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaglNotices;
