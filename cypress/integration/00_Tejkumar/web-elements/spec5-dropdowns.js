describe('dropdowns', function() {

    it('handling DD', function() {


        cy.visit("http://demo.automationtesting.in/Register.html")

        //select JS & verify if its selected
        cy.get('#Skills').select('Javascript')

        cy.get('#Skills').should('have.value', 'Javascript')

        cy.get(`#yearbox`).select('1987')
            //cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('September')
        cy.get(`div.col-md-3 select[placeholder='Month']`).select('September')
        cy.get(`#daybox`).select('27')

    })

})