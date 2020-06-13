import AppPage from '../AppPage';

function removeCounterById(id) {
  $(`button[id="${id}"]`).click();
}

function addNewCounter(name, count) {
  $('input[name="name"]').setValue(name);
  $('input[name="value"]').setValue(count);
  $('//button[text()="Add Counter"]').click();
}

describe('PRACTICE', () => {
  before(() => {
    AppPage.open();
  });

  it('should add 2 more counters', () => {
    addNewCounter('counter2', 0);
    addNewCounter('counter3', 1000);
  });

  it('should check how fields selected', () => {
    $$('button[name="negative"]')[1].click();
    $('input[name="lower"]').setValue(2);
    browser.pause(3000);
  });

  it('should remove counter by ID', () => {
    removeCounterById(3);
    removeCounterById(2);
    removeCounterById(1);
    browser.pause(2000);
  });

  it('should change value with spinner in LF1', () => {
    browser.refresh();
    $('button[name="negative"]').click();
    $('input[name="lower"]').click();
    browser.pause(2000);
    browser.keys('Up arrow');
    browser.pause(2000);
  });

  it('should check buttons steps', () => {
    const buttons = $$('button[class*="btn-black"]').map(el => el.getAttribute('step'));
    console.log('----------------------');
    console.log(buttons);
    browser.pause(2000);
    expect(buttons).deep.eq(['-2', '-3', '2', '3']);
  });

  it('should check how total value changes', () => {
    browser.refresh();
    for (let i = 0; i < 5; i++) {
      $$('button[class*="btn-black"]')[5].click();
      browser.pause(700);
    }
    expect($('span[class*="badge-primary"]').getText()).eq('15');
    expect($('h3.total-count').getText()).includes('15');
  });

  it('should check reset functionality', () => {
    browser.refresh();
    $('button[name="negative"]').click();
    $('button[name="positive"]').click();
    $('input[name="upper"]').setValue(5);
    $('input[name="lower"]').setValue(5);
    $$('button[class*="btn-black"]')[1].click();
    $('button[class*="reset"]').click();
    browser.pause(500);
  });

  it('should check multiple reset buttons behaviour', () => {
    browser.refresh();
    addNewCounter('counter2', 500);
    addNewCounter('counter3', 1000);
    $$('button[class*="reset"]')[1].click();
    $$('button[class*="reset"]')[2].click();
    browser.pause(2000);
  });
});
