export const userLoginIcon = ()=>{return cy.get(`*[href*="/login"]`)};
export const userEmailInput = ()=>{return cy.get("#customer_email")};
export const userPasswordInput = ()=>{return cy.get("#customer_password")};
