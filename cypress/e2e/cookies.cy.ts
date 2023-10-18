import { AGREE_LABEL, BUTTON_SUCCESS_CLASS_NAME, CONSENT_COOKIE_NAME, CONSENT_COOKIE_VALUE, DISABLED_LABEL, DISAGREE_AND_SETUP_LABEL, ENABLED_LABEL } from "../support/pages/cookiesPage";

describe('Cookies alert', () => {
  beforeEach(()=>{cy.visit('/')});
  it('Agree button is displayed and with correct text', () => {
    cy.get(BUTTON_SUCCESS_CLASS_NAME).contains(AGREE_LABEL)
      .should('exist')
      .should('be.visible')
  });
  it('Disagree and setup button is displayed and with correct text', () => {
    cy.get(BUTTON_SUCCESS_CLASS_NAME).contains(DISAGREE_AND_SETUP_LABEL)
      .should('exist')
      .should('be.visible')
  })
  it('Disagree_and_setup button navigates to correct page with correct elements', () => {
    cy.get(BUTTON_SUCCESS_CLASS_NAME).contains(DISAGREE_AND_SETUP_LABEL).click({force:true});
    
    cy.contains("Potrebné cookies").should('exist')
      .next().should('contains.text',ENABLED_LABEL);
    
    cy.contains("Analytické cookies").should('exist')
      .next().should('contains.text',DISABLED_LABEL);
    
    cy.get("*[class='mzkr-modal-close-trigger']").click();
  })
  it('Cookie consent set correct cookie', () => {
    cy.get(BUTTON_SUCCESS_CLASS_NAME).contains(AGREE_LABEL).click();
    cy.getCookie(CONSENT_COOKIE_NAME).should('have.property','value',CONSENT_COOKIE_VALUE);
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.setCookiesConsent();
    cy.visit('/audio-video-tech');
  })
})