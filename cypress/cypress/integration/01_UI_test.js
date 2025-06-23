import { LoginPage } from "../../pages/LoginPage";

const LoginPage_Obj = new LoginPage();

describe(`Fixture file demo`,function(){

    before(function(){
          cy.fixture(`emp`).then(function(data){
            this.data = data;
        })
    })

    it(`TC1 - Customer Login`,function(){

      LoginPage_Obj.launchApp(this.data.appurl);
      LoginPage_Obj.clickOnCustomerLoginBtn();
      LoginPage_Obj.verifyThePresenceOfHomeMenu();
      LoginPage_Obj.verifyTheUrlContainsCustomerstring();

       
    })

})