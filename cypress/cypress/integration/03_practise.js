const { data } = require("cypress/types/jquery");

describe(`practise`,function(){


    //How to print the text of an element using cypress
    it(`tc`,function(){

        // // Case 1: 
        // cy.get(`#button1`).then(function($ele){
        //     cy.log($ele.text())
        // })

        // //Case 2: 
        // cy.get(`button2`).should(`have.text`,`button2`);

        // cy.get(`button3`).invoke(`text`).should(`equal`,`button3`);

        // // Handling alerts in Cypress

        // cy.on(`window:alert`,function(alterText){
        //     expect(alterText).to.equal(`This is an alert`);
        // })

        // cy.on(`window:confirm`,function(alterText){
        //     expect(alterText).to.equal(`This is an alert`);
        //     return true;
        // })

        // cy.on(`window:prom`,function(alterText){
        //     expect(alterText).to.equal(`This is an alert`);
        // })

        cy.readFile(`data.json`).then(function(data){
            console.log(data.username)
            console.log(data.role)
        })
        

    })

})