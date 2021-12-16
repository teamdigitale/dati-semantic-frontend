import { getSemanticAssetByUri } from "./vocabService";

let fetchMock;

beforeEach(() => {
  fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({ assetIri: "https://w3id.org/id" }),
  });
  global.window._env_ = { API_URL: "" };
});

afterEach(() => {
  jest.restoreAllMocks();
  global.window._env_ = {};
});

describe("Vocab service", () => {
  test("should vocabulary, by its URI", async () => {
    const assetIri = "https://w3id.org/id";
    const vocab = await getSemanticAssetByUri(assetIri);

    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets/by-iri?iri=" + assetIri
    );
    expect(vocab).toBeTruthy();
    expect(vocab.assetIri).toBe(assetIri);
  });
});
