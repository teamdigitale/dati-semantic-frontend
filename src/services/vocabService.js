import { ASSETS_FULL_URL } from "./routes";
import { baseUrl, handleError } from "./fetchUtils";

export async function getSemanticAssetByUri(uri) {
  const response = await fetch(
    `${baseUrl()}/semantic-assets/by-iri?iri=${uri}`
  );
  const response_2 = handleError(response);
  return response_2.json();
}

export function getDetailsPageUrl(uri) {
  return `${ASSETS_FULL_URL}?uri=${encodeURIComponent(uri)}`;
}
