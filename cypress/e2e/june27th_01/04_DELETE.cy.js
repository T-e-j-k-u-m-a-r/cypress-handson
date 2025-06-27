// Endpoint: https://faux-api.com/serve/courses_6076335750361604:<ID>

describe(`API Testing`,function(){

    it(`Delete Call`,function(){

        const id = 49;

        cy.request({
            method:`DELETE`,
            url:`https://faux-api.com/serve/courses_6076335750361604`+`/`+id
            // url:`https://faux-api.com/serve/courses_6076335750361604/48`
        }).then(function(interception){

            expect(interception.body.code).to.eq(200)
        })

    })

})