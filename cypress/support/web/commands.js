import { loginSelectors, loginUrl, profileSelectors } from "../../tests/web/selectors";

Cypress.Commands.add('itemsAreDisplayed', (sectionName, itemList) => {
    cy.contains(sectionName).click({ force: true });
    itemList.forEach(element => {
        cy.get('li').contains(element).should('be.visible');
    });
    cy.contains(sectionName).click();
})

Cypress.Commands.add('loginWith', ({ username, password }) => {
    cy.visit(loginUrl);
    
    cy.get(loginSelectors.userNameInput).type(username);
    cy.get(loginSelectors.passwordInput).type(password);

    cy.get(loginSelectors.loginButton).click();

    cy.get(profileSelectors.usernameLabel).should('be.visible');
})
