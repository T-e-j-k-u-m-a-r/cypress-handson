describe('Print elements value', function() {

    before(function() {
        cy.visit('/')
    })

    it('Print the elements value & Assert then using expect', () => {

        cy.get(`#logInPanelHeading`).then(function(eleTxt) {
            console.log('Element text :: ' + eleTxt.text())
        })
        cy.get(`#logInPanelHeading`).should('contain', 'LOGIN Panel')
    });

})