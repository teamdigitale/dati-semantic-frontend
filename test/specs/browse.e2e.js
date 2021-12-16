import Browse from "../interactions/browse";
import SemanticAsset from "../interactions/semantic.asset";

describe("National Data Catalog", () => {
  it("should be able to browse by a Vocabolario controllato Semantic Asset", async () => {
    await Browse.byVocabolariControllati();

    const assetTypes = await SemanticAsset.getAllAssetTypes();

    await asyncForEach(assetTypes, async (assetType) => {
      const assetTypeText = await assetType.getText();
      expect(assetTypeText).toBe("Vocabolario controllato");
    });
  });

  it("should be able to browse by a ontologie Semantic Asset", async () => {
    await Browse.byOntologie();

    const assetTypes = await SemanticAsset.getAllAssetTypes();

    await asyncForEach(assetTypes, async (assetType) => {
      const assetTypeText = await assetType.getText();
      expect(assetTypeText).toBe("Ontologia");
    });
  });

  it("should be able to browse by a schema dati Semantic Asset", async () => {
    await Browse.bySchemiDati();

    const assetTypes = await SemanticAsset.getAllAssetTypes();

    await asyncForEach(assetTypes, async (assetType) => {
      const assetTypeText = await assetType.getText();
      expect(assetTypeText).toBe("Schema");
    });
  });

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
});
