/// <reference types="cypress" />

describe('Handle pet store data', () => {
    var newOrderData;

    before(() => {
        cy.fixture('api/new-order-data').then((data) => {
            newOrderData = data;
        });
    });

    it('Place new order should return 200', () => {
        cy.placeOrder(newOrderData).then((response) => {
            expect(response.status).to.eq(200);            
        });
    });

    it('Find an order by ID should return data', () => {
        cy.getOrderById(4).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.not.null;
            expect(response.body.petId).to.not.null;
            expect(response.body.quantity).to.not.null;
            expect(response.body.shipDate).to.not.null;
            expect(response.body.status).to.not.null;
            expect(response.body.complete).to.not.null;
        });
    });

    it('Delete an order should return 200', () => {
        cy.deleteOrder(newOrderData.id).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});