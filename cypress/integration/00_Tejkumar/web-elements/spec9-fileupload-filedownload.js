describe('file upload and file download', function() {

    it('upload & verify', () => {

        cy.visit(`https://demoqa.com/upload-download`)
        cy.get('#uploadFile').attachFile('uploadFiles/cylogo.png')
        cy.get('#uploadedFilePath').should('contain', 'cylogo')

    });


    it('Download & verify', () => {

        cy.visit('http://demo.automationtesting.in/FileDownload.html')
        cy.downloadFile('https://github.com//sakinala/AutomationTesting/raw/master/samplefile.pdf', 'cypress/downloads', 'samplefile.pdf')

        //cy.get()

        cy.verifyDownload('samplefile.pdf');

    });

})