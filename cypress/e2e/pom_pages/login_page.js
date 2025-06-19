export class LoginPage{

// added all the locator elements up here now 

 username_text= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
 password_value= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
 loginButton= '.oxd-button'



    enterUsername(user){
      
        cy.get(this.username_text).type(user)

    }

    enterPassword(pass){
       
        cy.get(this.password_value).type(pass)

    }

    clickLogin()   {
       
        cy.get(this.loginButton).click()
    

    }

}