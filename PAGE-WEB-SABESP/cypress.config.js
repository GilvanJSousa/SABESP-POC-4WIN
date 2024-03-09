const { defineConfig } = require("cypress");


module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 30000,
    viewportWidth: 1024,
    viewportHeight: 768,
    //baseUrl: "https://site.sabesp.com.br/site/Default.aspx",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});