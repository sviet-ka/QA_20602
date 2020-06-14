# 20602
## [Complex Counter App](https://likejean.github.io/homework-5/) / [PASV](https://stage.pasv.us/user/login) Automation Framework 

### **To run tests:**
* Clone repository
* Run `npm install`
* Run `npm run cca-smoke`

### **WebDriverIO project setup from scratch:**
1. Create new NodeJS project
2. Run `npm i --save-dev @wdio/cli`
3. Run `npx wdio config -y`
4. Run `mkdir -p ./test/specs & mkdir -p ./test/pages`
5. Babel setup: 
* create _babel.config.js_ file with following code:
`module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ]
}`
* Run `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register`
* In _wdio.conf.js_ edit this piece of code:
`mochaOpts: {
    ui: 'bdd',
    compilers: ['js:@babel/register'],
    timeout: 60000
},`
6. Prettier setup:
* Run `npm install --save-dev prettier`
* Create `prettier.config.js` with following code:
`module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  parser: 'babel',
  printWidth: 100,
};`
7. To run your tests use _npx wdio wdio.conf.js_

### **Add Allure Reporter to existing WDIO framework:**
1. Install Allure Reporter `npm install @wdio/allure-reporter --save-dev`
2. Add Allure to reporters in _wdio.conf.js_ file:
`  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: true,
  }]],`
3. Install CLI for Allure `npm install allure-commandline --save-dev`
4. Modify your _package.json_ file, so Allure Report generates and opens automatically after each test run. To do that you need to add allure generate allure-results --clean && allure open to existing scripts. For example:
`  "scripts": {
    "test": "wdio wdio.conf.js && allure generate allure-results --clean && allure open",
  },`  
  
From now each time you execute `npm test` command, Allure Report will be generated and run on a local server. 

