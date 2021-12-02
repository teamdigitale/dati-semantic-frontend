import { ASSETS_FULL_URL } from "./routes";
import { baseUrl } from "../assets/data/env";

export function getSemanticAssetByUri(uri) {
  return fetch(`${baseUrl()}/semantic-assets/details?iri=${uri}`).then(
    (response) => response.json()
  );
}

export function getDetailsPageUrl(uri) {
  return `${ASSETS_FULL_URL}?uri=${encodeURIComponent(uri)}`;
}
