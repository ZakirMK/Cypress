const { defineConfig } = require('cypress')

export default defineConfig({
  viewportWidth: 2560,
  viewportHeight: 1440,
  defaultCommandTimeout: 120000,
  requestTimeout: 120000,
  responseTimeout: 1200000,
  pageLoadTimeout: 1200000,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/index.ts',
    chromeWebSecurity: false,
    video: true,
    videosFolder: 'cypress/reports/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/screenshots',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },

  component: {
    specPattern: 'cypress/component/**/*.cy.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
