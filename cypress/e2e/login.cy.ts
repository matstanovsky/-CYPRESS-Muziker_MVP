import { loginButton } from "../support/pages/landingPage";

describe('Login page and method', () => {
    beforeEach(()=>{cy.visit('/')});
it.only('click on login button', ()=>{
    loginButton().click();
})
})