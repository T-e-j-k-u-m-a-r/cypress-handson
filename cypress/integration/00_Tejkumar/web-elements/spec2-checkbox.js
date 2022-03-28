describe('CB', function() {

    before(function() {
        cy.visit('https://demoqa.com/checkbox')
        cy.viewport('macbook-16')
    })

    it('Handling checkbox', function() {

        cy.get(`label[for='tree-node-home'] span.rct-checkbox`).as('checkbox')

        cy.get('@checkbox').check()
            //verify if checked

        cy.get('@checkbox').uncheck()
            //verify if unchecked

    });
})