// Endpoint Details: https://faux-api.com/serve/courses_6076335750361604/

describe(`API Test Automation`, function () {

    it(`POST Call`, function () {

        const payload = [
            {
            "courseId": 4,
            "courseName": "Jenkins",
            "learningMode": "Online",
            "fee": 99
        }
        ]

        cy.request({
            method: 'POST',
            url: 'https://faux-api.com/serve/courses_6076335750361604',
            body: payload
        }).then(function (interception) {

            expect(interception.body.status).to.eq('success')
            expect(interception.body.code).to.eq(200)
    
            cy.request({
                method:'GET',
                url:'https://faux-api.com/serve/courses_6076335750361604/'
            }).then(function(interception){
                expect(interception.body.result).to.have.lengthOf(4)
            })

        })
    })

})