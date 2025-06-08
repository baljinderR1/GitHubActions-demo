describe('Hello World Test', () =>{


    it('Hello world test ', ()=>{  
   
    cy.visit('https://google.com')

   cy.viewport('macbook-15'); 
  // cy.get('.gLFyf').type('Automation step by step{Enter}')
   cy.wait(2000)

  // cy.contains('Videos').click()

    
    cy.log('Hello world2 new 123 and ABCD');
    
    });
});