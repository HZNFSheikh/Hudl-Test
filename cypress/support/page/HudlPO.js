class HudlPO {
  signUpLink() {
    return cy.get(".styles_signUpLink_1CPc8TbK9yDyBdJiSpUOZV").click();
  }

  getHelpLink() {
    return cy.dataQaId("need-help-link");
  }

  passwordResetEmail() {
    return cy.dataQaId("password-reset-input");
  }

  passwordResetButton() {
    return cy.dataQaId("password-reset-submit-btn");
  }

  emailInput() {
    return cy.dataQaId("email-input");
  }

  passwordInput() {
    return cy.dataQaId("password-input");
  }

  loginButton() {
    return cy.dataQaId("login-btn");
  }
}

export default new HudlPO();
