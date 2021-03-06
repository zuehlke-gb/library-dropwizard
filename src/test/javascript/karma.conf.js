// Karma configuration
// Generated on Thu May 09 2013 17:19:56 GMT+0100 (GMT Daylight Time)


// base path, that will be used to resolve files and exclude
basePath = '../../../src/main/resources/assets/';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  
  // libraries
  'js/underscore-min.js',
  'js/jquery-*.js',
  'js/jquery.ui.widget.js',
  'js/jquery.iframe-transport.js',
  'js/jquery.fileupload.js',
  'js/angular.min.js',
  'js/angular-*.js',
  'js/base64.js',
  'js/bootstrap.min.js',
  'js/bootstrap.file-input.js',

  // mocks
  '../../../../src/test/javascript/lib/angular-mocks.js',
  
  // application
  '../../../../src/main/javascript/**/*.js',
  
  // templates
  'partials/*.html',
  
  // tests
  '../../../../src/test/javascript/unit/**/*.js',

];

preprocessors = {
  'js/*.js' : 'coverage',
  'partials/*.html' : 'html2js'
};

// list of files to exclude
exclude = [
  
];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['dots', 'junit', 'coverage'];

coverageReporter = {
  type : 'html',
  dir : '../../../../target/karma-coverage/'
};

junitReporter = {
  outputFile: '../../../../target/karma-test-results.xml'
};


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = false;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

