import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HudlPO from "../../support/page/HudlPO";

beforeEach(() => {
  cy.intercept("POST", `https://www.hudl.com/password/reset/start`).as("password-reset");
  cy.intercept("GET", `https://www.hudl.com/api/v2/remotes/check`).as("home");
});

// Background

Given("user is one the login portal for Hudl", () => {
  cy.visit("/");
});

// Scenario: New user navigates to login portal and sign up page

When("user clicks on Sign Up link", () => {
  HudlPO.signUpLink();
});

Then("user should be navigated to sign up page", () => {
  cy.url().should("contain", "signup");
});

// Scenario: User has forgotten their password and needs help

When("user clicks on Need Help link", () => {
  HudlPO.getHelpLink().click();
  cy.url().should("contain", "help");
});

Then("user enters {string} and confirms password reset submission", (email) => {
  HudlPO.passwordResetEmail().type(email);
  HudlPO.passwordResetButton().click();
  cy.wait("@password-reset");
});

Then("user should see confirmation for password reset request", () => {
  cy.url().should("contain", "check-email");
});

// Scenario Outline: User logs into Hudl portal with invalid credentials

When("user enters {string}", (invalidEmail) => {
  HudlPO.emailInput().type(invalidEmail);
});

Then("user clicks on Log in", () => {
  HudlPO.loginButton().click();
});

Then("user should see the {string}", (errorMessage) => {
  cy.contains(errorMessage);
});

// Scenario Outline: User logs into Hudl portal with credentials

When("user enters {string} and {string}", (email, password) => {
  HudlPO.emailInput().type(email);
  HudlPO.passwordInput().type(password);
});

Then("user should see the home page", () => {
  cy.wait("@home");
  cy.url().should("contain", "home");
});
