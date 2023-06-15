/// <Reference Types ="Cypress"/>

it ('Google search', function(){
cy.visit('https://www.google.com/');
cy.get('#L2AGLb > .QS5gu').click();
cy.get('#APjFqb',{timeout:5000}).type('Automation step by step');
cy.contains('Google Search').click();
})

it ('Google search', function(){
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type('Automation step by step')
    cy.contains('Google Search').click()
    })

it ('Google search', () => {
cy.visit('https://www.google.com/')
cy.get('#L2AGLb > .QS5gu').click()
cy.get('#APjFqb').type('Automation step by step{Enter}')
})