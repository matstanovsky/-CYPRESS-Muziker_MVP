export const AGREE_LABEL:string = "Súhlasím";
export const BUTTON_SUCCESS_CLASS_LOCATOR: string = `*[class*="mzkr-btn-success"]`;
export const CONSENT_COOKIE_NAME: string = "muziker_consent";
export const CONSENT_COOKIE_VALUE: string = "%7B%22marketingCookie%22%3Atrue%2C%22analyticsCookie%22%3Atrue%7D"
export const DISABLED_LABEL: string = "Zakázané";
export const DISAGREE_AND_SETUP_LABEL:string = "Nesúhlasím a nastaviť";
export const ENABLE_ALL_LABEL: string = "Povoliť všetky";
export const ENABLE_SELECTED_LABEL: string = "Povoliť vybrané";
export const ENABLED_LABEL: string = "Povolené";
export const CONSENT_SELECTED_COOKIE_VALUE: string = "%7B%22marketingCookie%22%3Afalse%2C%22analyticsCookie%22%3Afalse%7D";

export function openCookiesSettings(){
    cy.get(BUTTON_SUCCESS_CLASS_LOCATOR).contains(DISAGREE_AND_SETUP_LABEL).click();
};