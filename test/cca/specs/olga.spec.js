import AppPage from '../AppPage';

describe('olga test cases 45-49 and 101-105', ()=>{
    // it('should verify olga', function() {
    //     expect(true).eq(true);
    // } );

  it('#45 should Verify that LF1 accepts 9 if LF2 is ? default', () => {

    AppPage.open();
    browser.pause(3000);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    browser.keys(9);
    browser.pause(3000);

    expect(AppPage.lF1.getValue()).eq(9);

  });

  it('#46 should Verify that LF1 accepts 5 if LF2 >= 5 ', () => {

    AppPage.open();
    browser.pause(3000);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    // AppPage.lF2.click().setValue(6);
    browser.keys('Backspace');
    browser.keys(6);
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    // AppPage.lF1.click().setValue(5);
    browser.keys('Backspace');
    browser.keys(5);
    browser.pause(3000);

    expect(AppPage.lF1.getValue()).eq(5);

  });

  it('#47 should VeVerify that user is able to change value from the keyboard in LF1 ', () => {

    AppPage.open();
    browser.pause(3000);
    AppPage.rightPlaceholder.click();
    AppPage.lF2.click();
    browser.keys('Backspace');
    browser.keys(6);
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.keys('Backspace');
    browser.keys(5);
    browser.pause(3000);

    expect(AppPage.lF1.getValue()).eq(5);

  });

  it('#48 Verify that user is able to change value with spinner in LF1 ', () => {

    AppPage.open();
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.pause(2000);
    browser.keys('Up arrow');
    browser.pause(2000);

    expect(AppPage.lF1.getValue()).eq(2);

  });

  it('#49 Verify that user is not able to set value > 9 with spinner in LF1 ', () => {

    AppPage.open();
    browser.refresh();
    AppPage.leftPlaceholder.click();
    AppPage.lF1.click();
    browser.pause(2000);
    for (let i = 0; i <= 9; i++) {
      browser.keys('Up arrow');
      browser.pause(700);
    }
    browser.pause(2000);

    expect(AppPage.lF1.getValue()).eq(9);

  });

  it('#101 Verify that click on the Delete Btn to delete an entire counter ', () => {

    AppPage.open();
    browser.refresh();
// Preconditions
    AppPage.addNewCounter('counter2', 30);
    AppPage.addNewCounter('counter3', 40);
    AppPage.addNewCounter('counter4', -10);

// Steps
    AppPage.deleteCounterById(1);
    AppPage.deleteCounterById(2);
    browser.pause(2000);

    expect(AppPage.totalValue.getValue()).eq(20);

  });

  it('#102 Verify that click on the Delete Btn to delete an entire counter ', () => {

    AppPage.open();
    browser.refresh();

// Steps
    AppPage.newCounterValue.click();
    // AppPage.newCounterValue.setValue(0);

    browser.keys('Backspace');
    browser.keys('Backspace');
    browser.keys('.');

    browser.pause(2000);

    expect(AppPage.newCounterValue.getValue()).eq(empty());

  });

  it('#103 Verify that Default Value Field for new counter doesn\'t accept letters ', () => {

    AppPage.open();
    browser.refresh();

// Steps

    const letters = "Hjdleujf";
    AppPage.newCounterValue.click();
    // AppPage.newCounterValue.setValue(0);

    browser.keys('Backspace');
    browser.keys('Backspace');
    browser.keys(letters);

    browser.pause(2000);

    expect(AppPage.newCounterValue.getValue()).eq();

  });
});



