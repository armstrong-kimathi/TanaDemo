import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

const usernames = [
    //  'locked_out_user',
    'problem_user',
    'performance_glitch_user'];
    'standard_user',

describe('Sauce Demo', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
  });

  it('should log in with different usernames', () => {
    usernames.forEach(username => {
      loginPage.loginWithUsername(username, 'secret_sauce');


      cy.get('.bm-burger-button > button').click();
      cy.get('#logout_sidebar_link').click();
    });
  });
});
