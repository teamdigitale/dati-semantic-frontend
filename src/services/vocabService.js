import { ASSETS_VOCABULARIES_FULL_URL } from "./routes";

export function getVocabularyByUri(uri) {
  return fetch(`/semantic-assets/details?iri=${uri}`).then((response) =>
    response.json()
  );
}

export function getVocabularyUrl(uri) {
  return `${ASSETS_VOCABULARIES_FULL_URL}?uri=${encodeURIComponent(uri)}`;
}
