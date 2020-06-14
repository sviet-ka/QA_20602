import AppPage from '../AppPage';

before(() => {
  AppPage.open();
});

  it('should Verify that Add buttons are displayed and equal 1,  2,  3', () => {
    const addButtons = AppPage.blackBtns.map(el => el.getText()).filter(el => el > 0);
    expect(addButtons).deep.equal(['1', '2', '3'])
  });

  it('should Verify that Enter Initial Count Label is displayed', () => {
    expect(AppPage.initialCountLabel.isDisplayed()).true;
  });

  it('should Verify that  Edit Initial Count Label reads "Enter Initial Count:"', () => {
    expect(AppPage.initialCountLabel.getText()).eq('Enter Initial Count:');
  });

  it('should Verify Default Value Field initial value is 50', () => {
    expect(AppPage.newCounterValue.getValue()).eq('50');
  });

  it('should Verify that LF2 doesn’t accept invalid integer', () => {
    browser.refresh();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(10);
    expect(AppPage.lF2.getValue()).eq('');
    expect(AppPage.error.getText()).eq('ERROR: Lower Limit Must be Less than Upper Limit');
    browser.pause(3000);
  })

  it('should Verify that LF2 doesn’t accept special characters', () => {
    browser.refresh();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue('+');
    expect(AppPage.lF2.getValue()).eq('');
    expect(AppPage.error.getText()).eq('ERROR: Input must be an INTEGER');
    browser.pause(3000);
  })

  it('should Verify system allows to change value in LF2 when LF1 value is greater than LF2', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(4);
    AppPage.rightPlaceholder.click();
    expect(AppPage.lF2.isEnabled()).true;
  })

  it('should Verify that 6 black square solid buttons (-1, -2, -3, 1, 2, 3) by default', () => {
    browser.refresh();
    expect(AppPage.blackBtns.length).eq(6);
    expect(AppPage.blackBtns.map(el => el.getText())).deep.equal(['-1', '-2', '-3', '1', '2', '3']);
  })

  it('should Verify that the buttons are displayed according to the range', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(2);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(4);
    expect(AppPage.blackBtns.map(el => el.getText())).deep.equal(['-2', '-3', '-4', '2', '3', '4']);
  })

  it('should Verify that the Error for non-integer values displays', () => {
    browser.refresh();
    AppPage.newCounterValue.click();
    while (AppPage.newCounterValue.getValue() !== '') {
      browser.keys('Backspace');
    }
    browser.keys('.');
    expect(AppPage.newCounterValue.getValue()).eq('');
    browser.waitUntil(() => AppPage.error.getText() === 'ERROR: Input must be an Integer')
    browser.pause(3000);
  })