import getSparqlEndpoint from "./sparql";

describe("should read sparql_url from env", () => {
  it("should read sparql_url from env", () => {
    global.window._env_ = {
      SPARQL_ENDPOINT_URL: "http://localhost:8890/sparql",
    };
    expect(getSparqlEndpoint()).toBe("http://localhost:8890/sparql");
  });
});
