Cypress.Commands.add('addPet', (petData) => 
    cy.request({
        url: '/v2/pet', 
        method: 'POST',
        body: petData,
    })
);

Cypress.Commands.add('getPetById', (petId) => 
    cy.request({
        url: '/v2/pet/' + petId, 
        method: 'GET',
    })
);

Cypress.Commands.add('deletePet', (petId, api_key) => 
    cy.request({
        url: '/v2/pet/' + petId, 
        method: 'DELETE',
        headers: {
            'api_key': api_key
        }
    })
);