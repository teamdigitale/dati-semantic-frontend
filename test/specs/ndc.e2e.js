import Search from "../interactions/search";
import SemanticAsset from "../interactions/semantic.asset";

describe("National Data Catalog", () => {
  it("should be able to search a Semantic Asset", async () => {
    await Search.open();

    await Search.semanticAsset("person title");

    expect(await SemanticAsset.getAssetTitle()).toContain("Persona");
    expect(await SemanticAsset.getAssetDescription()).toContain(
      "titoli delle persone"
    );
    expect(await SemanticAsset.getAssetCategory()).toBe(
      "popolazione e società"
    );
    expect(await SemanticAsset.getAssetRightsHolder()).toBe(
      "Agenzia per l'Italia Digitale"
    );
  });
});