describe('Hello World Test', () =>{


    it('Hello world test ', ()=>{  
   
    cy.visit('https://www.browserstack.com');

   // cy.contains('Welcome back, Baljinder');
    cy.viewport('macbook-15');
    cy.contains('Hello world2 new 123 and ABCD');
    
    });
});