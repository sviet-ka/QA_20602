import AppPage from '../AppPage';

before(() => AppPage.open());
beforeEach(() => browser.refresh());

describe('MULTIPLE COUNTER BEHAVIOUR', () => {
  it('should check Total value is 0 when all counters are reset', () => {
    for (let i = 2; i < 6; i++) AppPage.addNewCounter(`Counter${i}`, 100);
    expect(AppPage.totalValue.getText()).eq('Total: 400');
    for (let i = 2; i < 6; i++) AppPage.resetCounterById(i);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
  });

  it('should check Total value is 0 when all counters are deleted', () => {
    for (let i = 2; i < 6; i++) AppPage.addNewCounter(`Counter${i}`, 100);
    expect(AppPage.totalValue.getText()).eq('Total: 400');
    for (let i = 5; i > 0; i--) AppPage.deleteCounterById(i);
    expect(AppPage.totalValue.getText()).eq('Total: 0');
  });

  it('should verify Total Value changes when last counter removed', () => {
    AppPage.addNewCounter('Counter', 100);
    AppPage.addNewCounter('Counter', 200);
    AppPage.addNewCounter('Counter', 300);
    expect(AppPage.totalValue.getText()).eq('Total: 600');
    AppPage.deleteCounterById(AppPage.lastCounterId());
    expect(AppPage.totalValue.getText()).eq('Total: 300');
  });

  it('should verify Counter is fully removed from page when Delete button clicked', () => {
    AppPage.deleteCounterById(1);
    expect(AppPage.counterWithIdDisplayed(1)).false;
  });

  it('should verify Counter3 Id will change when Counter2 is removed', () => {
    AppPage.addNewCounter('Counter2', 2);
    AppPage.addNewCounter('Counter3', 3);
    AppPage.deleteCounterById(2);
    browser.pause(500);
    expect(AppPage.getCounterNameById(2)).eq('Counter3');
  });

  it('should verify Total Value displays sum of Count Values of all counters', () => {
    AppPage.addNewCounter('NEWCOUNTER', 90)
    expect(AppPage.totalValue.getText()).includes('90');
  });

  it('should verify Total Value changes if any Count Value changes', () => {
    for (let i = 0; i < 5; i++) {
      AppPage.blackBtns[5].click();
      browser.pause(500);
    }
    expect(AppPage.totalValue.getText()).includes('15');
  });

});

describe('ADD NEW COUNTER', () => {
  it('should verify Edit Name Field is present', () => {
    expect(AppPage.editCounterNameField.isDisplayed()).eq(true);
  });

  it('should verify Edit Name Field reads "Default Counter" by default', () => {
    expect(AppPage.editCounterNameField.getValue()).eq('Default Counter');
  });

  it('should verify Edit Name Field is populated with correct value, Counter Name will change respectively', () => {
    expect(AppPage.defaultCounterName.getText()).eq('1. Default Counter');
    expect(AppPage.editCounterNameField.getValue()).eq('Default Counter');
    AppPage.editCounterNameField.setValue('NEW NAME');
    expect(AppPage.defaultCounterName.getText()).eq('1. NEW NAME');
  });
});

describe('DELETE/RESET COUNTER', () => {
  it('should verify Delete Btn is enabled by default ', () => {
    expect(AppPage.deleteBtnDefaultCounter.isEnabled()).true;
  });
})
