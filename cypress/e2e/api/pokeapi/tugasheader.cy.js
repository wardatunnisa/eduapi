describe('Respon Body', () => {
    
    it('Successfully validate content type', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal('ditto')
            expect(response.body.types).to.deep.equal([
                { slot: 1, 
                    type: { 
                        name: 'normal', 
                        url: 'https://pokeapi.co/api/v2/type/1/'
                    }}
            ])
        })
    });
    

})