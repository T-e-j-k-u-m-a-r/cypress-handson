describe('JS Alerts', function() {

    before(function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Simple alerts', () => {

        cy.contains('Click for JS Alert').click()

        cy.on('window:alert', function(text) {
            expect(text).to.eq('I am a JS Alert');
        })

        cy.get('p#result').should('contain', 'You successfully clicked an alert')
        cy.get('p#result').then(function(result) {
            console.log(result.text());
        })
        cy.wait(3000)
    });

    it('Confirm alerts - Positive Flow', () => {

        cy.contains('Click for JS Confirm').click()

        cy.on('window:confirm', function(text) {
            expect(text).to.eq('I am a JS Confirm');
        })
        cy.get('p#result').should('contain', 'You clicked: Ok')
        cy.get('p#result').then(function(result) {
            console.log(result.text());
        })
        cy.wait(3000)
    });

    it('Confirm alerts - Negative Flow', () => {

        cy.contains('Click for JS Confirm').click()

        cy.on('window:confirm', function(text) {
            expect(text).to.eq('I am a JS Confirm');
            return false;

        })
        cy.get('p#result').should('contain', 'You clicked: Cancel')
        cy.get('p#result').then(function(result) {
            console.log(result.text());
        })
        cy.wait(3000)
    });


    it('Prompt Alerts - Positive flow', () => {

        cy.window().then(function($win) {
            cy.stub($win, 'prompt').returns('Im prompt alert - Positive path')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('p#result').then(function(result) {
            console.log(result.text());
        })
    });

    it('Prompt Alerts - Negative flow', () => {

        cy.window().then(function($win) {

            cy.stub($win, 'prompt').returns(false)
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('p#result').then(function(result) {
            console.log(result.text());
        })

    });


})