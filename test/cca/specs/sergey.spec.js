import AppPage from '../AppPage';

function removeCounterById(id){
  $(`button[id="${id}"]`).click()
}

function addNewCounter(name, count){
  $('input[name="name"]').setValue(name);
  $('input[name="value"]').setValue(count);
  $('//button[text()="Add Counter"]').click();
}

before(() => {
  AppPage.open();
});

it('should add 2 more counters', () => {
  addNewCounter('counter2', 0);
  addNewCounter('counter3', 1000)
});

it('should check how fields selected', () => {
  $$('button[name="negative"]')[1].click();
  $('input[name="lower"]').setValue(2)
  browser.pause(3000);
});

it('should remove counter by ID', () => {
  removeCounterById(3);
  removeCounterById(2);
  removeCounterById(1);
  browser.pause(2000)
});
