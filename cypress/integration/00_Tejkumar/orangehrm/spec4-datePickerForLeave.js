//TODO: 

/**
 * Task: 
 *  
 * Moment JS npm module, 
 * 
 * Select the dates from, to in the Assign leave section for the employee: Prajakta Dhumal
 *
 */

const moment = require("moment");
describe('Handling date picker', function() {

    before(function() {
        cy.visit('/')
        cy.fixture("emp").then(function(data) {
            this.data = data;
        })
    })

    it('Select FROM, To date from the leave Assign section', function() {

        //login page validations
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

        //navigate to main menu -> leave and hover on it. 
        cy.get(`ul#mainMenuFirstLevelUnorderedList li:nth-of-type(3) a b`).realHover();
        cy.contains('Assign Leave').click({ force: true })

        //test data for calender
        let from_date = moment().add(0, 'd').format()
        let to_date = moment().add(7, 'd').format()

        let from_date_data = from_date.split('/').join('-').substring(0, 10);
        let to_date_data = to_date.split('/').join('-').substring(0, 10);
        //enter tomorrow's date for from date
        cy.get('input#assignleave_txtFromDate').clear().type(from_date_data, { force: true })

        cy.get('#assignleave_txtEmployee_empName').type(this.data.search_emp)
        cy.get('#assignleave_txtComment').type(this.data.sample_comment_text)

        cy.get('input#assignleave_txtToDate').clear().type(to_date_data, { force: true })

        cy.get('#assignBtn').click()

        //verify if required red-label for leave type is displayed
        cy.get('form#frmLeaveApply li:nth-of-type(2)>span').should('contain', 'Required')

    });


})