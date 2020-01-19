
context("Register form", () => {
	beforeEach(function () {
		cy.visit('/')
	})

	it('Register Form Validaiton', () => {
		cy.signupValidation(Cypress.config('userName'), Cypress.config('minLenghtPassword'));
	})

	it('Register form Success', () => {
		cy.signup(Cypress.config('userName'), Cypress.config('password'));
	})
})