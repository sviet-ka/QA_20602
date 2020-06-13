class AppPage {
  open(){
    browser.url('https://likejean.github.io/homework-5/')
  }

  get mainHeader () {
    return $('h1');
  };
  get totalValue () {
    return $('h3.total-count');
  };

  get defaultCounterName(){
    return $$('h3')[1];
  }
  counterWithIDExist (i) {
        $(`//h3[text()="${i}. "]`).isDisplayed();
  };






  //method - delete counter by id

  //method - add new counter (name, initial)

  //method - reset counter / via $$[number] ??

  //count negative buttons - check by text???

  //count posititve - check by text ???


}

export default new AppPage();