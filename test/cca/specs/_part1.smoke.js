import AppPage from '../AppPage';

before(() => AppPage.open());
beforeEach(() => browser.refresh());

describe('CHECK DEFAULT COUNTER ELEMENTS STATE', () => {
  it('should verify header is displayed', function () {
    expect(AppPage.header.isDisplayed()).true;
  });

  it('should verify that the header text is Counters ', () => {
    expect(AppPage.header.getText()).eq('Counters');
  });

  it('should verify subheader is displayed and is 0 by default', () => {
    expect(AppPage.totalValue.isDisplayed()).true;
    expect(AppPage.totalValue.getText()).eq('Total: 0');
  });

  it('should verify Counter Name is displayed', () => {
    expect(AppPage.defaultCounterName.isDisplayed()).true;
  });

  it('should verify Counter Name reads correct text', () => {
    expect(AppPage.defaultCounterName.getText()).includes('Default Counter');
  });

  it('should verify Counter Name contains ID = 1', () => {
    expect(AppPage.defaultCounterName.getText()).includes('1. ');
  });

  it('should verify Count Value is displayed and is 0 by default', () => {
    expect(AppPage.countValue.isDisplayed() && AppPage.countValue.getText() === '0').true;
  });

  it('Verify that placeholders text is "CHANGE STEP OPTIONS?"', () => {
    expect(AppPage.leftPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
    expect(AppPage.rightPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
  });

  it('Verify that Limit Fields are displayed after clicking on placeholders', () => {
    AppPage.leftPlaceholder.click();
    AppPage.rightPlaceholder.click();
    expect(AppPage.lF1.isDisplayed()).true;
    expect(AppPage.lF2.isDisplayed()).true;
  });

  it('Verify that Delete Button is displayed and its text is DELETE', () => {
    expect(AppPage.deleteBtnDefaultCounter.isDisplayed()).true;
    expect(AppPage.deleteBtnDefaultCounter.getText()).eq('DELETE');
  });

  it('should verify Reset Btn is displayed and its text is RESET', () => {
    expect(AppPage.resetBtnDefaultCounter.isDisplayed()).eq(true);
    expect(AppPage.resetBtnDefaultCounter.getText()).eq('RESET');
  });
});

describe('CHECK DEFAULT SUB AND ADD BUTTONS', () => {
  it('should verify default Sub buttons are -1, -2, -3', () => {
    expect(AppPage.blackBtns.map(el => el.getText()).filter(el => el < 0)).deep.equal([
      '-1',
      '-2',
      '-3',
    ]);
  });

  it('should Verify that Add buttons are displayed and equal 1,  2,  3', () => {
    expect(AppPage.blackBtns.map(el => el.getText()).filter(el => el > 0)).deep.equal([
      '1',
      '2',
      '3',
    ]);
  });
});

describe('CHECK NEW COUNTER INPUT FIELDS AND LABELS', () => {
  it('should Verify that Enter Initial Count Label displayed correctly', () => {
    expect(AppPage.initialCountLabel.isDisplayed()).true;
    expect(AppPage.initialCountLabel.getText()).eq('Enter Initial Count:');
  });

  it('should Verify Default Value Field initial value is 50', () => {
    expect(AppPage.newCounterValue.getValue()).eq('50');
  });

  it('should verify that Edit Name Label displayed correctly', () => {
    expect(AppPage.editCounterNameLabel.isDisplayed()).true;
    expect(AppPage.editCounterNameLabel.getText()).eq('Edit Counter Title:');
  });

  it('should verify that Add Name Field is displayed', () => {
    expect(AppPage.newCounterName.isDisplayed()).true;
  });

  it('should verify that Add Name Field default value is "Counter Name"', () => {
    expect(AppPage.newCounterName.getValue()).eq('Counter Name');
  });

  it('should verify that Add Counter Button displayed correctly', () => {
    expect(AppPage.addNewCounterBtn.isDisplayed()).true;
    expect(AppPage.addNewCounterBtn.getText()).eq('ADD COUNTER');
  });
});
