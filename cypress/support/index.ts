export {}
declare global {
    namespace Cypress {
        interface Chainable {
            setCookiesConsent(): Chainable<void>;
        }
    }
}