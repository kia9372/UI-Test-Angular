Cypress.Commands.add('signup', (email, password) => {
	cy.visit("/register");
	cy.get('#email').clear().type(email);
	cy.wait(1000)
	cy.get('#password').clear().type(password);
	cy.wait(1000)
	cy.get('#conf-password').clear().type(password);
	cy.wait(1000)
	// cy.get('#gender').contains('Male')
	// 	.then(option => {
	// 		option[1].click();  // this is jquery click() not cypress click()
	// 	});
	cy.wait(1000);
	cy.get('#register-button').click();
	cy.wait(1000)
	cy.url().should('include', '/home');
	cy.wait(1000)
	cy.get('#home-success-login').should('contain', 'success full login')
	cy.wait(1000)
})

Cypress.Commands.add('signupValidation', (email, password) => {
	cy.visit("/register");
		cy.wait(1000);
		cy.get('#email').type(email);
		cy.wait(1000)
		cy.get('#password').type(password);
		cy.get("#error-password").should('contain', 'Min Lengh')
		cy.wait(1000)
		cy.get('#conf-password').type(password);
		cy.get("#error-confirmPassword").should('contain', 'Min Lengh')
		cy.wait(1000)
		cy.get('#register-button')
			.should('have.attr', 'disabled');
		cy.wait(1000)
		cy.url().should('include', '/register');
		cy.wait(1000)
})
