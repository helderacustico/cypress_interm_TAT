const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 800,
    baseUrl: 'http://192.168.100.37',
    //baseUlr: 'http://localhost'
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true, //executa todos os testes
  },
  fixturesFolder: false,
  video: false,

})