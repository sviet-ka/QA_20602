import BasePage from './BasePage';

class RegisterPage extends BasePage {
  get header() {
    return $('h1');
  }

  get paragraph() {
    return $('p');
  }

  get labelFirstName() {
    return $('label[for="firstName"]');
  }

  get requiredFields() {
    return $$('//span[@class="invalid-feedback w-auto ml-2"]');
  }

  get firstNameInput() {
    return $('[name="firstName"]');
  }

  get lastNameInput() {
    return $('[name="lastName"]');
  }

  get emailInput() {
    return $('[name="email"]');
  }

  get passwordInput() {
    return $('[name="password"]');
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }

  submitForm() {
    this.submitBtn.click();
  }

  open(path) {
    super.open('https://stage.pasv.us/user/register');
  }
}

export default new RegisterPage();
