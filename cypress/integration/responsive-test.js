context("Reponsive", () => {
	it('it should check responsive for Iphone-6', () => {
		cy.responsive('iphone-6')
		cy.visit('/register')
		cy.wait(1000)
		cy.visit('/login')
	})
})