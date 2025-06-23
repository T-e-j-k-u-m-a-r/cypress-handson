export class LoginPage{

    // Define variables 
    customerLoginBtn = "button[ng-click='customer()']";
    homeMenu = ".btn.home";
    homePageSubString = "customer";

    // Define functions
    launchApp(url){
        cy.visit(url)   
    }

    clickOnCustomerLoginBtn(){
        cy.get(this.customerLoginBtn).click()
    }

    verifyThePresenceOfHomeMenu(){
        cy.get(this.homeMenu).should(`be.visible`)
    }

    verifyTheUrlContainsCustomerstring(){
        cy.url().should(`include`,this.homePageSubString)
    }
   

}