describe('Basic Auth', () => {

    it('Successfully login by appending username and password in URL', () => {
      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
      cy.get('p').contains('Congratulations! You must have the proper credentials.')
    })

    it('Successfully login using Headers', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failedOnStatusCode: false
        })
        cy.get('p').contains('Congratulations! You must have the proper credentials.')
    });
  });
