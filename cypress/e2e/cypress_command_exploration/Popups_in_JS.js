describe(`UI Automation`,function(){

    it(`Web Automation Scenarios`,function(){

    cy.on(`window:alert`,function(alert){

        expect(alert).to.eq(`expectedAlertMessage`);

    })

    cy.on(`window:confirm`,function(alert){
        expect(alert).to.eq(`Expected alert message`);
        return true;
    })

    cy.window(win).then(function(win){
        cy.stub(win,'prompt')
    })



    })


})