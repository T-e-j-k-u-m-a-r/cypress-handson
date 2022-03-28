describe('spec1', function() {

    it('Add and remove and element', () => {

        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
            //verify title
        cy.title().should('contain', 'The Internet')

        //verify hostname
        cy.location().then(function(loc) {
            expect(loc.hostname).to.eq('the-internet.herokuapp.com')
        })

        //verify display of label name
        cy.get('div#content h3').should('contain', 'Add/Remove Elements')

        //verify display of button - Add Element
        cy.get('div#content div>button').should('contain', 'Add Element')

        //Add element 1
        cy.get('div#content div>button').click()

        //verify the created new element
        cy.get('div#elements button.added-manually').should('contain', 'Delete')

        //Delete element 1
        cy.get('div#elements button.added-manually').click();

        //Verify the deleted item is not present in the UI
        cy.get('div#elements button.added-manually').should('not.exist')

    });
})