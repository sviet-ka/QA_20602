import AppPage from '../AppPage';

// it('should verify yelena is true', function () {
//   expect(true).to.be.true;
// });
//
// it('should verify yelena set up', function () {
//   expect(true).to.be.true;
// });


describe('Add Counter (Footer)', () => {
  before(() => {
    AppPage.open();
  });

  it('should verify that Edit Name Label is displayed', function() {
   expect(AppPage.editCounterNameLabel.isDisplayed()).true;
  });

  it('should verify that Edit Name Label reads "Edit Counter Title"', function() {
    expect(AppPage.editCounterNameLabel.getText()).eq('Edit Counter Title:');
  });

  it('should verify that Add Name Field is displayed', function() {
    expect(AppPage.newCounterName.isDisplayed()).true;
  });

  it('should verify that Add Name Field initial value is "Counter Name"', function() {
    expect(AppPage.newCounterName.getValue()).eq('Counter Name');
  });

  it('should verify that Add Counter Button displayed', function() {
    expect(AppPage.addNewCounterBtn.isDisplayed()).true;
  });

  it('should verify that Add Counter Button text is "ADD COUNTER"', function() {
    expect(AppPage.addNewCounterBtn.getText()).eq('ADD COUNTER');
  });
});

describe('Add Counter (Footer)', () => {
  before(() => {
    AppPage.open();
  });

  it('should check that the count value(CV) increases when user clicks addition buttons', function() {
   AppPage.leftPlaceholder.click();
   AppPage.rightPlaceholder.click();
   AppPage.lF1.setValue(1);
   AppPage.lF2.setValue(5);
   expect(AppPage.countValue.getText()).eq('0');
   browser.pause(700);

   AppPage.clickBlackButton('5');
   expect(AppPage.countValue.getText()).eq('5');
   browser.pause(700);
  });

  it('should check that the count value(CV) decreases when user clicks subtraction buttons', function() {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.setValue(1);
    AppPage.lF2.setValue(5);
    expect(AppPage.countValue.getText()).eq('0');
    browser.pause(700);

    AppPage.clickBlackButton('-5');
    expect(AppPage.countValue.getText()).eq('-5');
    browser.pause(700);
  });

  it('should check that total value increases when user clicks addition buttons', function() {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.setValue(1);
    AppPage.lF2.setValue(5);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
    browser.pause(700);

    AppPage.clickBlackButton('5');
    expect(AppPage.totalValue.getText()).eq('Total: 5');
    browser.pause(700);
  });

  it('should check that total value decreases when user clicks addition buttons', function() {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.setValue(1);
    AppPage.lF2.setValue(5);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
    browser.pause(700);

    AppPage.clickBlackButton('-5');
    expect(AppPage.totalValue.getText()).eq('Total: -5');
    browser.pause(700);
  });

  it('should verify that default buttons are displayed after reloading the browser page', function() {
    browser.refresh();
    for (let i = 0; i < 6; i++) {
      expect(AppPage.blackBtns[i].isDisplayed()).true;
    }
    expect(AppPage.leftPlaceholder.isDisplayed()).true;
    expect(AppPage.rightPlaceholder.isDisplayed()).true;
    expect(AppPage.deleteBtnDefaultCounter.isDisplayed()).true;
    expect(AppPage.resetBtnDefaultCounter.isDisplayed()).true;
    expect(AppPage.addNewCounterBtn.isDisplayed()).true;
  });


});
  
  