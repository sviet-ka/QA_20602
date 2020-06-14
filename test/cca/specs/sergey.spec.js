import AppPage from '../AppPage';

describe('PRACTICE', () => {
  before(() => {
    AppPage.open();
  });

  // it('should add 2 more counters', () => {
  //   AppPage.addNewCounter('counter2', 0);
  //   AppPage.addNewCounter('counter3', 1000);
  // });
  //
  // it('should check how fields selected', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(2);
  //   browser.pause(3000);
  // });
  //
  // it('should remove counter by ID', () => {
  //   AppPage.deleteCounterById(3)
  //   AppPage.deleteCounterById(2)
  //   AppPage.deleteCounterById(1)
  //   browser.pause(2000);
  // });
  //
  // it('should change value with spinner in LF1', () => {
  //   browser.refresh();
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.pause(2000);
  //   browser.keys('Up arrow');
  //   browser.pause(2000);
  // });
  //
  // it('should check buttons steps', () => {
  //   const buttons = AppPage.blackBtns.map(el => el.getAttribute('step'));
  //   console.log('----------------------');
  //   console.log(buttons);
  //   browser.pause(2000);
  //   expect(buttons).deep.eq(['-2', '-3', '2', '3']);
  // });
  //
  // it('should check how total value changes', () => {
  //   browser.refresh();
  //   for (let i = 0; i < 5; i++) {
  //     AppPage.blackBtns[5].click();
  //     browser.pause(700);
  //   }
  //   expect(AppPage.countValue.getText()).eq('15');
  //   expect(AppPage.totalValue.getText()).includes('15');
  // });
  //
  // it('should check reset functionality', () => {
  //   browser.refresh();
  //   AppPage.leftPlaceholder.click();
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.setValue(5);
  //   AppPage.lF1.setValue(5);
  //   AppPage.blackBtns[1].click();
  //   AppPage.resetBtnDefaultCounter.click();
  //   browser.pause(500);
  // });
  //
  // it('should check multiple reset buttons behaviour', () => {
  //   browser.refresh();
  //   AppPage.addNewCounter('counter2', 500);
  //   AppPage.addNewCounter('counter3', 1000);
  //   AppPage.resetBtns[1].click();
  //   AppPage.resetBtns[2].click();
  //   browser.pause(2000);
  // });
  //
  // it('should delete several counters by id', () => {
  //   browser.refresh();
  //   AppPage.addNewCounter('counter2', 500);
  //   AppPage.addNewCounter('counter3', 1000);
  //   AppPage.resetCounterById(3)
  //   browser.pause(2000);
  // });
  it('should ', function() {
    browser.refresh();
    expect(AppPage.counterWithIdDisplayed(1)).true
  });

});
