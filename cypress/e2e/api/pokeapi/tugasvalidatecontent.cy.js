// <reference types="cypress" />
it('Succesfully validate content', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => {
    expect(response.body.abilities[0].ability.name).to.eq('limber')
  })
});