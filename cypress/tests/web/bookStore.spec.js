/// <reference types="cypress" />

import { loginSelectors, registerSelectors, profileSelectors, bookStoreSelectors } from "../../support/web/selectors";

describe("Validate Book Store functionalities", () => {
    let username, password;

    before(() => {
        cy.fixture('web/userInformation').then((props) => {
            username = props.username;
            password = props.password;
        });
    });

    beforeEach(() => {
        cy.loginWith({ username, password });
    });

    it('Books information are displayed correctly', () => {
        let bookInfo = {
            ISBN: '9781449325862',
            title: 'Git Pocket Guide',
            subTitle: 'A Working Introduction',
            author: 'Richard E. Silverman',
            publisher: 'O\'Reilly Media',
            totalPages: '234',
            description: 'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp',
            website: 'http://chimera.labs.oreilly.com/books/1230000000561/index.html'
        }

        cy.get(profileSelectors.goToStoreButton).click();
        cy.get(bookStoreSelectors.gitPocketBook).click();
        
        cy.contains(bookInfo.ISBN).should('be.visible');
        cy.contains(bookInfo.title).should('be.visible');
        cy.contains(bookInfo.subTitle).should('be.visible');
        cy.contains(bookInfo.author).should('be.visible');
        cy.contains(bookInfo.publisher).should('be.visible');
        cy.contains(bookInfo.totalPages).should('be.visible');
        cy.contains(bookInfo.description).should('be.visible');
        cy.contains(bookInfo.website).should('be.visible');

    });
    
    it('Add to Your Collection button works fine', () => {
        cy.get(profileSelectors.goToStoreButton).click();
        cy.get(bookStoreSelectors.gitPocketBook).click();

        cy.contains('Add To Your Collection').click();
        
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Book added to your collection.')
        });

        cy.contains('Profile').click({ force: true });
        cy.get(bookStoreSelectors.gitPocketBook).should('be.visible');
    });

    xit('Not able to add the same book twice', () => {
        cy.get(profileSelectors.goToStoreButton).click();
        cy.get(bookStoreSelectors.gitPocketBook).click();

        cy.contains('Add To Your Collection').click();
        
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Book already present in the your collection!.')
        });
    });

    it('Delete All Books button works fine', () => {    
        cy.contains(profileSelectors.deleteAllBooksButton).click();
        cy.get(profileSelectors.modalOkButton).click();

        cy.get(bookStoreSelectors.gitPocketBook).should('not.exist');
    });

    xit('Register page is correctly displayed', () => {
        cy.contains(profileSelectors.logOutButton).click();

        cy.get(loginSelectors.newUserButton).click();

        cy.get(registerSelectors.firstNameInput).should('be.visible').and('be.enabled');
        cy.get(registerSelectors.lastNameInput).should('be.visible').and('be.enabled');
        cy.get(registerSelectors.userNameInput).should('be.visible').and('be.enabled');
        cy.get(registerSelectors.passwordInput).should('be.visible').and('be.enabled');

        cy.get(registerSelectors.backToLoginButton).click();
    });

    xit('Log Out works fine', () => {    
        cy.contains(profileSelectors.logOutButton).click();

        cy.get(loginSelectors.userNameInput).should('be.visible');
        cy.get(loginSelectors.passwordInput).should('be.visible');
    });

})