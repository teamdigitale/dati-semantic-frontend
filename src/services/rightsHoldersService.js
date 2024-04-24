import { baseUrl, handleError } from "./fetchUtils";

export async function getRightsHolders() {
  const response = await fetch(`${baseUrl()}/semantic-assets/rights-holders`);
  const response_2 = handleError(response);
  return response_2.json();
}

export const getLangLabel = (name) => {
  if (name) {
    if (typeof name == "object") {
      if (Object.keys(name).length == 0) return null;
      if (Reflect.has(name, "it")) return name["it"];
      if (Reflect.has(name, "en")) return name["en"];
      if (Reflect.has(name, "DEFAULT")) return name["DEFAULT"];
    } else if (typeof name == "string") return name;
  }

  return null;
};
