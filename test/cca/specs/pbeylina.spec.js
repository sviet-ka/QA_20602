import AppPage from '../AppPage';

describe('BTN', () => {
  before(() => {
    AppPage.open();
  });

  it('should verify Delete Btn text is "DELETE" ', () => {
    expect(AppPage.deleteBtnDefaultCounter.getText()).eq('DELETE')
  });

  it('should verify Reset Btn is displayed', () => {
    expect(AppPage.resetBtnDefaultCounter.isDisplayed()).eq(true)
  });

  it('should verify Reset Btn text is "RESET" ', () => {
    expect(AppPage.resetBtnDefaultCounter.getText()).eq('RESET')
  });


  it('should verify Black Sub Btn is displayed', () => {
    expect(AppPage.blackBtn.isDisplayed()).eq(true)
  });

  it('should verify default Black Sub Btns are -1, -2, -3', () => {
    browser.refresh();
    expect(AppPage.blackBtn.getText()).eq('-1');
  });

  it("should verify LF2 doesn't accept any letters", () => {
    browser.refresh();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    AppPage.lF2.clearValue();
    AppPage.lF2.setValue('e');
    browser.pause(3000);
    expect(AppPage.lF2.getValue()).eq(''); // with 'e'-fail  with ''- pass, CCA 236 expected '' to equal 'e'
    expect(AppPage.error.isDisplayed()).eq(true);
  });

  it("should verify LF2 doesn't accept dot '.' ", () => {
    browser.refresh();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    AppPage.lF2.clearValue();
    AppPage.lF2.setValue('.');
    browser.pause(3000);
    expect(AppPage.lF2.getValue()).eq(''); // with '.'-fail  with ''- pass, CCA 305 expected '' to equal '.'
    expect(AppPage.error.isDisplayed()).eq(true);
  });

  it('should verify Error is throw when value in LF2 < LF1', ()=> {
    browser.refresh();
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    AppPage.lF2.clearValue();
    AppPage.lF2.setValue('5');
    browser.pause(3000);
    AppPage.leftPlaceholder.click();
    AppPage.lF1.clearValue();
    AppPage.lF1.setValue(6);
    browser.pause(3000);

    expect(AppPage.error.getText()).eq('ERROR: Lower Limit Must be Less than Upper Limit');
  });

});