class Browse {
  get cookieBanner() {
    return $(".cookiebar-confirm");
  }

  get ontologie() {
    return $("//button[text()='Ontologie']");
  }

  get vocabolariControllati() {
    return $("//button[text()='Vocabolari controllati']");
  }

  get schemiDati() {
    return $("//button[text()='Schemi Dati']");
  }

  async byOntologie() {
    await this.ontologie.waitForDisplayed();
    this.ontologie.click();
  }

  async byVocabolariControllati() {
    await this.vocabolariControllati.waitForDisplayed();
    this.vocabolariControllati.click();
  }

  async bySchemiDati() {
    await this.schemiDati.waitForDisplayed();
    this.schemiDati.click();
  }
}

export default new Browse();
