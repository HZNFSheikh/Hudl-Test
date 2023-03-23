# Hudl-Test

## Overview
This is an automation test framework for the Hudl login portal using Cypress. 

<img width="86" alt="image" src="https://user-images.githubusercontent.com/38458929/227253598-2c3c973c-a1c6-4fc1-af3b-a008027e0989.png"> <img width="92" alt="image" src="https://user-images.githubusercontent.com/38458929/227253906-12f29d20-4e8b-403d-a354-d16bc2a17f0f.png">



### How to run tests
To run the cypress tests there are two ways that this can be done.
- By installing the required dependencies such as **Node.Js** and **npm**
- Or just downloading Cypress directly from *here* (https://docs.cypress.io/guides/getting-started/installing-cypress)

---

#### Installing required dependencies 
*The first two steps are if you would like to install the required dev dependencies to run the test suite*

1. First things first, ensure you have Visual Studio Code or a compatible IDE installed on your machine. 

2. Next, be sure to install node.js which acts as the runtime environment for Javascript code which Cypress uses. (https://nodejs.org/en/download)

---

- Clone the repository from GitHub through your preferred method.

<img width="321" alt="image" src="https://user-images.githubusercontent.com/38458929/227253323-b97b1ca1-a2da-4ae8-88bf-390d6c6b9795.png">

- Open the terminal/console in VSCode and enter this command

``` npx cypress open ```

- Once the Cypress test runner opens select **E2E Testing**

<img width="881" alt="image" src="https://user-images.githubusercontent.com/38458929/227257331-d49cb3cf-6932-4e5b-9753-f731a287a102.png">

- Select your browser of choice (*Chrome is the recommended option here if you have it installed on your machine*)

<img width="448" alt="image" src="https://user-images.githubusercontent.com/38458929/227257739-43e643b6-7951-4407-9940-84ddf211305d.png">

- Once the browser window opens showing the spec files, select the **Hudl.feature** spec file. 

<img width="448" alt="image" src="https://user-images.githubusercontent.com/38458929/227258823-8ec8e410-f22b-43d3-89f4-d14025ba4905.png">

A new browser window will now open running the automated tests from the selected spec file.

---

#### Additions and Improvments
- Cypress allows for a lot of flexibility and reliability with automating E2E scenarios in the front end, which can be expanded through the use of other custom commands for certain actions. (**example - a custom command for logging in**)
- Adding endpoint URL's in the local config for different microservices used on the platform also.
