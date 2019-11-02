describe('POST', function() {
    it('Should create a new car', function() {
      cy.visit('/')
      cy.get('.btn-primary.my-2').click();
      cy.get('#createModal button[type=submit]').click();
    })
  })