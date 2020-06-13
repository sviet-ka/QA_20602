import AppPage from '../AppPage';

before(() => {
  AppPage.open();
});

  it('should Verify that Add buttons are displayed', () => {
    expect(AppPage.blackBtn.isDisplayed()).true;
  });

  it('should Verify that default Add buttons are 1,  2,  3', () => {
  expect(AppPage.blackBtn.getText()).eq('-1');
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
    browser.pause(3000);
  })

  it('should Verify that LF2 doesn’t accept special characters', () => {
    browser.refresh();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue('+');
    browser.pause(3000);
  })

  it('should Verify system allows to change value in LF2 when LF1 value is greater than LF2', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(4);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(5);
  })

  it('should Verify that 6 black square solid buttons (-1, -2, -3, 1, 2, 3, negative on the left side / positive on the right) by default', () => {
    browser.refresh();
    expect(AppPage.blackBtns.length).eq(6);
  })

  it('should Verify that the buttons are displayed according to the range', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.setValue(2);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.setValue(4);
    expect(AppPage.blackBtn.getText()).eq('-2');
    expect(AppPage.blackBtn.getText()).eq('-3');
    expect(AppPage.blackBtn.getText()).eq('-4');
    expect(AppPage.blackBtn.getText()).eq('2');
    expect(AppPage.blackBtn.getText()).eq('3');
    expect(AppPage.blackBtn.getText()).eq('4');
  })

  it('should Verify that the Error for non-integer values displays', () => {
    browser.refresh();
    AppPage.newCounterValue.clearValue();
    AppPage.newCounterValue.setValue('.');
    expect(AppPage.newCounterValue.getValue()).eq('');

    browser.pause(3000);
  })

