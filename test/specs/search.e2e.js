import Search from "../interactions/search";
import SemanticAsset from "../interactions/semantic.asset";

describe("National Data Catalog", () => {
  it("should be able to search a Vocabolario controllato Semantic Asset", async () => {
    await Search.semanticAsset("person title");

    expect(await SemanticAsset.getAssetType()).toBe("Vocabolario controllato");
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

  it("should be able to search a Ontologia Semantic Asset", async () => {
    await Search.semanticAsset("Ontologia degli Indicatori");

    expect(await SemanticAsset.getAssetType()).toBe("Ontologia");
    expect(await SemanticAsset.getAssetTitle()).toContain("Indicatori");
    expect(await SemanticAsset.getAssetDescription()).toContain(
      "Questa è l'ontologia per modellare indicatori e metriche per il loro calcolo"
    );
    expect(await SemanticAsset.getAssetCategory()).toBe("scienza e tecnologia");
    expect(await SemanticAsset.getAssetRightsHolder()).toBe(
      "Agenzia per l'Italia Digitale"
    );
  });

  it("should be able to search a Schema Semantic Asset", async () => {
    await Search.semanticAsset("the person schema");

    expect(await SemanticAsset.getAssetType()).toBe("Schema");
    expect(await SemanticAsset.getAssetTitle()).toContain("The Person schema");
    expect(await SemanticAsset.getAssetDescription()).toContain(
      "This Person schema is derived from the [CPV/Person]"
    );
    expect(await SemanticAsset.getAssetCategory()).toBe(
      "istruzione, cultura e sport"
    );
    expect(await SemanticAsset.getAssetRightsHolder()).toBe(
      "Agenzia per l'Italia Digitale"
    );
  });
});
