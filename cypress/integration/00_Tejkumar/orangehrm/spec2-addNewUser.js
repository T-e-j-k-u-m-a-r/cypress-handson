//TODO: 

/**
 * 1. Random data should be generated for username using some face mocking API's 
 */

const { faker } = require('@faker-js/faker');
const new_user = faker.name.firstName();

describe('CRUD Operation - Adding new user', function() {

    before(function() {
        cy.visit('/')
        cy.fixture("emp").then(function(data) {
            this.data = data;
        })
    })

    it('Add new user & verify its presence', function() {

        cy.log('-- New user created:: ' + new_user)

        //login test
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

        //Add new user
        //employee name: Dominic Chase

        //hover on Admin -> User Management
        cy.get('#mainMenu a b').first().realHover()
        cy.get('#menu_admin_UserManagement').realHover()
        cy.get('#menu_admin_viewSystemUsers').realClick()
            //line above & below both works for clicking on users element post hover
            // cy.get('#menu_admin_viewSystemUsers').click({ force: true })

        cy.get('form#frmList_ohrmListComponent input#btnAdd').click()
        cy.contains('Add User').invoke('attr', 'id').should('eq', 'UserHeading')

        //select user role Admin
        cy.get('#systemUser_userType').select('Admin');
        cy.get(`input#systemUser_employeeName_empName`).type(this.data.emp_name)
            // let new_user = "Ricky Martin1102";
        cy.get('#systemUser_userName').type(new_user)
        cy.log(`---------New user ` + new_user + ' created------')
        cy.get('input#systemUser_password').type('Mom87mom1!')
        cy.get('input#systemUser_confirmPassword').type('Mom87mom1!')
        cy.get('input#btnSave').click()
        cy.wait(6000)

        //verify if the page is save system users screen
        cy.url().should('contain', 'viewSystemUsers')

        //search for the newly created user
        cy.get('input#searchSystemUser_userName').type(new_user)
        cy.get('#searchBtn').click()

        cy.get('table#resultTable tr td').should('have.length.above', 2)
            // cy.get('table#resultTable tr td:nth-of-type(2)').should('have.text', 'Ricky Martin1102')
        cy.get('table#resultTable tr td:nth-of-type(2)').should('have.text', new_user)

    })

})