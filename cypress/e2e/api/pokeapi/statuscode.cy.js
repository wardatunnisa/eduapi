// <reference types="cypress" />
describe('Automation API with Pokeapi', () => {
    
    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Succesfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_page=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
    
})