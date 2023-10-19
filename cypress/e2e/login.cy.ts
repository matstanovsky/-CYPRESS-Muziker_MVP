import { userEmailInput, userPasswordInput } from "../support/pages/landingPage";
import { loginButton } from "../support/pages/loginPage";

describe('login page tests', ()=>{
    beforeEach(()=>{cy.visit('/login')});

    it('login page contains fields for credentials and submit button', ()=> {
        userEmailInput()
            .should('exist')
            .should('be.enabled')
            .should('be.visible');
        userPasswordInput()
            .should('exist')
            .should('be.enabled')
            .should('be.visible');  
        loginButton()
            .should('exist')
            .should('be.enabled')
            .should('be.visible'); 
    });

    it('random credentials do not login user', ()=> {
        userEmailInput().type('myRandom@email.intheworld');
    })
})