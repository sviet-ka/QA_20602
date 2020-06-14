import AppPage from '../AppPage.js';

before(() => {
  AppPage.open();
});

describe("LF1 test-cases Svetlana Gorbunova's part", () => {
  it('should verify user is not able to set value < 1 with spinner in LF1 ', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    expect(AppPage.lF1.getValue()).eq('1');
    for (let i = 1; i <= 2; i++) {
      browser.keys('ArrowDown');
    }
    expect(AppPage.lF1.getValue()).eq('1');
  });

  it('should verify Reset Limit Field Btn is displayed after a value is entered in LF1', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    expect(AppPage.leftResetBtn.getText()).eq('X');
  });

  it('should verify if user clicks Reset Limit Field Btn in LF1, LF1 resets to default value (1) and placeholder appears', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(2);
    AppPage.leftResetBtn.click();
    expect(AppPage.leftPlaceholder.isDisplayed()).eq(true);
    expect(AppPage.blackBtns[0].getAttribute('step')).eq('-1');
    expect(AppPage.blackBtns[1].getAttribute('step')).eq('-2');
    expect(AppPage.blackBtns[2].getAttribute('step')).eq('-3');
    AppPage.leftPlaceholder.click();
    expect(AppPage.lF1.getValue()).eq('1');
  });

  it("should verify that LF1 doesn't accept any letters.", () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    AppPage.lF1.setValue('c');
    AppPage.header.click();
    expect(AppPage.lF1.getValue()).eq('');
    expect(AppPage.error.getText()).eq('ERROR: Input must be an INTEGER');
  });

  it("should verify that LF1 doesn't accept dot", () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    AppPage.lF1.setValue('.');
    AppPage.header.click();
    expect(AppPage.lF1.getValue()).eq('');
    expect(AppPage.error.getText()).eq('ERROR: Input must be an INTEGER');
  });

  it('should verify Edit Name Field is present', () => {
    browser.refresh();
    expect(AppPage.editCounterNameField.isDisplayed()).eq(true);
  });

  it('should verify Edit Name Field displays "Default Counter" placeholder', () => {
    browser.refresh();
    expect(AppPage.editCounterNameField.getValue()).eq('Default Counter');
  });

  it('should verify Edit Name Field is populated with correct value, Counter Name will change respectively', () => {
    browser.refresh();
    expect(AppPage.defaultCounterName.getText()).eq('1. Default Counter');
    expect(AppPage.editCounterNameField.getValue()).eq('Default Counter');
    AppPage.editCounterNameField.setValue('');
    AppPage.editCounterNameField.setValue('123!@#$%^&*()abcd');
    expect(AppPage.defaultCounterName.getText()).eq('1. 123!@#$%^&*()abcd');
  });

  it('should verify Count Value is set to zero after Reset Btn is clicked', () => {
    browser.refresh();
    for (let i = 1; i <= 3; i++) {
      AppPage.newCounterName.setValue(`Counter number ${i}`);
      AppPage.newCounterValue.setValue(`${i * 10}`);
      AppPage.addNewCounterBtn.click();
    }
    AppPage.deleteCounterById(1);
    AppPage.resetCounterById(2);
    expect(AppPage.totalValue.getText()).eq('Total: 40');
    expect(AppPage.getCounterValueByID(2)).eq('0');
  });

  it('should verify click on the Delete Btn to delete an entire counter',() => {
    browser.refresh();
    for (let i = 1; i <= 3; i++) {
      AppPage.newCounterName.setValue(`Counter number ${i}`);
      AppPage.newCounterValue.setValue(`${i * 10}`);
      AppPage.addNewCounterBtn.click();
    }
    AppPage.deleteCounterById(1);
    AppPage.deleteCounterById(3);
    expect(AppPage.countersNames[1].getText()).eq('1. Counter number 1');
    expect(AppPage.countersNames[2].getText()).eq('2. Counter number 2');
    expect(AppPage.totalValue.getText()).eq('Total: 30');
  });

  it('should verify error message will appear at the bottom if input entry is invalid', () => {
    browser.refresh();
    browser.pause(2000);
    expect(AppPage.defaultCounterName.getText()).eq('1. Default Counter');
    expect(AppPage.editCounterNameField.getValue()).eq('Default Counter');
    AppPage.newCounterName.setValue('qwerty');
    expect(AppPage.error.getText()).eq('ERROR: Counter name should be longer than 6 characters');
  });

});
