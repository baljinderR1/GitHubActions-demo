export class LoginPage{



    enterUsername(username1){
      
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username1)

    }

    enterPassword(password2){
       
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password2)

    }

    clickLogin()   {
       
        cy.get('.oxd-button').click()
    

    }

}