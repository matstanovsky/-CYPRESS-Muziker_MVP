import { userEmailInput, userLoginIcon, userPasswordInput } from "../support/pages/landingPage";
import { loginButton } from "../support/pages/loginPage";

describe('Login page and method', () => {
    beforeEach(()=>{
        cy.setCookiesConsent();
        cy.visit('/');
    });
    
it('click on login button and check if it navigates to login page', ()=>{
    userLoginIcon().click();
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
})