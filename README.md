# MVP_Muziker
 This project features a set of Cypress tests for a MUZIKER web application, covering essential test scenarios. It reflects my understanding of Cypress's capabilities and showcases my ability to create  maintainable test suites. It follows PageObjectModel.

 ## Project hierarchy
 e2e Tests are located in ```cypress/e2e/*.ts``` Each file represent one part of the webpage and tests are related to that page only.<br />
 In folder ```cypress/support/pages/*.ts``` is located basic page object model - each file contains constants/methods/locators to that specific page. <br />
 in ```cypress/support/commnds.ts``` are custom commands - currently there is only one command which sets cookies and prevents modular window to confirm that you are ok with cookies.

 ## How to run test
 After repository is cloned, install all dependencies ```npm install``` and then
 - To run all tests use command ```npm run cypress:run``` 
 - To run Cypress GUI use command ```npm run cypress:open```
