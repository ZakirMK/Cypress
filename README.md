Cypress Test Suite
This repository contains automated tests for the project using Cypress. Tests are organized into three categories: end-to-end (e2e), API, and component tests.

Project Structure
cypress/
├── e2e/ # End-to-End tests
├── api/ # API tests
├── component/ # Component tests
├── code/ # Cypress custom commands and additional code
├── support/ # Shared support files and utilities
└── src/ # Application source code  
 └── components/ # Reusable UI components

Installation
npm install

Running Tests
End-to-End Tests
To execute end-to-end tests and verify user workflows within the application, use the following command:
**npm run open:e2e**
These tests will simulate real user interactions and navigate through various application features to ensure everything works as expected.

API Tests
To run API tests and validate backend services, execute:
**npm run open:api**
These tests are designed to check the functionality and reliability of your API endpoints.

Component Tests
For testing individual UI components in isolation, run:
**npm run open:component**
These tests will ensure that each component behaves correctly when rendered independently.
