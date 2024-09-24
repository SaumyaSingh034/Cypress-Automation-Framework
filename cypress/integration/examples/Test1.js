//Cypress - Spec

describe('My First Test Suite', function()
{
    it('My First Test Case', function(){
        //test cases
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
    })

    it('My Second Test Case', function(){

    })
})