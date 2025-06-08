describe('This is assertion learning test', () =>{

it ('Checking some assertion', () => {

cy.visit('https://example.cypress.io')   
cy.contains('get').click()

// id is always written with # amd class is added with .
cy.get('#query-btn')
.should('contain','Button')
.should('have.class', 'query-btn')
.and('be.visible')
.and('be.enabled')


expect(true).to.be.true

assert.equal(4,'4', 'EQUAL')
assert.strictEqual(4,4, 'YES EQUAL')



})






})