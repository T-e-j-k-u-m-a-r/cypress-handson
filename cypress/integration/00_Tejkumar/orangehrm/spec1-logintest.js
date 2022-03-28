describe('Orange HRM', function() {

    before(function() {
        cy.visit('/')
        cy.fixture("emp").then(function(data) {
            this.data = data;
        })
    })

    it('TC01: Login test - valid flow', function() {

        cy.title().should('eq', 'OrangeHRM')
        cy.contains('LOGIN Panel').should('have.attr', 'id')
        cy.contains('LOGIN Panel').invoke('attr', 'id').should('eq', 'logInPanelHeading')

        //login test
        cy.get('#divUsername input#txtUsername').type(this.data.username)
        cy.get('#divPassword input#txtPassword').type(this.data.password)
        cy.get('#divLoginButton input#btnLogin').click()

        //Assert
        cy.url().should('contain', 'dashboard')
        cy.get('#welcome').should('contain', 'Welcome')
        cy.contains('Dashboard').should('be.visible')

        //logout
        cy.get('#welcome').click()
        cy.contains('Logout').click()

    });

    it.skip('TC02: Login test - Invalid flow', function() {

        //login test
        cy.get('#divUsername input#txtUsername').type(this.data.username)
        cy.get('#divPassword input#txtPassword').type(this.data.password)
        cy.get('#divLoginButton input#btnLogin').click()

        //Assert
        cy.url().should('contain', 'dashboard')

    });
})