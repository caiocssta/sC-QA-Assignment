/// <reference types="cypress" />

describe('Handle users data', () => {
    var newUserData;

    before(() => {
        cy.fixture('api/new-user-data').then((data) => {
            newUserData = data;
        });
    });

    it('Create new user', () => {
        cy.createUser(newUserData).then((response) => {
            expect(response.status).to.eq(200);            
        });
    });

    it('Get user data by name', () => {
        cy.getUserByName(newUserData.username).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.not.null;         
            expect(response.body.firstName).to.not.null;         
            expect(response.body.lastName).to.not.null;           
            expect(response.body.email).to.not.null;           
            expect(response.body.password).to.not.null;           
            expect(response.body.phone).to.not.null;        
            expect(response.body.userStatus).to.not.null;        
        });
    });

    it('Login user', () => {
        cy.loginUser(newUserData.username, newUserData.password).then((response) => {
            expect(response.status).to.eq(200);   
            expect(response.body.message).to.contain('logged in user session');   
        });
    });

    it('Logout user', () => {
        cy.logoutUser().then((response) => {
            expect(response.status).to.eq(200);   
            expect(response.body.message).to.equal('ok');   
        });
    });
});