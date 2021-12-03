import { search } from "./searchService";

describe("Search service", () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: [{}, {}] }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should return all vocabularies when search pattern is not provided", async () => {
    const items = await search({});

    expect(items.data.length).toBe(2);
    expect(fetchMock).toHaveBeenCalledWith("/semantic-assets/search");
  });

  test("should return all matching vocabularies when search pattern is provided", async () => {
    const items = await search({ pattern: "some-pattern" });

    expect(items.data.length).toBe(2);
    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets/search?term=some-pattern"
    );
  });

  test("should search with patten with two words", async () => {
    const items = await search({ pattern: "some pattern" });

    expect(items.data.length).toBe(2);
    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets/search?term=some+pattern"
    );
  });

  test("should search using given type filter", async () => {
    await search({ types: ["ONTOLOGY", "SCHEMA"] });

    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets/search?type=ONTOLOGY&type=SCHEMA"
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
      `/semantic-assets/search?theme=${theme1}&theme=${theme2}`
    );
  });
});
