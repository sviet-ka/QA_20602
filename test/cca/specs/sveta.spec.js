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
    expect(AppPage.leftResetLFBtn.getText()).eq('X');
  });

  it('should verify if user clicks Reset Limit Field Btn in LF1, LF1 resets to default value (1) and placeholder appears', async () => {
    browser.refresh();
    const leftPlaceholder = await AppPage.leftPlaceholder;
    leftPlaceholder.click();
    const lF1 = await AppPage.lF1;
    lF1.click();
    browser.keys('Backspace');
    lF1.setValue(2);
    const leftResetLFBtn = await AppPage.leftResetLFBtn;
    leftResetLFBtn.click();
    expect(await leftPlaceholder.isDisplayed()).eq(true);
    const btn = await AppPage.blackBtns;
    expect(await btn[1].getAttribute('step')).eq('-1');
    expect(await btn[2].getAttribute('step')).eq('-2');
    expect(await btn[3].getAttribute('step')).eq('-3');
    leftPlaceholder.click();
    expect(lF1.getValue()).eq('1');
  });

  // it('should verify that LF1 doesn\'t accept any letters.', () => {
  //   browser.refresh();
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Backspace');
  //   AppPage.lF1.setValue('e');
  //   AppPage.header.click();
  //   expect(AppPage.lF1.getValue()).eq('');
  // });

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
    //all above is preconditions
    AppPage.editCounterNameField.setValue('');
    AppPage.editCounterNameField.setValue('123!@#$%^&*()abcd');
    expect(AppPage.defaultCounterName.getText()).eq('1. 123!@#$%^&*()abcd');
  });

  it('should verify Count Value is set to zero after Reset Btn is clicked', async () => {
    browser.refresh();
    let newCounterName = await AppPage.newCounterName;
    let newCounterValue = await AppPage.newCounterValue;
    for (let i = 1; i <= 3; i++) {
      await newCounterName.setValue(`Counter number ${i}`);
      await newCounterValue.setValue(`${i * 10}`);
      await (await AppPage.addNewCounterBtn).click();
    }
    await AppPage.deleteCounterById(1);
    //all above is preconditions
    await AppPage.resetCounterById(2);
    const totalValue = await AppPage.totalValue;
    expect(await totalValue.getText()).eq('Total: 40');
    const getCounterValueByID = await AppPage.getCounterValueByID(2);
    expect(getCounterValueByID).eq('0');
  });

  it('should verify click on the Delete Btn to delete an entire counter', async () => {
    browser.refresh();
    let newCounterName = await AppPage.newCounterName;
    let newCounterValue = await AppPage.newCounterValue;
    for (let i = 1; i <= 3; i++) {
      await newCounterName.setValue(`Counter number ${i}`);
      await newCounterValue.setValue(`${i * 10}`);
      await (await AppPage.addNewCounterBtn).click();
    }
    await AppPage.deleteCounterById(1);
    //all above is preconditions
    await AppPage.deleteCounterById(3);
    const firstCounterName = await AppPage.getCounterNameById(1);
    const secondCounterName = await AppPage.getCounterNameById(2);
    expect(firstCounterName).eq('1. Counter number 1');
    expect(secondCounterName).eq('2. Counter number 2');
    const totalValue = await AppPage.totalValue;
    expect(await totalValue.getText()).eq('Total: 30');
  });

  it('should verify error message will appear at the bottom if input entry is invalid', () => {
    browser.refresh();
    browser.pause(2000);
    const defaultCounterName = AppPage.defaultCounterName;
    const editCounterNameField = AppPage.editCounterNameField;
    expect(defaultCounterName.getText()).eq('1. Default Counter');
    expect(editCounterNameField.getValue()).eq('Default Counter');
    //all above is preconditions
    AppPage.newCounterName.setValue('qwerty');
    const error = AppPage.error;
    expect(error.getText()).eq('ERROR: Counter name should be longer than 6 characters');
  });
  });


});
