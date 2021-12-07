export function handleError(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export function baseUrl() {
  return window._env_.API_URL;
}
