it ('Assertions Demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain', 'Button')
    .and('have.class', 'query-btn')
    .and('have.id', 'query-btn')
    .and('be.visible')
    .and('be.enabled')

    expect(true).to.be.true
    assert.equal(4,4, 'Not Equal')
    // assert.strictEqual(4,'4', 'Not Equal')
    })