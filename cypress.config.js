const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 120000,
    requestTimeout: 120000,
    responseTimeout: 1200000,
    pageLoadTimeout: 1200000,
  },
})
