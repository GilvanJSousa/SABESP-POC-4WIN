const { defineConfig } = require("cypress");


module.exports = defineConfig({

  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 5000,
    viewportWidth: 1024,
    viewportHeight: 768,
    //baseUrl: "https://site.sabesp.com.br/site/Default.aspx",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});