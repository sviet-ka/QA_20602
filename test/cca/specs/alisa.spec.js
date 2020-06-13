import AppPage from "../AppPage";

it('shoul verify true', function () {
    expect(true).to.be.true
})

before( () => {
    AppPage.open();
})

describe('TEST DEFAULT COUNTER - NAME, ID, VALUE', () => {
    it('should verify Counter Name is displayed', () => {
        expect(AppPage.defaultCounterName.isDisplayed()).true;
    })

    it('should verify Counter Name ID is 1', () => {
        expect(AppPage.defaultCounterName.getText()).contains('1.')
    })

    it('should verify Counter Name reads correct text', () => {
        expect(AppPage.defaultCounterName.getText()).contains('Default Counter');
    })

    it('should verify Count Value is displayed', () => {
        expect(AppPage.countValue.isDisplayed()).true;
    })

    it('should verify Count Value is 0 by default', () => {
        expect(AppPage.countValue.getText()).eq('0');
    })

})