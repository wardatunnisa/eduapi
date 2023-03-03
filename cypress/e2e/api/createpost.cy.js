describe('Create New User', () => {

    var user = {
        "name": "Wardatunnisa",
        "job": "Education"
    }
    it('POST', () => {
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).to.eq('Wardatunnisa')
        expect(response.body.job).to.eq('Education')
    })
 });
    
})
  