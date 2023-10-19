export const RANDOM_USER_EMAIL: string = "myRandom@email.intheworld";
export const REAL_USER_EMAIL: string = "thisismojsen@gmail.com";
export const REAL_USER_PASSWORD: string = "Pivo123!";

export const loginButton = () => {return cy.get('[type="submit"][value="Prihlásiť"]');}
export const createAccount = () => {return cy.get('*[class*="mzkr-btn-primary"]').contains("Vytvoriť účet");}
export const forgetPasswordLink = () => {return cy.get('a').contains("Neviem svoje heslo");}