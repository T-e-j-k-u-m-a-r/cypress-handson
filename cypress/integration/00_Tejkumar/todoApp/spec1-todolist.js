describe('todo-App: Suite 1', function() {

    before(function() {

        cy.visit('https://example.cypress.io/todo')
        cy.viewport(window.screen.width, window.screen.height);

    })

    it('TC01 - Check and verify 2 items displayed by default', function() {

        cy.get('.todo-list label').should('have.length', 2)

        cy.get('.todo-list label').eq(0).should('have.text', 'Pay electric bill')

        cy.get('.todo-list label').eq(1).should('have.text', 'Walk the dog')

    })

    it('TC02 - Add new items', () => {

        //Add new item - 1
        cy.get('input.new-todo').type('third item added').type('{enter}')

        //verify the total count of items
        cy.get('.todo-list label').should('have.length', 3)

        //print the last added item from the list
        cy.get('.todo-list li').last().should('have.text', 'third item added')


    });

    it('check off the last item added as completed and then count the other total items in the list', () => {

        //check the item as completed
        cy.get('.todo-list input').last().click()

        //verify if the clear complete text is displayed in the screen
        //click on clear completed
        cy.get('.footer button.todo-button').should('have.text', 'Clear completed').click()

    });


    it('Check both items as completed', () => {

        cy.get(`.todo-list input[type='checkbox']`).each(function(ele) {
            cy.wrap(ele).click();
        })

        //total items to be completed should be 0, Assert it. 
        cy.get('.footer span').should('have.text', '1 item left')

    });

    it('filter for completed and uncompleted task and print the count', () => {



    });

})