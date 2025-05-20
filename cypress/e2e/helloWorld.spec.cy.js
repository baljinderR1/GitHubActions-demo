describe('Hello World Test', () =>{


    it('Hello world test ', ()=>{  
   
    cy.visit('https://www.browserstack.com');

   // cy.contains('Welcome back, Baljinder');
    cy.viewport('macbook-15');
    });
});