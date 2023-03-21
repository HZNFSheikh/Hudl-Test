Feature: Testing Login Functionality for Hudl Site

A user should be able to login to the Hudl platform through the login portal & use other functionality

Background: 
    Given user is one the login portal for Hudl

Scenario: New user navigates to login portal and sign up page
    When user clicks on Sign Up link
    Then user should be navigated to sign up page

Scenario: User has forgotten their password and needs help
    When user clicks on Need Help link
    Then user enters email and confirms password reset submission
    Then user should see confirmation for password reset request