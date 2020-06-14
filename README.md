# 20602
## [Complex Counter App](https://likejean.github.io/homework-5/) / [PASV](https://stage.pasv.us/user/login) Automation Framework 

#### **TO RUN TESTS:**
* Clone repository
* Run `npm install`
* Run `npm run cca-smoke`

#### HOW TO ADD ALLURE REPORTER TO EXISTING WDIO FRAMEWORK:
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

