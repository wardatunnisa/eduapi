const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ai2b4s',
  e2e: 
    
  {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  experimentalStudio: true,
  testIsolation: false,
  },
});
