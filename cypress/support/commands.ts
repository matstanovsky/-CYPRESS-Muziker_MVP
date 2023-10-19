/// <reference types="cypress" />

import { CONSENT_COOKIE_NAME, CONSENT_COOKIE_VALUE } from "./pages/cookiesPage";

// https://on.cypress.io/custom-commands
Cypress.Commands.add('setCookiesConsent' , () => { cy.setCookie(CONSENT_COOKIE_NAME,CONSENT_COOKIE_VALUE) });

declare global {
    namespace Cypress {
        interface Chainable {
            setCookiesConsent(): Chainable<void>;
        }
    }
}