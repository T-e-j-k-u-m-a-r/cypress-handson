// Endpoint Details: https://faux-api.com/serve/courses_6076335750361604/

describe(`API Test Automation`, function () {

    it(`POST Call`, function () {

        cy.fixture("courseDetails").then(function(data){

             this.data = data;

            const payload = [
                {
                    "courseId": this.data.courseId,
                    "courseName": this.data.courseName,
                    "learningMode": this.data.learningMode,
                    "fee": this.data.fee
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
                    method: 'GET',
                    url: 'https://faux-api.com/serve/courses_6076335750361604/'
                }).then(function (interception) {
                    expect(interception.body.result).to.have.lengthOf(5)
                })

            })

        })

        })
 

})