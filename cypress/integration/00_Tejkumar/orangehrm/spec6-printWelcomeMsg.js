describe('Misc Activity', function() {

    before(function() {
        cy.visit('/')
        cy.fixture("emp").then(function(data) {
            this.data = data;
        })
    })

    it('Print welcome note', function() {

        // cy.title().should('eq', 'OrangeHRM')
        // cy.contains('LOGIN Panel').should('have.attr', 'id')
        // cy.contains('LOGIN Panel').invoke('attr', 'id').should('eq', 'logInPanelHeading')

        //login test
        cy.get('#divUsername input#txtUsername').type(this.data.username)
        cy.get('#divPassword input#txtPassword').type(this.data.password)
        cy.get('#divLoginButton input#btnLogin').click()

        //Assert
        // cy.url().should('contain', 'dashboard')
        // cy.get('#welcome').should('contain', 'Welcome')
        // cy.contains('Dashboard').should('be.visible')

        //print the welcome note
        cy.get('#welcome').then(function(welcomeNote) {
            console.log(welcomeNote.text());
        })

        cy.get('#welcome').invoke('attr', 'class', 'panelTrigger')


    });

})