// Endpoint Details: https://faux-api.com/serve/courses_6076335750361604/

describe(`API Test Automation`, function () {

    it(`GET Call`, function () {
        cy.request({
            method: 'GET',
            url: 'https://faux-api.com/serve/courses_6076335750361604/'
        }).then(function (interception) {

            expect(interception.body.status).to.eq('success')
            expect(interception.body.code).to.eq(200)
            expect(interception.body.result).to.have.lengthOf(5)
        })
    })

})