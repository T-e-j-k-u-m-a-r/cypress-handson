const { faker } = require('@faker-js/faker');

describe('Practise form', function() {

    //generating random test data
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = firstName + lastName + '@gmail.com'
    const phone = faker.phone.phoneNumber()
    const subject = faker.animal.cat()
    const currentAddress = faker.address.country()

    before(function() {

        cy.visit('https://demoqa.com/automation-practice-form')
        cy.viewport('iphone-xr')
        cy.fixture("practise-form").then(function(data) {
            this.data = data;
        })

    })

    it('Handling practise form', function() {

        //verify the url contains text: automation-practice-form
        cy.url().should('contain', 'automation-practice-form')
        cy.contains('Student Registration Form').should('exist')

        cy.get('input#firstName').type(firstName)
        cy.get('input#lastName').type(lastName)
        cy.get('input#userEmail').type(email)
        cy.get('input#gender-radio-1').click({ force: true })
        cy.get('input#userNumber').type(phone)
        cy.get('div.css-1hwfws3').first().type('This is the sample subject...') //subject to be added
        cy.get(`label[for='hobbies-checkbox-1']`).click()
        cy.get('input#uploadPicture').attachFile('uploadFiles/cylogo.png')
        cy.get('textarea#currentAddress').type(currentAddress)
        cy.get('#submit').invoke('show').scrollIntoView()
        cy.get(`div.css-1hwfws3`).eq(1).click({ force: true }).type('NCR{enter}')
        cy.get(`div.css-1hwfws3`).last().type(this.data.city)
        cy.focused().tab()

        //click on submit 
        cy.get('#submit').click()

        //assert the confirmation of submitting the form

    });
})