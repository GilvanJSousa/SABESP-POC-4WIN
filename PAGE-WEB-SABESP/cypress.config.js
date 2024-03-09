const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '9yw2cq',
  video: true,
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 50000,
    viewportWidth: 1024,
    viewportHeight: 768,
    //baseUrl: "https://site.sabesp.com.br/site/Default.aspx",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});