it('xhr demo - stubbing a request', () => {

    cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept.html')
    cy.contains(`INTERCEPT XHR`).scrollIntoView()

    // cy.intercept({
    //     path: '/users?_limit=3'
    // }).as('get3Users')

    //TODO: The above code and line 13 code serves the same purpose

    cy.intercept(`/users?_limit=3`).as('get3Users')

    cy.get(`button#loadThreeUsersXHR`).click();

    cy.wait('@get3Users').then(function(response) {
        //console.log(JSON.stringify(response));
        console.log(response.response.body);
        // console.log(response.response.statusCode);
        console.log(response.response.body[1].id);
        console.log(response.response.body[1].name);
        expect(response.response.body).have.length(3)
            // console.log(response.state);
    })

});


it('Mocking a request with fixture file', () => {

    cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept.html')

    cy.intercept('GET', '/users?_limit=3', { fixture: "emp.json" }).as('mock')

    cy.get(`button#loadThreeUsersXHR`).click();

    cy.wait('@mock').then(function(res) {
            console.log(res.response.body);
        })
        //users?_limit=3
});

it('Mocking a request with static data file', () => {

    cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept.html')

    cy.intercept('/users?_limit=3', { name: "Tejkumar", status: "DONE" }).as('mock')

    cy.get(`button#loadThreeUsersXHR`).click();

    cy.wait('@mock').then(function(res) {
            console.log(res.response.body);
        })
        //users?_limit=3
});