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


Cypress.Commands.add('login', (route) => {
    const username = "demo.pnrr"
    const password = "PnR2PerL1t4la!Dm1ss!.12!"
    /* cy.session([username, password],  () => { */
        cy.visit(route)
        cy.get('.visible-md input[id="signInFormUsername"]').should("be.visible").type(username)
        cy.get('.visible-md input[id="signInFormPassword"]').should("be.visible").type(password)
        cy.get('.visible-md input[name="signInSubmitButton"]').click()
        
    /* }) */
  })
  
