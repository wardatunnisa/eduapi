describe('Delete User', () => {
    it('DELETE', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).equal(204)
    })
 });
    
})