// cypress/integration/app.spec.js
/// <reference types="cypress" />


describe('Homepage', () => {
  it('home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000')

    //Check for header area is present
    cy.get('header')

    // Check for the title
    cy.get('h1').contains('NextJS Starter Template')

    // Check for the footer area is present
    cy.get('footer')
  })
})

const asModule = {}
export default asModule
