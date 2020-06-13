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

  get blackBtn() {
    return $('button[class*="btn-black"]');
  }
  get blackBtns() {
    return $$('button[class*="btn-black"]');
  }

  get lF1(){
    return $('input[name="lower"]');
  }

  get lF2(){
    return $('input[name="upper"]');
  }

  get countValue() {
    return $('span[class*="badge-primary"]');
  }
  get deleteBtnDefaultCounter() {
    return $('button[id="1"]');
  }

  get resetBtnDefaultCounter() {
    return $('button[class*="reset"]');
  }

  get resetBtns() {
    return $$('button[class*="reset"]');
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
  deleteCounterById (id) {
    $(`button[id="${id}"]`).click();
  }

  resetCounter(id) {
    this.resetBtns[id - 1].click();
  }
}

export default new AppPage();