describe('handling new window and tabs in browser', function() {

    before(function() {
        cy.visit(`https://demoqa.com/browser-windows`)

    })

    it('New Tab', () => {

        cy.get(`button#tabButton`).invoke('removeAttr', 'target').trigger('change')
        cy.get(`button#tabButton`).click()

    });

    it('New Window', () => {

        cy.get(`button#windowButton`).invoke('removeAttr', 'target').trigger('change')
        cy.get(`button#windowButton`).click()

    });
})