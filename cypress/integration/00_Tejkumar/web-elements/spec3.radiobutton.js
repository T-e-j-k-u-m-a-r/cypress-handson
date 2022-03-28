describe('RB', function() {

    before(function() {
        cy.visit('https://demoqa.com/radio-button')
    })

    it('Handling Radiobutton', function() {

        //using alias
        cy.get(`div.custom-radio input[type='radio']`).as('radioBtn')

        cy.get('@radioBtn').then(function(rdBtn) {
            cy.log('Total radio buttons: ' + rdBtn.length)
        })

        cy.get('@radioBtn').eq(0).should('not.be.checked')
        cy.get('@radioBtn').eq(0).click({ force: true })
        cy.get('@radioBtn').eq(0).should('be.checked')

        cy.get('@radioBtn').eq(1).should('not.be.checked')
        cy.get('@radioBtn').eq(1).click({ force: true })
        cy.get('@radioBtn').eq(1).should('be.checked')

        //check if 3rd radio button is disabled
        cy.get('@radioBtn').eq(2).should('be.disabled')

    });
})