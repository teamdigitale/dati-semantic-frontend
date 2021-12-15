import { search } from "./searchService";

describe("Search service", () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ data: [{}, {}] }),
    });

    global.window._env_ = { API_URL: "" };
  });

  afterEach(() => {
    jest.restoreAllMocks();
    global.window._env_ = {};
  });

  test("should return all vocabularies when search pattern is not provided", async () => {
    const items = await search({});

    expect(items.data.length).toBe(2);
    expect(fetchMock).toHaveBeenCalledWith("/semantic-assets?offset=0&limit=5");
  });

  test("should return all matching vocabularies when search pattern is provided", async () => {
    const items = await search({ pattern: "some-pattern" });

    expect(items.data.length).toBe(2);
    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets?q=some-pattern&offset=0&limit=5"
    );
  });

  test("should search with patten with two words", async () => {
    const items = await search({ pattern: "some pattern" });

    expect(items.data.length).toBe(2);
    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets?q=some+pattern&offset=0&limit=5"
    );
  });

  test("should search using given type filter", async () => {
    await search({ types: ["ONTOLOGY", "SCHEMA"] });

    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets?type=ONTOLOGY&type=SCHEMA&offset=0&limit=5"
    );
  });

  test("should search using given theme filter", async () => {
    await search({ themes: ["EDUC", "ECON"] });

    let theme1 = encodeURIComponent(
      "http://publications.europa.eu/resource/authority/data-theme/EDUC"
    );
    let theme2 = encodeURIComponent(
      "http://publications.europa.eu/resource/authority/data-theme/ECON"
    );
    expect(fetchMock).toHaveBeenCalledWith(
      `/semantic-assets?theme=${theme1}&theme=${theme2}&offset=0&limit=5`
    );
  });

  test("should paginate search with offset", async () => {
    await search({ offset: 10 });

    expect(fetchMock).toHaveBeenCalledWith(
      `/semantic-assets?offset=10&limit=5`
    );
  });
});
