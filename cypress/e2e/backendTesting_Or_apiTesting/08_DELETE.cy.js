describe(`Delete HTTP Method`,function(){

    it(`Delete Resource`,function(){

        cy.request({
            method:`DELETE`,
            url:`https://faux-api.com/serve/courses_6076335750361604/35`
        }).then(function(interception){

            expect(interception.body.code).to.eq(200)
        })

    })

})