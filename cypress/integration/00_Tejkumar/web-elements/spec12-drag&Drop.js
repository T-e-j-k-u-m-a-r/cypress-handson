describe('Drag & Drop', function() {


    it('without using an npm package', () => {

        cy.visit(`https://testautomationpractice.blogspot.com/`)
        cy.viewport('iphone-6')

        const dataTransfer = new DataTransfer();

        cy.get(`div#draggable`).trigger(`dragstart`, {
            dataTransfer
        })

        cy.get(`div#droppable`).trigger(`drop`, {
            dataTransfer
        })

    });


    it('using npm package', () => {

        cy.visit(`https://testautomationpractice.blogspot.com/`)
        cy.get('div#draggable').drag('div#droppable')

    });


    it('using npm package - way 2', () => {

        cy.visit(`https://testautomationpractice.blogspot.com/`)
        cy.get('div#draggable').drag('div#droppable', {
            source: { x: 100, y: 100 }, // applies to the element being dragged
            target: { position: 'center' }, // applies to the drop target
            force: true, // applied to both the source and target element
        })

    });




})