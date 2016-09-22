/**
 * Created by maarten on 19-09-16.
 */
"use strict";

var webdriver = require("selenium-webdriver");

var driver;

function GetDriver() {

    // if (!driver) {
    //     return this.buildDriver();
    // } else {
    //     return driver
    // }

}

GetDriver.prototype.buildDriver = function () {

    console.log("getDriver");


    if (process.env.SAUCE_USERNAME != undefined) {
        console.log("suace user name defined");
        driver = new webdriver.Builder()
            .usingServer('http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
            .withCapabilities({
                'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                build: process.env.TRAVIS_BUILD_NUMBER,
                username: process.env.SAUCE_USERNAME,
                accessKey: process.env.SAUCE_ACCESS_KEY,
                browserName: "chrome"
            }).build();

    } else {
        driver = new webdriver.Builder()
            .withCapabilities({
                browserName: "chrome"
            }).build();
    }


    return driver;

};

module.exports = GetDriver;






