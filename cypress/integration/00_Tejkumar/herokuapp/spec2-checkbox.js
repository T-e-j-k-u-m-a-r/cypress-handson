describe('spec2', function() {

    it('Handling checkbox', () => {

        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get('form#checkboxes input').then(function(totalChkBox) {
            console.log('Total checkboxes: ' + totalChkBox.length);
        })

        //verify if the 1st checkbox is unchecked
        cy.get('form#checkboxes input').first().should('not.be.checked')

        //verify if the 2nd checkbox is checked
        cy.get('form#checkboxes input').last().should('be.checked')

    });
})