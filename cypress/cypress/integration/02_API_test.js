describe(`API Test`, function () {

    
    it('GET Request Example', () => {

    // Intercept the GET request
    cy.intercept('GET', 'https://reqres.in/api/users?page=2').as('getUserData');

    // Perform actions that trigger the GET request
    cy.visit('https://reqres.in/');

    // Wait for the request to complete
    cy.wait('@getUserData').then((interception) => {
      // Print the status code and response body
      console.log('GET Request Status Code:', interception.response.statusCode);
      console.log('GET Request Response Body:', interception.response.body);

      cy.log(`--------GET CALL-------`)
      cy.log('GET Request Response Body:', interception.response.body.per_page);
      cy.log('GET Request Response Body:', interception.response.body.total_pages);

    //   cy.log(interception.response.body);

    // cy.login(`tester@qa.com`,`password123`);
    // cy.get(`btn1`).prev().next().parent().first().last();
    
    // cy.get(`#btn1`).trigger(`mouseover`);
   

});

it(`Post Request Example`,function(){


    cy.intercept(`GET`,'https://reqres.in/api/users').as(`postUserData`)

    cy.visit('https://reqres.in/');

    cy.request({
        method:'POST',
        url:"https://reqres.in/api/users",
        body:{
            name:"Tejkumar Kempaiah",
            job:"Automation Lead"
        }
    })

    cy.wait(`@postUserData`).then(function(interception){

        cy.log(`----POST Call------`)
        console.log(interception.response.body);
        
    })

})

    })


})