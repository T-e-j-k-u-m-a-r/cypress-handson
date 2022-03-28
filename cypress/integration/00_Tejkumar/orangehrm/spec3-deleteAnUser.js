describe('CRUD Operator', function() {

    before(function() {
        cy.visit('/')
        cy.fixture("emp").then(function(data) {
            this.data = data;
        })
    })

    it('Delete an existing user from the UI', function() {

        //login
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

        //navigate to user's screen
        cy.get('#mainMenu a b').first().realHover()
        cy.get('#menu_admin_UserManagement').realHover()
        cy.get('#menu_admin_viewSystemUsers').realClick()

        //perform the search for existing user -> Read this data from fixture file
        cy.get('input#searchSystemUser_userName').type(this.data.emp_to_be_deleted)
        cy.get('#searchBtn').click()

        //delete the user
        cy.get('table#resultTable tr td:nth-of-type(1)').click()
        cy.get('#btnDelete').click();
        cy.get('div#deleteConfModal div:nth-of-type(2) p').should('contain', 'Delete records?')
        cy.get('#dialogDeleteBtn').click();

        //search for the user -> search result should result in zero
        cy.get('input#searchSystemUser_userName').type(this.data.emp_to_be_deleted)
        cy.get('#searchBtn').click()
        cy.get('table#resultTable tr td').should('contain', 'No Records Found')
        cy.get('table#resultTable tr td').should('have.length', 1)


    });

})