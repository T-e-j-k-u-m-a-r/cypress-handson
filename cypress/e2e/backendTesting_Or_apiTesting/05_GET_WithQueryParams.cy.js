// GET call with Query Params, Endpoint: https://faux-api.com/serve/courses_6076335750361604/
//Query Params: courseId=2

describe(`GET Call With Filters`,function(){

    it(`GET Call with Query Params`,function(){

        cy.request({
            method:'GET',
            url:'https://faux-api.com/serve/courses_6076335750361604/',
            qs:{
                "courseId":"2"
            }
        }).then(function(interception){

            expect(interception.body.code).to.eq(200)
            expect(interception.body.result[0].courseName).contain('Cypress')

            console.log(interception.body)

        })
    })

})