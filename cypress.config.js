{
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true,
  screenshotsFolder: "my-custom-screenshots",
reporter: 'cypress-mochawesome-reporter',

 /* reporter : 'mochawesome',
  reporterOptions : {
  reportDir :   "cypress/report/mochawesome-report", 
  overwrite : true,
  html : true,
  json : false,
  timestamp : "mmddyyyy_HHMMss",
  },*/

  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      require('cypress-mochawesome-reporter/plugin')(on);

    }
    
  }
})
}






























