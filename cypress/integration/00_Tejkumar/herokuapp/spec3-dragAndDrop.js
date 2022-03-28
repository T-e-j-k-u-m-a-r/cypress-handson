describe('spec3', function() {

    it('Drag & Drop', () => {

        const dataTransfer = new DataTransfer();

        cy.visit('http://demo.automationtesting.in/Static.html')

        cy.get(`div.col-xs-10 img#angular`).trigger(`dragstart`, {
            dataTransfer
        })

        cy.get(`div#droparea`).trigger(`drop`, {
            dataTransfer
        })

    });
})