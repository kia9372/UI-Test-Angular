import { createYield } from "typescript";

context("Login test", () => {
	it("should visit login page", () => {
		cy.login(
			Cypress.config('magUserName'),
			Cypress.config('magPassword'),
			Cypress.config('loginUrl'),
			'POST',
			Cypress.config('userInformation'),
			'GET')
	});
  });
