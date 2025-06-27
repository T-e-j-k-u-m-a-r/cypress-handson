// Endpoint: https://faux-api.com/serve/courses_6076335750361604
// Payload: The type of the payload is an object nested inside an array

describe(`API Testing - 2`, function () {

    it.skip(`POST Call - Approch 1 - With Static Payload using payload object`, function () {

        const payload = [{
            courseId: 6,
            courseName: "Jira",
            learningMode: "Classroom Based",
            fee: 777
        }]

        cy.request({
            method: `POST`,
            url: `https://faux-api.com/serve/courses_6076335750361604`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload
        }).then(function (interception) {

            expect(interception.status).eq(200)

            // Get Call

            cy.request({
                method: `GET`,
                url: `https://faux-api.com/serve/courses_6076335750361604`
            }).then(function (interception) {

                expect(interception.body.result).to.have.lengthOf(6);
                expect(interception.body.result[5]).to.have.property("courseName", "Jira")
                cy.log(JSON.stringify(interception.body))

            })

        })

    })


    it(`POST Call - Approch 2 - With Dynamic Payload`, function () {

        const payload = [{
            courseId: "AI Gen - " + Math.floor((100 * Math.random())).toString(),
            courseName: "MCP Course - " + Math.floor((100 * Math.random())).toString(),
            learningMode: "Online",
            fee: 77
        }]

        cy.request({
            method: `POST`,
            url: `https://faux-api.com/serve/courses_6076335750361604`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload
        }).then(function (interception) {

            expect(interception.status).eq(200)
            // Get Call

            cy.request({
                method: `GET`,
                url: `https://faux-api.com/serve/courses_6076335750361604`
            }).then(function (interception) {

                // expect(interception.body.result).to.have.lengthOf(6);
                // expect(interception.body.result[5]).to.have.property("courseName","Jira")
                cy.log(JSON.stringify(interception.body))

            })

        })

    })


    it.skip(`POST Call - Approch 3 - With Static Payload using Fixture file`, function () {

        cy.fixture("postPayload").then(function(data){

            this.data = data;

            const payload = [{
            courseId: this.data.courseId,
            courseName: this.data.courseName,
            learningMode: this.data.learningMode,
            fee: this.data.fee
        }]

        cy.request({
            method: `POST`,
            url: `https://faux-api.com/serve/courses_6076335750361604`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload
        }).then(function (interception) {

            expect(interception.status).eq(200)

            // Get Call

            cy.request({
                method: `GET`,
                url: `https://faux-api.com/serve/courses_6076335750361604`
            }).then(function (interception) {

                // expect(interception.body.result).to.have.lengthOf(6);
                // expect(interception.body.result[5]).to.have.property("courseName", "Jira")
                cy.log(JSON.stringify(interception.body))

            })

        })

    })
        })

})

