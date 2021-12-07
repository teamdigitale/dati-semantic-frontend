export function handleError(response) {
  if (!response.ok) {
    const errorMessage = response.statusText || "Error while fetching data!";
    throw new Error(errorMessage);
  }
  return response;
}

export function baseUrl() {
  return window._env_.API_URL;
}
