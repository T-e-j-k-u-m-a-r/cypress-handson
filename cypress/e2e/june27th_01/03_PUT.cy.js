// Endpoint: https://faux-api.com/serve/courses_6076335750361604/:<id>
// Payload: The type of the payload is an object 

describe(`API Testing`, function () {

    it(`PUT Call`, function () {

        const id = 1;

        const payload = {
            "id": 1,
            "courseId": 1,
            "courseName": "JavaScript Programming",
            "learningMode": "Online",
            "fee": 9
        }

        cy.request({
            method: `PUT`,
            url: `https://faux-api.com/serve/courses_6076335750361604/`+{id},
            headers: {
                'Content-Type': 'application/json'
            },
            body:payload
        }).then(function (interception) {
            expect(interception.status).eq(200)

            // Get Call to view the changes
            cy.request(`https://faux-api.com/serve/courses_6076335750361604/`).then(function (interception) {
                cy.log(JSON.stringify(interception.body))
                expect(interception.body.result[0].courseName).to.eq(`JavaScript Programming`)
                expect(interception.body.result[0].fee).to.eq(9)
            })
        })

    })
})