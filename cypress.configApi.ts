const { defineConfig } = require('cypress')

export default defineConfig({
  viewportWidth: 2560,
  viewportHeight: 1440,
  defaultCommandTimeout: 120000,
  requestTimeout: 120000,
  responseTimeout: 1200000,
  pageLoadTimeout: 1200000,
  e2e: {
    specPattern: 'cypress/api/**/*.cy.ts',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
})
