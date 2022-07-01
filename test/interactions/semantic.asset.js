class SemanticAsset {
  get assetTitle() {
    return $(".card-title");
  }

  get assetDescription() {
    return $(".card-text");
  }

  get assetCategory() {
    return $(".category");
  }

  get assetRightsHolder() {
    return $(".rights-holder-name");
  }

  get assetType() {
    return $(".chip-label");
  }

  get allAssetTypes() {
    return $$(".chip-label");
  }

  async getAssetTitle() {
    await this.assetTitle.waitForDisplayed();
    return await this.assetTitle.getText();
  }

  async getAssetDescription() {
    return await this.assetDescription.getText();
  }

  async getAssetCategory() {
    const category = await this.assetCategory.getText();
    return await category.toLowerCase();
  }

  async getAssetRightsHolder() {
    return await this.assetRightsHolder.getText();
  }

  async getAssetType() {
    await this.assetType.waitForDisplayed();
    return await this.assetType.getText();
  }

  async getAllAssetTypes() {
    await this.assetType.waitForDisplayed();
    return await this.allAssetTypes;
  }
}

export default new SemanticAsset();
