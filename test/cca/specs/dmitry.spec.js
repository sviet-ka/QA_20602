import AppPage from '../AppPage';

beforeEach(() => {
  AppPage.open();
});

describe('Default Counter', () => {

  it('Verify that Limit Field (LF1) is displayed', () => {
    AppPage.leftPlaceholder.click();
    expect(AppPage.lF1.isDisplayed()).true;
  });

  it('Verify that LF1 placeholder text is "CHANGE STEP OPTIONS?"', () => {
    expect(AppPage.leftPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
  });

  it('Verify that Limit Field (LF2) is displayed', () => {
    AppPage.rightPlaceholder.click();
    expect(AppPage.lF2.isDisplayed()).true;
  });

  it('Verify that LF2 placeholder text is "CHANGE STEP OPTIONS?"', () => {
    expect(AppPage.rightPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
  });

  it('Verify that Delete Button is displayed ', () => {
    expect(AppPage.deleteBtnDefaultCounter.isDisplayed()).true;
  });
})

describe('Limit Field 2 (LF2)', () => {

  it('Verify that user is able to change value with change spinner in LF2', () => {
    AppPage.rightPlaceholder.click();
    const initial = +(AppPage.lF2.getValue());
    AppPage.lF2.click();
    browser.keys('Up arrow');
    expect(+AppPage.lF2.getValue()).eq(initial + 1);
  });

  it('Verify that user is not able to set value > 9 with spinner in LF2', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    for (let i = 0; i < 7; i++)
      browser.keys('Up arrow');
    expect(AppPage.lF2.getValue()).eq('9');
  });

  it('Verify that user is not able to set value < 1 with spinner in LF2', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    for (let i = 0; i < 3; i++)
      browser.keys('Down arrow');
    expect(AppPage.lF2.getValue()).eq('1');
  });

  it('Verify that user clicks Reset Limit Field Btn in LF2, LF2 resets to default value (3) and placeholder appears.', () => {
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    AppPage.lF2.setValue(5);
    AppPage.rightResetBtn.click();
    AppPage.rightPlaceholder.click();
    expect(AppPage.lF2.getValue()).eq('3');
  });

  it('Verify that Reset Limit Field Btn is displayed after user clicks on LF2 placeholder.', () => {
    AppPage.rightPlaceholder.click();
    expect(AppPage.rightResetBtn.isDisplayed()).true;
  });


});

describe('Multiple Counters Behaviour', () => {
  it('Verify that Total Result value is "0" if all counters deleted', () => {
    AppPage.deleteBtnDefaultCounter.click();
    AppPage.newCounterValue.setValue(50);
    AppPage.addNewCounterBtn.click();
    AppPage.newCounterValue.setValue(40);
    AppPage.addNewCounterBtn.click();
    AppPage.newCounterValue.setValue(-30);
    AppPage.addNewCounterBtn.click();
    expect(AppPage.totalValue.getText()).eq('Total: 60');
    AppPage.deleteCounterById(3);
    AppPage.deleteCounterById(2);
    AppPage.deleteCounterById(1);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
  });
});



