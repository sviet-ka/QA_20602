import AppPage from '../AppPage';

before(() => AppPage.open());
beforeEach(() => browser.refresh());

describe('LIMIT FIELDS BEHAVIOUR', () => {
  it('should verify that LF1 accepts 1 if LF2 is empty', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.clearValue();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(1);
    expect(AppPage.lF1.getValue()).eq('1');
  });

  it('should verify that LF1 accepts 5 if LF2 is empty', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.clearValue();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(5);
    expect(AppPage.lF1.getValue()).eq('5');
  });

  it('should verify that LF1 accepts 9 if LF2 is empty', () => {
    AppPage.rightPlaceholder.click();
    AppPage.leftPlaceholder.click();
    AppPage.lF2.clearValue();
    AppPage.lF1.click();
    browser.keys('Backspace');
    browser.keys('9');
    expect(AppPage.lF1.getValue()).eq('9');
  });

  it('should Verify that LF1 accepts 5 if LF2 >= 5', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    browser.keys('Backspace');
    browser.keys('6');
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    browser.keys('5');
    expect(AppPage.lF1.getValue()).eq('5');
  });

  it('should verify that user is able to change value from the keyboard in LF1', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    browser.keys('Backspace');
    browser.keys('6');
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    browser.keys('5');
    expect(AppPage.lF1.getValue()).eq('5');
  });

  it('should verify that user is able to change value with spinner in LF1', () => {
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Up arrow');
    expect(AppPage.lF1.getValue()).eq('2');
  });

  it('should verify user is able to change value with spinner in LF1', () => {
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('ArrowUp');
    expect(AppPage.lF1.getValue()).eq('2');
  });

  it('should verify Left Reset Limit Field Btn is displayed after Placeholder removed', () => {
    AppPage.leftPlaceholder.click();
    expect(AppPage.leftResetBtn.isDisplayed()).true;
  });

  it('should verify Left Reset Limit Field Btn resets LF1, and black btns to default state (placeholder appears)', () => {
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

  it('should verify system allows to change LF1 val when LF2 val is less than LF1', () => {
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.click();
    AppPage.lF1.setValue('3');
    AppPage.lF2.click();
    AppPage.lF2.setValue('2');
    expect(AppPage.lF1.isEnabled()).true;
  });

  it('should verify that LF2 field displays "Change step options?" placeholder bu default', () => {
    expect(AppPage.rightPlaceholder.isDisplayed()).true;
    expect(AppPage.rightPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
  });

  it('should verify LF2 accepts 1 if LF1 is empty', () => {
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    browser.keys('Backspace');
    AppPage.lF2.setValue('1');
    expect(AppPage.lF2.getValue()).eq('1');
  });

  it('should verify LF2 accepts 5 if LF1 is empty', () => {
    AppPage.leftPlaceholder.click();
    AppPage.lF1.clearValue();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(5);
    expect(AppPage.lF2.getValue()).eq('5');
  });

  it('should verify LF2 accepts 9 if LF1 is empty', () => {
    AppPage.leftPlaceholder.click();
    AppPage.lF1.clearValue();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(9);
    expect(AppPage.lF2.getValue()).eq('9');
  });

  it('should verify LF2 accepts 5 if LF1 <= 5', () => {
    AppPage.leftPlaceholder.click();
    browser.keys('Backspace');
    AppPage.lF1.setValue(5);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(5);
    expect(AppPage.lF2.getValue()).eq('5');
  });

  it('should verify user is able to change value with Spinner in LF2', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    browser.keys('Up arrow');
    expect(AppPage.lF2.getValue()).eq(4);
  });

  it('should verify Reset Limit Field Btn in LF2, resets it to default state (3) (placeholder appears)', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    AppPage.lF2.setValue(5);
    AppPage.rightResetBtn.click();
    AppPage.rightPlaceholder.click();
    expect(AppPage.lF2.getValue()).eq('3');
  });

  it('should verify that Reset Limit Field Btn is displayed after user clicks on LF2 placeholder.', () => {
    AppPage.rightPlaceholder.click();
    expect(AppPage.rightResetBtn.isDisplayed()).true;
  });

  it('should verify system allows to change val in LF2 when LF1 val is greater than LF2 val', () => {
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(4);
    AppPage.rightPlaceholder.click();
    expect(AppPage.lF2.isEnabled()).true;
  });
});

describe('SUB AND ADD BUTTONS BEHAVIOUR', () => {
  it('should verify add/sub buttons are (-1, -2, -3, 1, 2, 3) by default', () => {
    expect(AppPage.blackBtns.length).eq(6);
    expect(AppPage.blackBtns.map(el => el.getText())).deep.equal(['-1', '-2', '-3', '1', '2', '3']);
  });

  it('should verify default buttons are displayed after reloading the browser page', () => {
    for (let i = 0; i < 6; i++) {
      expect(AppPage.blackBtns[i].isDisplayed()).true;
    }
  });

  it('should check Count Value increases when user clicks Add button', () => {
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.setValue(1);
    AppPage.lF2.setValue(5);
    expect(AppPage.countValue.getText()).eq('0');
    AppPage.clickBlackButton('5');
    expect(AppPage.countValue.getText()).eq('5');
  });

  it('should check Count Value decreases when user clicks Sub button', () => {
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.setValue(1);
    AppPage.lF2.setValue(5);
    expect(AppPage.countValue.getText()).eq('0');
    AppPage.clickBlackButton('-5');
    expect(AppPage.countValue.getText()).eq('-5');
  });

  it('should check Total value increase when user clicks Add button', () => {
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.setValue(1);
    AppPage.lF2.setValue(5);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
    AppPage.clickBlackButton('5');
    expect(AppPage.totalValue.getText()).eq('Total: 5');
  });

  it('should check Total value decrease when user clicks Sub button', () => {
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    AppPage.lF1.setValue(1);
    AppPage.lF2.setValue(5);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
    AppPage.clickBlackButton('-5');
    expect(AppPage.totalValue.getText()).eq('Total: -5');
  });

  it('should verify that the buttons are displayed according to the range, when range changes', () => {
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(2);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(4);
    expect(AppPage.blackBtns.map(el => el.getText())).deep.equal(['-2', '-3', '-4', '2', '3', '4']);
  });
});
