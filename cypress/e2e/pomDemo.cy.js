import{LoginPage} from "./pom_pages/login_page"

// This is cypress test with Page object model , we are calling created functions from login_page pages class
//describe('This test is demo for page object model design pattern', ()=> {

const loginPage1= new LoginPage()

it(' Pom demo', () =>{

cy.visit('https://opensource-demo.orangehrmlive.com/')

loginPage1.enterUsername('Admin')

loginPage1.enterPassword('admin123')

loginPage1.clickLogin()



// cy.get('#txtUsername').type('Admin')

// cy.get('#txtPassword').type('admin123')

// cy.get('#btnLogin').click()


})















