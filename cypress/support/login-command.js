Cypress.Commands.add('login', (userName, password, url, requestType, userInformationUrl, informationRequestType) => {
	cy.visit("/login");
	cy.get('#userName').clear().type(userName);
	cy.wait(500);
	cy.get('#password').clear().type(password);
	cy.wait(500);
	cy.request({
		url: url,
		method: requestType,
		body: {
			username: userName,
			password: password,
		}
	}).then((resp) => {
		window.localStorage.setItem('access_token', resp.body.result.access_token);
		cy.request({
			url: userInformationUrl,
			method: informationRequestType,
			headers: ({ Authorization: 'Bearer ' + window.localStorage.getItem('access_token') }),
		}).then((resp) => {
			cy.visit('/home')
		})
	})

})