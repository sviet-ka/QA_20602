import AppPage from '../AppPage';
describe('iurii part', () => {
  before(() => {
    AppPage.open()
})

it('should be Error is thrown when value in LF1 is greater then the current value in LF2 ', () => {
  AppPage.leftPlaceholder.click();
  AppPage.lF1.setValue(5);
  expect($('.span:nth-child(1)').getText()).includes('Upper Limit Must be GREATER than Lower Limit');

});

  it('should  LF1 doesnt accept float number when user copy-paste it', ()=> {
    AppPage.leftPlaceholder.click();
    browser.keys('Backspace');
    browser.pause(1000);
    AppPage.lF1.setValue(2.3);
    expect($('.span:nth-child(1)').getText()).includes('Input must be an INTEGER');
  });

  it('should that LF1 doesnt accept negative integers', ()=> {
    AppPage.leftPlaceholder.click();
    browser.keys('Backspace');
    AppPage.lF1.setValue(-2);
    expect($('.span:nth-child(1)').getText()).includes('Must be greater than zero');
  });

  it('should LF1 doesn’t accept special characters ', ()=> {
    AppPage.leftPlaceholder.click();
    browser.keys('Backspace');
    browser.pause(1000);
    AppPage.lF1.setValue('+');
    expect($('.span:nth-child(1)').getText()).includes('Must be greater than zero');
  });

  it('should LF1 doesn’t accept invalid integer ', ()=> {
    AppPage.leftPlaceholder.click();
    browser.keys('Backspace');
    AppPage.lF1.setValue(10);
    expect($('.span:nth-child(1)').getText()).includes('Input must be an INTEGER');
  });

  it('should Delete Btn is enable by default ', ()=> {
    browser.waitUntil(() => AppPage.deleteBtnDefaultCounter.isClickable())

  });

  it('should Total count value displays the result sum value of all counter', ()=> {
    AppPage.resetBtnDefaultCounter.click();
    AppPage.newCounterValue.setValue(30);
    browser.pause(1000);
    AppPage.addNewCounterBtn.click();
    AppPage.newCounterValue.setValue(40);
    browser.pause(1000);
    AppPage.addNewCounterBtn.click();
    AppPage.newCounterValue.setValue(-10);
    browser.pause(1000);
    AppPage.addNewCounterBtn.click();
    expect(AppPage.totalValue.getText()).includes('60');
  });

  it('should Total count value changes if any Counter Value changes', ()=> {
    let blackBtnID2 = $('//body//div[2]//div[2]//button[7]'); // click on black btn '2' at ID2
    for (let i = 0; i < 5; i++) {
      blackBtnID2.click();
      browser.pause(500) //click 5 times
    }
    expect(AppPage.totalValue.getText()).includes('70');
  });

  it('should Total count value changes if any Counter Value reset', ()=> {
    AppPage.resetCounterById(1);
    expect(AppPage.totalValue.getText()).includes('40');
  });

  it('should Total count value changes if any of the Counters has been deleted', ()=> {
      AppPage.deleteCounterById(1);
      AppPage.deleteCounterById(4);
      expect(AppPage.totalValue.getText()).includes('50');
      browser.pause(5000)


  });

});