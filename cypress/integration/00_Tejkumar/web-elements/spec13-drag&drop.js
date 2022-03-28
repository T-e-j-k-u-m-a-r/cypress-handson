describe('DD', function() {

    before(function() {
        cy.visit(`https://demoqa.com/droppable`)
    })

    it('type1', () => {

        cy.get('div#draggable').drag('div#droppable')

    });

    it.only('type2', () => {

        const dataTransfer = new DataTransfer()

        cy.get('div#draggable').trigger('dragstart', {
            dataTransfer
        })

        cy.get('div#draggable').trigger('dragstart', {
            dataTransfer
        })

    });

})