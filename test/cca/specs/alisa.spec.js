import AppPage from '../AppPage';

it('shoul verify true', function () {
  expect(true).to.be.true;
});

before(() => {
  AppPage.open();
});

describe('TEST DEFAULT COUNTER - NAME, ID, VALUE', () => {
  it('should verify Counter Name is displayed', () => {
    expect(AppPage.defaultCounterName.isDisplayed()).true;
  });

  it('should verify Counter Name ID is 1', () => {
    expect(AppPage.defaultCounterName.getText()).includes('1. ');
  });

  it('should verify Counter Name reads correct text', () => {
    expect(AppPage.defaultCounterName.getText()).includes('Default Counter');
  });

  it('should verify Count Value is displayed', () => {
    expect(AppPage.countValue.isDisplayed()).true;
  });

  it('should verify Count Value is 0 by default', () => {
    expect(AppPage.countValue.getText()).eq('0');
  });
});
describe('TEST LIMIT FIELD 2 (LF2)', () => {
  it('should verify no error displaed when LF2 is cleared', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    browser.keys('Backspace');
    expect($('//div[contains(@class,"alert")]').isDisplayed()).false;
  });

  it('should verify LF2 accepts 5 if LF1 is empty', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.clearValue();
    AppPage.rightPlaceholder.click();
    browser.pause(500);
    AppPage.lF2.setValue(5);
    expect(AppPage.lF2.getValue()).eq('5');
  });
  it('should verify LF2 accepts 9 if LF1 is empty', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.clearValue();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(9);
    expect(AppPage.lF2.getValue()).eq('9');
  });
  it('should verify LF2 accepts 5 if LF1 <= 5', () => {
    browser.refresh();
    AppPage.rightPlaceholder.doubleClick();
    browser.keys('Backspace');
    browser.pause(5000);
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(5);
    browser.pause(5000);
    AppPage.rightPlaceholder.doubleClick();
    AppPage.lF2.setValue(5);
    expect(AppPage.lF2.getValue()).eq('5');
  });
  it('should verify user is able to change value from the keyboard in LF2', () => {
    browser.refresh();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(7);
    expect(AppPage.lF2.getValue()).eq('7');
  });
});
describe('TEST MULTIPLE COUNTERS BEHAVIOR', () => {
  it('should verify Total Result value is 0 if all counters reset', () => {
    browser.refresh();
    for (let i = 0; i < 25; i++) {
      AppPage.blackBtns[4].click();
      browser.pause(500);
    }
    AppPage.addNewCounter('counter2', 40);
    AppPage.addNewCounter('counter3', -30);
    expect(AppPage.totalValue.getText()).eq('Total: 60');
    AppPage.resetCounterById(1);
    AppPage.resetCounterById(2);
    AppPage.resetCounterById(3);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
  });
});
