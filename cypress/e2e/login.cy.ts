import { userEmailInput, userPasswordInput } from "../support/pages/landingPage";
import { RANDOM_USER_EMAIL, REAL_USER_EMAIL, REAL_USER_PASSWORD, createAccount, forgetPasswordLink, loginButton } from "../support/pages/loginPage";

describe('login page tests', ()=>{
    beforeEach(()=>{
        cy.setCookiesConsent();
        cy.visit('/login');
    });

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

    it('random credentials do not log user and show alert', ()=> {
        userEmailInput().type(RANDOM_USER_EMAIL);
        userPasswordInput().type('my1RandomPassword!');
        loginButton().click();

        cy.get('.alert').contains("Prihlasovacie údaje sú nesprávne.")
            .should('exist')
            .should('be.visible');
        userEmailInput()
            .should('have.value',RANDOM_USER_EMAIL);        
    });

    it('Log real user show confirmation message', ()=> {
        userEmailInput().type(REAL_USER_EMAIL);
        userPasswordInput().type(REAL_USER_PASSWORD);
        loginButton().click();
        
        cy.get('.alert').contains("Úspešne prihlásený")
            .should('exist')
            .should('be.visible');
    });

    it('Create account button is available on login page and navigates to correct page', ()=> {
        createAccount()
            .should('exist')
            .should('be.visible')
            .click();

        cy.contains("Nový účet Muziker Smile")
            .should('exist')
            .should('be.visible');

        userEmailInput()
            .should('exist')
            .should('be.visible');

        userPasswordInput()
            .should('exist')
            .should('be.visible');
    });

    it('Forget password link works and navigates to correct page', ()=> {
        forgetPasswordLink()
            .should('exist')
            .should('be.visible')
            .click();
        
        userEmailInput()
            .should('exist')
            .should('be.visible');

        cy.contains('Problém s heslom?')
            .should('exist')
            .should('be.visible');
        
        cy.contains('Pošlite mi e-mail na obnovu hesla')
            .should('exist')
            .should('be.visible');
    })
})