import AppPage from '../AppPage';

beforeEach(() => {
  AppPage.open();
});

// describe('App Header Default state ', () => {
//   it('should Verify that the Header is displayed ', () => {
//     expect(AppPage.header.isDisplayed()).true;
//   });
//   it('should Verify that the Header text is "Counters"', () => {
//     expect(AppPage.header.getText()).eq('Counters');
//   });
//   it('should Verify that Total Subheader is displayed', () => {
//     expect(AppPage.totalValue.isDisplayed()).true;
//   });
//   it('should Verify that Total Subheader reads "Total: 0"', () => {
//     expect(AppPage.totalValue.getText()).eq('Total: 0');
//   });
// });
//
// describe('Default Counter', () => {
//   it('should Verify that Counter Name is displayed', () => {
//     expect(AppPage.defaultCounterName.isDisplayed()).true;
//   });
//   it('should Verify that Counter ID is 1', () => {
//     expect(AppPage.counterWithIdDisplayed(1)).true;
//   });
//   it('should Verify that Counter Name reads "1. Default Counter"', () => {
//     expect(AppPage.defaultCounterName.getText()).eq('1. Default Counter');
//   });
//   it('should Verify that Count Value is displayed', () => {
//     expect(AppPage.countValue.isDisplayed()).true;
//   });
//   it('should Verify that Count Value is 0 by default', () => {
//     expect(AppPage.countValue.getText()).eq('0');
//   });
//   it('should Verify that Limit Field (LF1) is displayed', () => {
//     AppPage.leftPlaceholder.click();
//     expect(AppPage.lF1.isDisplayed()).true;
//   });
//   it('should Verify that LF1 placeholder text is "CHANGE STEP OPTIONS?"', () => {
//     expect(AppPage.leftPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
//   });
//   it('should Verify that Limit Field (LF2) is displayed', () => {
//     AppPage.rightPlaceholder.click();
//     expect(AppPage.lF2.isDisplayed()).true;
//   });
//   it('should Verify that LF2 placeholder text is "CHANGE STEP OPTIONS?"', () => {
//     expect(AppPage.rightPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
//   });
//   it('should Verify that Delete Button is displayed', () => {
//     expect(AppPage.deleteBtnDefaultCounter.isDisplayed()).true;
//   });
//   it('should Verify that Delete Button text is "DELETE"', () => {
//     expect(AppPage.deleteBtnDefaultCounter.getText()).eq('DELETE');
//   });
//   it('should Verify that Reset Button is displayed', () => {
//     expect(AppPage.resetBtnDefaultCounter.isDisplayed()).true;
//   });
//   it('should Verify that Reset Button text is "RESET"', () => {
//     expect(AppPage.resetBtnDefaultCounter.getText()).eq('RESET');
//   });
//   it('should Verify that Black Sub buttons are displayed and equal -1, -2, -3', () => {
//     const subButtons = AppPage.blackBtns.map(el => el.getText()).filter(el => el < 0);
//     expect(subButtons).deep.equal(['-1', '-2', '-3']);
//   });
//   it('should Verify that Add buttons are displayed and equal 1, 2, 3', () => {
//     const addButtons = AppPage.blackBtns.map(el => el.getText()).filter(el => el > 0);
//     expect(addButtons).deep.equal(['1', '2', '3']);
//   });
//   it('should Verify that Enter Initial Count Label is displayed', () => {
//     expect(AppPage.initialCountLabel.isDisplayed()).true;
//   });
// });
//
// describe('Add Counter (Footer)', () => {
//   it('Verify that  Edit Initial Count Label reads "Enter Initial Count:"', () => {
//     expect(AppPage.initialCountLabel.getText()).eq('Enter Initial Count:');
//   });
//   it('should Verify Default Value Field initial value is 50', () => {
//     expect(AppPage.newCounterValue.getValue()).eq('50');
//   });
//   it('should Verify that Edit Name Label is displayed', () => {
//     expect(AppPage.editCounterNameLabel.isDisplayed()).true;
//   });
//   it('should Verify that Edit Name Label reads "Edit Counter Title:"', () => {
//     expect(AppPage.editCounterNameLabel.getText()).eq('Edit Counter Title:');
//   });
//   it('should Verify that Add Name Field is displayed', () => {
//     expect(AppPage.newCounterName.isDisplayed()).true;
//   });
//   it('should Verify that Add Name Field initial value is "Counter Name"', () => {
//     expect(AppPage.newCounterName.getValue()).eq('Counter Name');
//   });
//   it('should Verify that Add Counter Button displayed', () => {
//     expect(AppPage.addNewCounterBtn.isDisplayed()).true;
//   });
//   it('should Verify that Add Counter Button text is "ADD COUNTER"', () => {
//     expect(AppPage.addNewCounterBtn.getText()).eq('ADD COUNTER');
//   });
// });

// describe('Limit Field 1 (LF1)', () => {

  // it('should Verify that LF1 field displays "CHANGE STEP OPTIONS?" placeholder ', () => {
  //   expect(AppPage.leftPlaceholder.getText()).eq('CHANGE STEP OPTIONS?');
  // })
  // it('should Verify that LF1 displays "CHANGE STEP OPTIONS?" placeholder till user clicks on it', () => {
  //   AppPage.leftPlaceholder.click();
  //   expect(AppPage.leftPlaceholder.getText()).not.eq('CHANGE STEP OPTIONS?');
  // })
  // it('should Verify that LF1 accepts 1 if LF2 is empty', () => {
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.clearValue();
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(1);
  //   expect(AppPage.lF1.getValue()).eq('1');
  // })
  // it('should Verify that no error displayed when LF1 is cleared', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.clearValue();
  //   expect(AppPage.error.isDisplayed()).false;
  // })
  // it('should Verify that LF1 accepts 5 if LF2 is empty', () => {
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.clearValue();
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(5);
  //   expect(AppPage.lF1.getValue()).eq('5');
  // })
  // it('should Verify that LF1 accepts 9 if LF2 is empty', () => {
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.clearValue();
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(9);
  //   expect(AppPage.lF1.getValue()).eq('9');
  // })
  // it('should Verify that LF1 accepts 5 if LF2 >= 5', () => {
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.setValue(5);
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(5);
  //   expect(AppPage.lF1.getValue()).eq('5');
  // })
  // it('should Verify that user is able to change value from the keyboard in LF1', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Backspace')
  //   browser.keys('2');
  //   expect(AppPage.lF1.getValue()).eq('2')
  // })
  // it('should Verify that user is able to change value with spinner in LF1', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Up arrow');
  //   expect(AppPage.lF1.getValue()).eq('2');
  // })
  // it('should Verify that user is not able to set value > 9 with spinner in LF1', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   for (let i = 1; i <= 9; i++) {
  //     browser.keys('Up arrow');
  //   }
  //   expect(AppPage.lF1.getValue()).eq('9');
  // })
  // it('should Verify that user is not able to set value < 1 with spinner in LF1', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click()
  //   browser.keys('Down arrow');
  //   expect(AppPage.lF1.getValue()).eq('1')
  // })
  // it('should Verify that Reset Limit Field Btn is displayed after a value is entered in LF1', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Backspace');
  //   browser.keys('2');
  //   expect(AppPage.leftResetBtn.isDisplayed()).true;
  // })
  // it('should Verify that user clicks Reset Limit Field Btn in LF1, LF1 resets to default value (1) and placeholder appears', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(2);
  //   AppPage.leftResetBtn.click();
  //   AppPage.leftPlaceholder.click();
  //   expect(AppPage.lF1.getValue()).eq('1')
  // })
  // it("should Verify that LF1 doesn't accept any letters", () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click()
  //   browser.keys('Backspace')
  //   browser.keys('c');
  //   expect(AppPage.lF1.getValue()).eq('');
  //   expect(AppPage.error.isDisplayed()).true;
  // })
  // it("should Verify that LF1  doesn't accept . (dot)", () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click()
  //   browser.keys('Backspace')
  //   browser.keys('.');
  //   expect(AppPage.lF1.getValue()).eq('');
  //   expect(AppPage.error.isDisplayed()).true;
  // })
  // it('should Verify that Error is thrown when value in LF1 is greater then the current value in LF2', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Backspace');
  //   browser.keys('5');
  //   expect(AppPage.error.isDisplayed()).true;
  // })
  // it("should Verify that LF1 doesn't accept float number when user copy/paste it", () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(2.3);
  //   expect(AppPage.lF1.getValue()).eq('');
  //   expect(AppPage.error.isDisplayed()).true;
  // })
  // it('should Verify that LF1 doesn’t accept negative integers', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Backspace');
  //   browser.keys('-2');
  //   expect(AppPage.lF1.getValue()).eq('');
  //   expect(AppPage.error.isDisplayed()).true;
  // })
  // it("should Verify that LF1 doesn’t accept special characters", () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Backspace');
  //   browser.keys('+');
  //   expect(AppPage.lF1.getValue()).eq('');
  //   expect(AppPage.error.isDisplayed()).true;
  // })
  // it("Verify that LF1 doesn’t accept invalid integer", () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.click();
  //   browser.keys('Backspace');
  //   browser.keys('10');
  //   expect(AppPage.lF1.getValue()).eq('');
  //   expect(AppPage.error.isDisplayed()).true;
  // })
//   it('Verify system allows to change value in LF1 when LF2 value is less than LF1', () => {
//     AppPage.leftPlaceholder.click();
//     AppPage.lF1.click();
//     browser.keys('Backspace');
//     browser.keys('3');
//     AppPage.rightPlaceholder.click();
//     AppPage.lF2.click()
//     browser.keys('Backspace');
//     browser.keys('2');
//     AppPage.leftPlaceholder.click();
//     AppPage.lF1.click();
//     browser.keys('Backspace');
//     browser.keys('1');
//     expect(AppPage.lF1.getValue()).eq('1');
//   })
// })

// describe('Limit Field 2 (LF2)', () => {
//
// })

describe('Subtraction and Addition Buttons Default state', () => {
  // it('Verify that 6 black square solid buttons (-1, -2, -3, 1, 2, 3, negative on the left side / positive on the right) by default', () => {
  //   expect(AppPage.blackBtns.length).eq(6)
  //   expect(AppPage.blackBtns.map(el => el.getText())).deep.eq(['-1', '-2', '-3', '1', '2', '3']);
  // })
  // it('Verify that the buttons are displayed according to the range', () => {
  //   AppPage.leftPlaceholder.click();
  //   AppPage.lF1.setValue(2);
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.setValue(4);
  //   expect(AppPage.blackBtns.map(el => el.getText())).deep.eq(['-2', '-3', '-4', '2', '3', '4']);
  // })
  // it('The count value(CV) increases when user clicks addition buttons', () => {
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.setValue(5);
  //   AppPage.clickBlackButton('5')
  //   expect(AppPage.countValue.getText()).eq('5');
  // })
  // it('The count value(CV) decreases when user clicks subtraction buttons', () => {
  //   AppPage.rightPlaceholder.click();
  //   AppPage.lF2.setValue(5);
  //   AppPage.clickBlackButton('-5');
  //   expect(AppPage.countValue.getText()).eq('-5');
  // })
  it('Total value increases when user clicks addition buttons', () => {
      AppPage.rightPlaceholder.click();
      AppPage.lF2.setValue(5);
      AppPage.clickBlackButton('5');
      expect(AppPage.totalValue.getText()).eq('5');
  })
})



