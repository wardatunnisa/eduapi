describe('Create Update User', () => {

    var newUser = {
        "name": "Warda",
        "job": "Trader"
    }
    it('Put', () => {
        cy.request('PUT', 'https://reqres.in/api/users/2', newUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(newUser.name)
    })
 });
    
})

