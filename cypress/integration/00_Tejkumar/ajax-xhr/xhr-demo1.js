it('Stubbing a response and asserting it', () => {

    cy.visit(`https://qaboxletstestcypresspracticesite.netlify.app/intercept.html`)

    cy.intercept('/users?_limit=3').as('get3Users')

    cy.get(`button#loadThreeUsersXHR`).click()

    cy.wait(`@get3Users`).then(function(networkResult) {

        console.log(`Status code: ` + networkResult.response.statusCode);
        console.log(networkResult.response.body);

        //assert for total # of objects in response array
        expect(networkResult.response.body).to.have.length(3)

    })


});


it('Mocking the response with static data', () => {

    cy.visit(`https://qaboxletstestcypresspracticesite.netlify.app/intercept.html`)

    cy.intercept('/users?_limit=3', { name: "Tejkumar G K" }).as('get3Users')

    cy.get(`button#loadThreeUsersXHR`).click()

    cy.wait(`@get3Users`).then(function(result) {
        console.log(result.response.body);
    })


});

it('Mocking the response with fixture file', () => {

    cy.visit(`https://qaboxletstestcypresspracticesite.netlify.app/intercept.html`)

    cy.intercept('/users?_limit=3', { fixture: "textbox.json" }).as('mock')

    cy.get(`button#loadThreeUsersXHR`).click()

    cy.wait(`@mock`).then(function(result) {
        console.log(result.response.body);
        expect(result.response.body.full_name).eq('Tejkumar Kempaiah')
    })


});