describe('API Testing on reqres.in with simplified requests', () => {

    // Test Case 1: POST - Create a new user
    it('Register', () => {
        cy.apiRequest('POST', '/public/v2/users', {
            body: {
                name: 'John Doe2',
                email: 'jo3h4doe@yopmail2.com',
                gender: 'male',
                status: 'active'
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('email');

        });
    });

});
