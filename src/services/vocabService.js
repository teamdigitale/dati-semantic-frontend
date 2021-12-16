import { ASSETS_FULL_URL } from "./routes";
import { baseUrl, handleError } from "./fetchUtils";

export function getSemanticAssetByUri(uri) {
  return fetch(`${baseUrl()}/semantic-assets/by-iri?iri=${uri}`)
    .then((response) => handleError(response))
    .then((response) => response.json());
}

export function getDetailsPageUrl(uri) {
  return `${ASSETS_FULL_URL}?uri=${encodeURIComponent(uri)}`;
}
