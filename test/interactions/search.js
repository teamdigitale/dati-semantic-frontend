class Search {
  get searchTextBox() {
    return $("//input[@type='text']");
  }

  get btnSubmit() {
    return $("//input[@type='submit']");
  }

  async semanticAsset(searchText) {
    await this.searchTextBox.waitForDisplayed();
    await this.searchTextBox.setValue(searchText);
    await this.btnSubmit.click();
  }
}

export default new Search();
