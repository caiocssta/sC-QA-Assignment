Cypress.Commands.add('createUser', (userData) => 
    cy.request({
        url: '/v2/user', 
        method: 'POST',
        body: userData,
    })
);

Cypress.Commands.add('getUserByName', (username) => 
    cy.request({
        url: '/v2/user/' + username, 
        method: 'GET',
    })
);  

Cypress.Commands.add('loginUser', (user, password) => 
    cy.request({
        url: '/v2/user/login?username=' + user + '&password=' + password, 
        method: 'GET',
    })
);

Cypress.Commands.add('logoutUser', () => 
    cy.request({
        url: '/v2/user/logout', 
        method: 'GET',
    })
);