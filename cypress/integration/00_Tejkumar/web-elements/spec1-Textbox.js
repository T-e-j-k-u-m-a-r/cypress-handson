describe('TB', function() {

    before(function() {
        cy.visit('https://demoqa.com/text-box')
        cy.fixture("textbox").then(function(data) {
            this.data = data;
        })
    })

    it('Handling text box or input boxes', function() {

        cy.get('#userName').type(this.data.full_name)
        cy.get('#userEmail').type(this.data.email)
        cy.get('#currentAddress').type(this.data.current_address)
        cy.get('#permanentAddress').type(this.data.permanent_address)
        cy.get('button#submit').click()

        cy.get('div#output div>p').should('have.length', 4)

        console.log('---: Asserting attribute values of an element full name :---');
        cy.get('#userName').invoke('attr', 'placeholder').should('eq', 'Full Name')
        cy.get('#userName').invoke('attr', 'class').should('eq', ' mr-sm-2 form-control')
    });
})