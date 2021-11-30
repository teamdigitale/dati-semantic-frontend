class Search {
  get searchTextBox() {
    return $("//input[@type='text']");
  }

  get btnSubmit() {
    return $("//input[@type='submit']");
  }

  async semanticAsset(searchText) {
    await this.searchTextBox.setValue(searchText);
    await this.btnSubmit.click();
  }

  open() {
    browser.url(`https://ndc-dev.apps.cloudpub.testedev.istat.it/`);
  }
}

export default new Search();
