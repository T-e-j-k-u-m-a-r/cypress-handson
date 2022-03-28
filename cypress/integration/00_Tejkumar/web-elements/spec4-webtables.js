describe('Web tables', function() {

    before(function() {

        //cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it('Total tables in a screen', function() {

        cy.get(`table[id^='table']`).then(function(table) {
            console.log('Total tables on the screen: ' + table.length);
        })

    });

    it('check presence of value anywhere in the table & print its index (row)', () => {

        cy.get('table#table1 tbody tr td').contains('Jason').should('be.visible')

    });

    it('check presence of value in a specific row and specific column', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        //target the row and then target the column > value is website for frank
        cy.get(`table#table1 tbody tr`).eq(1).within(function() {
            cy.get('td').eq(4).then(function(cell) {
                expect(cell.text()).to.eq('http://www.frank.com')
            })
        })
    });

    it.only('check presence of value based on condition by iterating rows', () => {

        //check the last name whose first name is: Frank

        cy.visit(`https://the-internet.herokuapp.com/tables`)

        cy.get(`#table1 tbody tr td:nth-child(2)`).each(function(ele, index, list) {

            if (ele.text() === 'Frank') {
                cy.get(`#table1 tbody tr td:nth-child(1)`).eq(index).then(function(ele) {
                    expect(ele.text()).to.eq('Bach')
                })
            }

        })
    });

})