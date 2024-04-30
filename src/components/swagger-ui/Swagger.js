/* eslint-disable prettier/prettier */
import SwaggerUI from "swagger-ui-react";
import { baseUrl } from "../../services/fetchUtils";
import "swagger-ui-react/swagger-ui.css";
import ContentParagraph from "../common/ContentParagraph/ContentParagraph";
import Anchor from "../common/Anchor/Anchor";
import { routes } from "../../services/routes";
import { AT_VOCABULARY } from "../../services/dataConstants";
import React, { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import Callout from "../common/Callout/Callout";
import { getSemanticAssetByUri } from "../../services/vocabService";
import getAlertMessage from "../../services/alertService";

const alertMess = getAlertMessage();
const genericVocabExplanation = () => (
  <p>
    Due endpoint accessibili attraverso il metodo <code>GET</code> sono dedicati
    al contenuto dei Vocabolari Controllati. <br />I path di questi due endpoint
    che contengono due parametri, <code>agency_id</code> e{" "}
    <code>key_concept</code>: essi rappresentano rispettivamente
    l&apos;organizzazione titolare del dato e un identificativo del vocabolario
    stesso.
    <br />
    Per trovare questi due parametri, effettuare una{" "}
    <Anchor href={routes.search({ types: [AT_VOCABULARY] })}>
      ricerca tra i Vocabolari Controllati
    </Anchor>
    ; la pagina di dettaglio di ogni vocabolario riporta un bottone denominato
    &quot;API&quot; che riporta a queste specifiche, con evidenza dei valori da
    utilizzare.
  </p>
);

const vocabExplanation = (loading, vocabDetails, error) => {
  if (error) {
    return (
      <Callout type="danger" title="Errore nel caricamento">
        Impossibile caricare i dettagli del vocabolario
      </Callout>
    );
  }

  if (loading) {
    return (
      <p role="alert" aria-busy="true">
        Caricamento dettagli Vocabolario di Controllo...
      </p>
    );
  }

  if (!vocabDetails) {
    return genericVocabExplanation();
  }

  return null;
};

const Swagger = () => {
  const [vocabDetails, setVocabDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = useQuery();
  const iri = query.get("vocabIri");

  useEffect(() => {
    const asyncFn = async () => {
      if (!iri) {
        return;
      }

      setLoading(true);
      try {
        const details = await getSemanticAssetByUri(iri);
        setVocabDetails(details);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    asyncFn();
  }, [iri]);

  return (
    <div>
      <div data-testid="Swagger Intro" className="project-body container">
        {alertMess && alertMess != "" ? (
          <div>
            <div className="py-3">
              <div className="alert alert-warning m-0" role="alert">
                <strong>Avviso di manutenzione</strong> - {alertMess}
              </div>
            </div>
          </div>
        ) : null}

        <div className="ms-lg-5 ps-lg-5 pt-5">
          {!vocabDetails && (
            <ContentParagraph>
              <h1
                className="h3"
                style={{
                  fontSize: "1.555rem",
                  lineHeight: "1.428",
                  fontWeight: "600"
                }}
              >
                Come utilizzare le API per i vocabolari
              </h1>
              <p>
                Qui di seguito è visualizzata la specifica delle API REST messe
                a disposizione dal Catalogo.
              </p>
              {vocabExplanation(loading, vocabDetails, error)}
            </ContentParagraph>
          )}
          {vocabDetails && (
            <ContentParagraph>
              <h1
                className="h3"
                style={{
                  fontSize: "1.555rem",
                  lineHeight: "1.428",
                  fontWeight: "600"
                }}
              >
                Come utilizzare le API per {`${vocabDetails.title}`}
              </h1>
              Nell&apos;utilizzo degli endpoint per le voci del Vocabolario
              Controllato, utilizzare:
              <ul>
                <li>
                  il valore <code>{vocabDetails.agencyId}</code> per{" "}
                  <code>agency_id</code> ;
                </li>
                <li>
                  il valore <code>{vocabDetails.keyConcept}</code> per{" "}
                  <code>key_concept</code> ;
                </li>
              </ul>
              <p>
                L&apos;endpoint avrà quindi la forma:{" "}
                <code>{vocabDetails.endpointUrl}</code>.
              </p>
            </ContentParagraph>
          )}
          <div lang="en">
            <SwaggerUI url={baseUrl() + "/openapi.yaml"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swagger;
