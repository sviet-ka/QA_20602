import RegisterPage from '../pages/RegisterPage';

before(() => {
  RegisterPage.open();
});

describe('Verify all elements present on the Register page', () => {
  it('should verify header is present', () => {
    expect(RegisterPage.header.isDisplayed()).true;
  });

  it('should verify header text', () => {
    expect(RegisterPage.header.getText()).eq('User Register');
  });

    it('should verify paragraph is present', () => {
        expect(RegisterPage.paragraph.isDisplayed()).true;
    });

    it('should verify paragraph text', () => {
        expect(RegisterPage.paragraph.getText()).eq('Profiles with fictitious or dummy data will be deleted.');
    });

    it('should verify 4 required are present', () => {
        expect(RegisterPage.requiredFields.length).eq(4);
    });

    it('should fill out and submit form', () => {
        RegisterPage.firstNameInput.setValue('Bob');
        RegisterPage.lastNameInput.setValue('Grinko');
        RegisterPage.emailInput.setValue('123@gmail.com');
        RegisterPage.passwordInput.setValue('12345');
        RegisterPage.submitForm();
        browser.pause(5000)
    })



});
