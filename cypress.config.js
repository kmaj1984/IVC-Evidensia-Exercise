const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      integrationFolder: 'path/to/specification'
      // implement node event listeners here
    },
  },
});