/**
 * Created by maarten on 19-09-16.
 */

// Object Page

var HomePage = require("./HomePage");

//constructor
function Page(webdriver, url) {

    this.webdriver = webdriver;
    this.url = url;

}

//method
Page.prototype.getUrl = function() {
    this.webdriver.get(this.url);
};


module.export= Page;


