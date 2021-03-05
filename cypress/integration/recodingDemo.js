
describe('records test',function(){
    
    it('my first recoreded test',function(){
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#female').check();
        cy.get('[name="option1"]').check();
        cy.get('#a').click();
        cy.get('[ondblclick="myFunction()"]').click();
        cy.get('[ondblclick="myFunction()"]').click();
        /* ==== End Cypress Studio ==== */
    })

})