
///<reference types="cypress-downloadfile"/>
it('file upload demo',function(){

    cy.visit('http://tinyupload.com/')
    cy.get('[name="uploaded_file"]').attachFile('a.jpg')
    
})
it('file download demo',function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})
