describe('Alerts', function() {


    before(function() {
        cy.visit('https://demoqa.com/alerts')
    })
    it('Simple alert', () => {

        cy.on('window:alert', function(txt) {
            expect(txt).to.eq('You clicked a button')
            cy.get('button#alertButton').click()
        })

    });

    it('Confirm alert - +ve flow', () => {

        cy.get('button#confirmButton').click()

        cy.on('window:confirm', function(txt) {
            expect(txt).to.eq('Do you confirm action?')

        })

        cy.get('#confirmResult').then(function(result) {
            console.log(result);
        })
    });

    it('Confirm alert - -ve flow', () => {

        cy.get('button#confirmButton').click()

        cy.on('window:confirm', function(txt) {
            expect(txt).to.eq('Do you confirm action?')
            return false;
        })

        cy.get('#confirmResult').then(function(result) {
            console.log(result);
        })

    });

    it('Prompt alert +ve flow', () => {

        cy.window().then(function($win) {
            cy.stub($win, 'prompt').returns('Prompt alert - Positive flow...')
            cy.get(`#promtButton`).click()
        })

        cy.get('#promptResult').then(function(result) {
            console.log(result);
        })
    });

    it('Prompt alert -ve flow', () => {

        cy.window().then(function($win) {
            cy.stub($win, 'prompt').returns(false)
            cy.get(`#promtButton`).click()
        })

        cy.get('#promptResult').should('not.exist')

    });
})