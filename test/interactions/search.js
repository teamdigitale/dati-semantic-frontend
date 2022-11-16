class Search {
  get searchTextBox() {
    return $("//input[@type='search']");
  }

  get btnSubmit() {
    return $("//button[@type='submit']");
  }

  async semanticAsset(searchText) {
    await this.searchTextBox.waitForDisplayed();
    await this.searchTextBox.setValue(searchText);
    await this.btnSubmit.click();
  }
}

export default new Search();
