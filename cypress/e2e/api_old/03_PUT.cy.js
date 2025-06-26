// Endpoint Details: https://faux-api.com/serve/courses_6076335750361604/

describe(`API Test Automation`, function () {

    it(`PUT Call`, function () {

        const payload = {
            "courseId": 3,
            "courseName": "Java Programming",
            "learningMode": "Online",
            "fee": 99
        }

        cy.request({
            method: 'PUT',
            url: 'https://faux-api.com/serve/courses_6076335750361604/21',
            body: payload
        }).then(function (interception) {

            expect(interception.body.status).to.eq('success')
            // expect(interception.body.code).to.eq(200)

            cy.request({
                method: 'GET',
                url: 'https://faux-api.com/serve/courses_6076335750361604/'
            }).then(function (interception) {
                expect(interception.body.result).to.have.lengthOf(4)
            })

        })
    })

})