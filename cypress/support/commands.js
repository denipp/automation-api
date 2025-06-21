// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiRequest', (method, endpoint, options = {}) => {
    cy.request({
        method,
        url: `${Cypress.env('baseUrl') || 'https://gorest.co.in/'}${endpoint}`, failOnStatusCode: false,
        headers: {
            'x-api-key': 'reqres-free-v1',
            'Authorization': `Bearer 74ff0e178055c4d8d5508d581884a7bcb54c7de9e74bb21d2060398cda2f0b14`,
            ...options.headers,
        },
        body: options.body,
        ...options,
    });
});

