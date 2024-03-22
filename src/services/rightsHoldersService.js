import { baseUrl, handleError } from "./fetchUtils";

export async function getRightsHolders() {
  const response = await fetch(`${baseUrl()}/semantic-assets/rights-holders`);
  const response_2 = handleError(response);
  return response_2.json();
}
