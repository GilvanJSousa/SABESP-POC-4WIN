const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
    //baseUrl: "https://site.sabesp.com.br/site/Default.aspx",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
