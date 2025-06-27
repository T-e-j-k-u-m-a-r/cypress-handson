// Endpoint: https://faux-api.com/serve/courses_6076335750361604

describe(`API Testing - 1`,function(){

    it(`Get Call - Approach 1`,function(){

      cy.request(`https://faux-api.com/serve/courses_6076335750361604`).then(function(interception){

        expect(interception.status).to.eq(200)
        expect(interception.body.status).to.eq(`success`)
        expect(interception.body.result).have.lengthOf(5)
        
        //String representation of the JSON Response Object
        cy.log(JSON.stringify(interception.body));
        

      })

    })

    it(`Get Call - Approach 2`,function(){

        cy.request({
            method:`GET`,
            url:`https://faux-api.com/serve/courses_6076335750361604`
        }).then(function(interception){
                       
        expect(interception.status).to.eq(200)
        expect(interception.body.status).to.eq(`success`)
        expect(interception.body.result).have.lengthOf(5)
        
        //String representation of the JSON Response Object
        cy.log(JSON.stringify(interception.body));
        

        })

    })

    it(`Get Call - With Query Params`,function(){
      cy.request({
        method:`GET`,
        url: `https://faux-api.com/serve/courses_6076335750361604`,
        qs:{
          courseName:"javascript"
        }
      }).then(function(interception){

        expect(interception.status).eq(200)
        cy.log(JSON.stringify(interception.body))
        
      })

    })


})