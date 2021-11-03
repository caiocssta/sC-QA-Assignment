Cypress.Commands.add('placeOrder', (orderData) => 
    cy.request({
        url: '/v2/store/order', 
        method: 'POST',
        body: orderData,
    })
);

Cypress.Commands.add('getOrderById', (orderId) => 
    cy.request({
        url: '/v2/store/order/' + orderId, 
        method: 'GET',
    })
);

Cypress.Commands.add('deleteOrder', (orderId) => 
    cy.request({
        url: '/v2/store/order/' + orderId, 
        method: 'DELETE',
    })
);