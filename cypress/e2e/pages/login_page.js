export class LoginPage{

    username_textbox = "[data-test=username]"
    password_textbox = "[data-test=password]"
    login_button = "#login-button"
    login_credentials = "#login_credentials";


    enterUsername(username){
        cy.get(this.username_textbox).type(username) 
    }
    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }
    clickLogin(){
        cy.get(this.login_button).click()
    }
    loginWithUsername(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
      }
      
                
    }