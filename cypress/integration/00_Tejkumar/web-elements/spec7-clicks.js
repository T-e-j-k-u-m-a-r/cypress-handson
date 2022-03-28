describe('All types of clicks', function() {

    before(function() {
        cy.visit(`https://demoqa.com/buttons`)
    })
    it('Double click', () => {

        cy.get(`#doubleClickBtn`).dblclick()

        //assert the result
        cy.get(`#doubleClickMessage`).then(function(msg) {
            console.log(msg);
        })

    });

    it('Right click', () => {

        cy.get(`#rightClickBtn`).rightclick()

        //assert the result
        cy.get(`#rightClickMessage`).then(function(msg) {
            console.log(msg);
        })

    });

    it('Simple click', () => {

        cy.contains(`Click Me`).should('be.visible')
        cy.get(`button[type='button']`).last().click()

        //assert the result
        cy.get(`#dynamicClickMessage`).then(function(msg) {
            console.log(msg);
        })

    });


})