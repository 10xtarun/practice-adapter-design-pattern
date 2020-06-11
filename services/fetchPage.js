require('rootpath')();
var facebookAdapter = require('adapters/facebook/facebookAdapter');

module.exports = function FetchPage(){
    var that = this;
    that.resolve = null;
    that.reject = null;
    that.response = null;
}