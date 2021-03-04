
import{Login_Page} from '../Pages/login_page'
beforeEach(function(){
    cy.log('i am outside describe block')
})
describe('all my login tests',function(){
    let login_page=new Login_Page()

    beforeEach(function(){
        login_page.navigate('https://trytestingthis.netlify.app/')  
    })
it.only('login test-validcreds',()=>{
 
    
    login_page.loginWithValidCredentials('test','test')
    
})
it('login test-invalidcreds',()=>{
    
    login_page.loginWithInValidCredentials('abc','123')
    
})
    
})

