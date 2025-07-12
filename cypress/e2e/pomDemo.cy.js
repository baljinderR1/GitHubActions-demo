import { LoginPage } from "./pom_pages/login_page"

// This is cypress test with Page object model , we are calling created functions from login_page pages class
//describe('This test is demo for page object model design pattern', ()=> {

const loginPage1 = new LoginPage()

describe('All Login Tests', () => {


    // Note :- We can add beforeEach outside the describe box too then it will run before all the tests which are even outside the describe box
    // We can add beforeEach in e2e.js file under support file then it will run before all the tests by default 
   
    beforeEach(function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')

    })

    it(' Pom demo with valid login test 1', () => {

        loginPage1.enterUsername('Admin')

        loginPage1.enterPassword('admin123')

        loginPage1.clickLogin()

       cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()


    })

    it.skip(' Pom demo with invalid Login test 2 ', () => {

        loginPage1.enterUsername('AdminHello')

        loginPage1.enterPassword('admin12345')

        loginPage1.clickLogin()

    })

    it(' Pom demo with valid username and invalid pass Login test 3 ', () => {

 
         loginPage1.enterUsername('Admin')
 
         loginPage1.enterPassword('admin45678')
 
         loginPage1.clickLogin()
 
 
     })
 

})










