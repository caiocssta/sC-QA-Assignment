/// <reference types="cypress" />

describe('Handle pets data', () => {
    var newPetData, api_key;

    before(() => {
        cy.fixture('api/new-pet-data').then((data) => {
            newPetData = data;
        });
        cy.fixture('api/api-key').then((data) => {
            api_key = data.key;
        });
    });

    it('Add new pet to store functionality should return 200', () => {
        cy.addPet(newPetData).then((response) => {
            expect(response.status).to.eq(200);            
        });
    });

    it('Find a pet by ID should return correct pet data', () => {
        cy.getPetById(newPetData.id).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.not.null;
            expect(response.body.name).to.not.null;
            expect(response.body.status).to.not.null;
        });
    });

    it('Delete a pet should return 200', () => {
        cy.deletePet(newPetData.id, api_key).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});