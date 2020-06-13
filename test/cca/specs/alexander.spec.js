import AppPage from '../AppPage';

describe('Limit Field 1 (LF1)', () => {
  before(() => {
    AppPage.open();
  });

  it('should verify that LF1 field displays "CHANGE STEP OPTIONS?"  placeholder', function() {
    expect(AppPage.leftPlaceholder.getText()).eq('CHANGE STEP OPTIONS?')
  });

  it('should verify that LF1 displays "CHANGE STEP OPTIONS?" placeholder till user clicks on it   ', function() {
    AppPage.leftPlaceholder.click()
    expect(AppPage.leftPlaceholder.getText()).not.eq('CHANGE STEP OPTIONS?')
  });

  it('should verify that LF1 accepts 1 if LF2 is empty ', function() {
    browser.refresh()
    AppPage.rightPlaceholder.click()
    AppPage.lF2.clearValue()
    AppPage.leftPlaceholder.click()
    AppPage.lF1.setValue(1)
    expect(AppPage.lF1.getAttribute('value')).eq('1')

  });

  it('should verify that no error displayed when LF1 is cleared', function() {
    browser.refresh()
    AppPage.leftPlaceholder.click()
    AppPage.lF1.clearValue()
    expect($('div[role="alert"]').isDisplayed()).to.be.false
  });

  it('should verify that LF1 accepts 5 if LF2 is empty ', function() {
    browser.refresh()
    AppPage.rightPlaceholder.click()
    AppPage.lF2.clearValue()
    AppPage.leftPlaceholder.click()
    AppPage.lF1.setValue(5)
    expect(AppPage.lF1.getAttribute('value')).eq('5')

  });

});
//
  describe('Subtraction and Addition Buttons Default state', () => {
    before(() => {
      AppPage.open();
    });

    it('should verify that the buttons are displayed according to the range difference after changing LF\'s', function() {
      browser.refresh()
      expect(AppPage.blackBtns.length).eq(6)
      AppPage.rightPlaceholder.click()
      AppPage.lF2.setValue(5)
      expect(AppPage.blackBtns.length).eq(10)

    });

  });

describe('Add/Remove Counters', () => {
  before(() => {
    AppPage.open();
  });

  it('should Verify that Add Name Field accepts any characters', function() {
    browser.refresh()
    AppPage.newCounterName.setValue('1Qgc!%&?@P+#jsa')
    expect($('div[role="alert"]').isDisplayed()).to.be.false
  });

  it('should Verify that Default Value Field  accepts only digits from 0 - 9 inclusive', function() {
    browser.refresh()
    AppPage.newCounterValue.setValue(1234567890)
    expect(AppPage.newCounterValue.getAttribute('value')).eq('1234567890')
    expect($('div[role="alert"]').isDisplayed()).to.be.false
  });

  it('should Verify that when input correct value for new counter and press Add Counter Btn new counter will show up below any existing counters', function() {
    browser.refresh()
    AppPage.addNewCounter('$@123Count', 12 )
    AppPage.counterWithIdDisplayed(2)
    expect(`Total: 12`).eq(AppPage.totalValue.getText())

  });

  it('should verify the error for invalid Add Name Field input', function() {
    browser.refresh()
    AppPage.newCounterName.setValue('qwerty')
    expect($('//div[@class="container"]//span[1]').getText())
          .eq('ERROR: Counter name should be longer than 6 characters')
  });

  it('should verify that Total Result value is \'0\' if page reloaded', function() {
    browser.refresh()
    const arrNum = [50, 40, -30]
    let sum = arrNum.reduce((acc, curr) => acc += curr, 0);

    for (let i = 0; i < arrNum.length; i++) {
      AppPage.addNewCounter(`name_${i}_`, arrNum[i])
    }
    expect(`Total: ${sum}`).eq(AppPage.totalValue.getText())
    browser.refresh()
    expect(`Total: 0`).eq(AppPage.totalValue.getText())

  });


});