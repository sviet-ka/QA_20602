import AppPage from '../AppPage.js';

before(() => {
    AppPage.open();
});

describe('Default Counter', () => {
  it('should verify that the Header is displayed ', () => {
    browser.refresh();
    expect(AppPage.header.isDisplayed()).true;
  });

  it('should verify that the Header text is "Counters" ', () => {
    browser.refresh();
    expect(AppPage.header.getText()).eq('Counters');
  });

  it('should verify that Total Subheader is displayed', () => {
    browser.refresh();
    expect(AppPage.totalValue.isDisplayed()).true;
  });

  it('should verify that Total Subheader reads "Total: 0"', () => {
    browser.refresh();
    expect(AppPage.totalValue.getText()).eq('Total: 0');
  });

  it('should verify system allows to change value in LF1 when LF2 value is less than LF1', () => {
    browser.refresh();
    AppPage.lF1.click();
    AppPage.lF1.setValue('3');
    AppPage.lF2.click();
    AppPage.lF2.setValue('2');
    expect(AppPage.lF1.isEnabled()).true;
  });

  it('should verify that LF2 field displays "Change step options?" placeholder ', () => {
    browser.refresh();
    expect(AppPage.leftPlaceholder.isDisplayed()).true;
  });

  it('should verify that LF2  displays "Change step options?" placeholder till user click on it', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    expect(AppPage.leftPlaceholder.getText()).not.eq('Change Step Options?');
  });

  it('should verify that LF2 accepts 1 if LF1 is empty" placeholder ', () => {
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    browser.keys('Backspace');
    AppPage.lF2.setValue('1');
    AppPage.header.click();
    expect(AppPage.lF2.getValue()).eq('1');
  });
});

