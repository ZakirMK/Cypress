const { defineConfig } = require('cypress')

export default defineConfig({
  viewportWidth: 2560,
  viewportHeight: 1440,
  defaultCommandTimeout: 120000,
  requestTimeout: 120000,
  responseTimeout: 1200000,
  pageLoadTimeout: 1200000,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/index.ts',
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
    video: true,
    videosFolder: 'cypress/reports/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/screenshots',
  },
  component: {
    specPattern: 'cypress/component/**/*.cy.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
