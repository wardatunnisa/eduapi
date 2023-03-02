describe('Reqres API Test', () => {
    it('Testing API GET', () => {
      cy.request('GET', 'https://reqres.in/api/users').then((response) => {
        expect(response.status).to.eq(200) //memastikan responnya 200
        expect(response.body).to.not.be.null //memastikan bodynya tidak null
        expect(response.body.data).to.have.length(6) //memastikan jumlah data di apinya ada 6
      })
    }) 
  })
  