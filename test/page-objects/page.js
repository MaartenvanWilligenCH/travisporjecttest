/**
 * Created by maarten on 19-09-16.
 */
// Object Page
var webdriver = require("selenium-webdriver");
var until = webdriver.until;

var driver;
var url;

/*constructor
 * sets driver and url
 * */

function Page(driver, url) {

    this.url = url;
    this.driver = driver;
}

/* method
 * get url with driver
 * return
 * */

Page.prototype.getUrl = function () {

    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);

};

module.exports = Page;



