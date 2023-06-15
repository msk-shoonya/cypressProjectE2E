describe("HTTP Requests", () => {
    it("GET call", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
            .its("status").should("equal", 200)
    })

    it("POST Call", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts/",
            body: {
                title: "I am a test post call",
                body: "Cypress test post call",
                userId: 1
            }
        })
            .its('status').should('equal', 201)
    })

    it("PUT call", () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'I am a test PUT call',
                body: 'I am going to update the body',
                id: 1
            }
        })
            .its('status').should('equal', 200);
    })

    it("Delete Call", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
            .its('status').should('equal', 200);
    })
})