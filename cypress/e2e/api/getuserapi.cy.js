// <reference types="cypress" />

describe('Get User List', () => {
    it('Notify the list users will dispalayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_page=1',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
      })
});