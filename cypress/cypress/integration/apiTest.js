describe(`API Testing`, function () {

    // GET Call
    it(`GET Call`, function () {

       cy.request({
            method: 'GET',  // Specify the method       
            url: 'https://jsonplaceholder.typicode.com/posts/1', // Specify the URL
            headers: {
                'Content-Type': 'application/json' // Set the content type header
            }
        }).then((response) => {
            // Validate the response status code
            expect(response.status).to.eq(200);
            // Validate the response body
            expect(response.body).to.have.property('id', 1);
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('body');
            // Validate the response headers
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');

            cy.log('Response Body:', response.body);
            console.log('Response Body:', response.body.userId);
            expect(response.body.userId).eq(1);
            expect(response.body.userId).to.be.a(`number`);
            console.log(response.body.title);

            console.log(response.body.title);
        
      })
        
    })


    // POST Call


    // PATCH Call


    // PUT Call



})