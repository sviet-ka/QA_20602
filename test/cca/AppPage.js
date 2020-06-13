class AppPage {


  get mainHeader () {
    return $('h1');
  };
  get totalValue () {
    return $('h3.total-count');
  };

  get defaultCounterName(){
    return $$('h3')[1];
  }


  get leftPlaceholder() {
    return $('button[name="negative"]');
    }

  get rightPlaceholder() {
    return $('button[name="positive"]');
  }

  get leftPlaceholders() {
    return $$('button[name="negative"]');
  }

  get rightPlaceholders() {
    return $$('button[name="positive"]');
  }

  get blackButton() {
    return $('button[class*="btn-black"]');
  }
  get blackButtons() {
    return $$('button[class*="btn-black"]');
  }



  //method - delete counter by id

  //method - add new counter (name, initial)

  //method - reset counter / via $$[number] ??

  //count negative buttons - check by text???

  //count posititve - check by text ???
  open(){
    browser.url('https://likejean.github.io/homework-5/')
  }
  counterWithIDExist (i) {
    $(`//h3[text()="${i}. "]`).isDisplayed();
  };

  clickBlackButton (str) {
    $(`//button[text()="${str}"]`).click();
  }
}

export default new AppPage();