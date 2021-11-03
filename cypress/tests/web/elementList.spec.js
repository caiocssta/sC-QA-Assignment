/// <reference types="cypress" />

describe("Validate sub-list", () => {
    before(() => {
        cy.visit('https://demoqa.com/elements')
    });
    
    it('Element sublist displays all elements', () => {
        let elementSubList = [
            'Text Box',
            'Check Box',
            'Radio Button',
            'Web Tables',
            'Buttons',
            'Links',
            'Broken Links - Images',
            'Upload and Download',
            'Dynamic Properties'
        ]
        cy.itemsAreDisplayed('Elements', elementSubList);
    });
    
    it('Forms sublist displays all elements', () => {
        let formsSubList = [
            'Practice Form'
        ]
        cy.itemsAreDisplayed('Forms', formsSubList);
    });

    it('Alerts, Frame & Windows sublist displays all elements', () => {
        let afwSubList = [
            'Browser Windows',
            'Alerts',
            'Frames',
            'Nested Frames',
            'Modal Dialogs'
        ]
        cy.itemsAreDisplayed('Alerts, Frame & Windows', afwSubList);
    });

    it('Widgets sublist displays all elements', () => {
        let widgetsSubList = [
            'Accordian',
            'Auto Complete',
            'Date Picker',
            'Slider',
            'Progress Bar',
            'Tabs',
            'Tool Tips',
            'Menu',
            'Select Menu',
        ]
        cy.itemsAreDisplayed('Widgets', widgetsSubList);
    });

    it('Interactions sublist displays all elements', () => {
        let interactionsSubList = [
            'Sortable',
            'Selectable',
            'Resizable',
            'Droppable',
            'Dragabble',
        ]
        cy.itemsAreDisplayed('Interactions', interactionsSubList);
    });

    it('Book Store Application sublist displays all elements', () => {
        let bookstoreSubList = [
            'Login',
            'Book Store',
            'Profile',
            'Book Store API',
        ]
        cy.itemsAreDisplayed('Book Store Application', bookstoreSubList);
    });
})