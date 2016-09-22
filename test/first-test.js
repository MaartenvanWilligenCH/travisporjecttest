var webdriver = require("selenium-webdriver");
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
// var $ = require('jQuery');
var Home = require("./page-objects/home");
var GetDriver =  require("./GetDriver");

describe("testing javascript in the browser", function () {
    var driver;
    var homepage;

    /*before test start a new webdriver. This webdriver uses the saucelabs browser.
     *
     * start selenium webdriver that uses chrome browser on saucelabs
     *
     * */

    before(function () {

        driver = new GetDriver();
        console.log("driver is" + " " + driver);
    });

    /*after the tests quit the driver
     *
     * */

    after(function () {
        return driver.quit();
    });

    describe("text set", function () {

        it("h1 should be awesome", function (done) {
            var headline = driver.findElement(webdriver.By.css('h1'));

            headline.getText().then(function (txt) {
                assert.equal(txt, "awesome");
                done();
            });
        });
    });

    describe('Home page', function () {

        homepage = new Home(driver);
        homepage.getUrl();

        it('should load the page properly', function () {

        });

        describe('Images', function () {
            it('should be visible in the screen');
            it('should be more then 0px height and width');
            it('should have rel');

        });

        describe('Form', function () {

            describe("before submit", function () {


            });

            describe("test after submit ", function () {
                it("expect status 200 after submit");
                it("should return error for false email");
            });
        });

        describe("buttons", function () {

            it("CTA button should be raised", function (done) {

                button = homepage.ctaButton();
                console.log("button" + " " + button);
                button.getText().then(function (txt) {
                    assert.equal(txt, "RAISED");
                    done();
                });

            });

            it("expect onclick text change to buttontransform", function (done) {

                homepage.ctaButtonClick();
                homepage.ctaButton().getText().then(function (txt) {
                    assert.equal(txt, "BUTTONTRANSFORM");
                    done();
                });

            });

        });

    });

});
