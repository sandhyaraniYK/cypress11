describe('read write demo',function(){

    beforeEach(function(){
    cy.fixture('example.json').as('data')
    })

it('read file using fixture',function(){
    cy.fixture('example.json')
    .its('name').should('eq','cypress')
    cy.log(this.data.name)
    cy.log(this.data.email)

  })
  it('read file using readfile cmd',function(){
      cy.readFile('./cypress/fixtures/example.json')
      .its('name').should('eq','cypress')
  })
  it('write file',function(){
      cy.writeFile('sample.txt','i am learning cypress')
      cy.writeFile('sample.txt','this is intresting',{flag:'a+'})

  })
})