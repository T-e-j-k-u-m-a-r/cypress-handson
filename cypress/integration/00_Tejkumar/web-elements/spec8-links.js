describe('Links', function() {
    it('Handling links', () => {

        cy.visit(`https://demoqa.com/links`)

        cy.get(`#simpleLink`).invoke('removeAttr', 'target').trigger('change')

        cy.get(`#simpleLink`).click()

        //assert the target link
        cy.url().should('eq', 'https://demoqa.com/')

    });
})