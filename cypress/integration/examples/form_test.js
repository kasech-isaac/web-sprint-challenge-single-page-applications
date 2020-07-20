
describe("Testing", ()=>{
    beforeEach(function(){
        cy.visit("http://localhost:3000/")  
    })
    it("Test the form is working", ()=> {
        // cy.get('[#name]>input')
        cy.get('input[name="name"]') 
        cy.type('kasech isaac')
        cy.should('have.value','kasech isaac')

        cy.get('button').click()
    })
    })