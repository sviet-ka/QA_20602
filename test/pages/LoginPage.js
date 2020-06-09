import BasePage from './BasePage';

class LoginPage extends BasePage {
  get header() {
    return $('h1');
  }

  get emailInput() {
    return $('[name="email"]');
  }

  get passwordInput() {
    return $('[name="password"]');
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  open() {
    super.open('https://stage.pasv.us/user/login');
  }
}

export default new LoginPage();
