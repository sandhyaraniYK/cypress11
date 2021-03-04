export class Login_Page{

    loginPage_username='#uname'
    loginPage_password='#pwd'
    loginPage_loginButton='[type="submit"]'

    loginWithValidCredentials(username:string,password:string){
        cy.get(this.loginPage_username).type(username)
        cy.get(this.loginPage_password).type(password)
        cy.get(this.loginPage_loginButton).click()
        cy.contains('Login Successful')
        cy.clickLink('here')
        

    }
    loginWithInValidCredentials(username:string,password:string){
        cy.get(this.loginPage_username).type(username)
        cy.get(this.loginPage_password).type(password)
        cy.get(this.loginPage_loginButton).click()
        cy.on('window:alert', (txt)=>{
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })
        //cy.contains('Login unsuccessful')

    }
    navigate(url:string){
        cy.visit(url)

    }
    enterUsername(username:string){
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(password:string){
        cy.get(this.loginPage_password).type(password)
    }
    ClickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }

}