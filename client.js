exports.client = require('webdriverjs').remote({
    // Settings
    desiredCapabilities: {
        browserName: 'phantomjs'
    },
    logLevel: 'silent'
});
