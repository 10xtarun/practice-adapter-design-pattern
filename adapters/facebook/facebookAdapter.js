require('rootpath')();

//set env, this is just a variable
var env = 'test';

var AsyncFB = require('adapters/facebook/async');
var FakeFB = require('adapters/facebook/fake');

if(env=='test'){
    //in test environment trigger Fake FB Adapter
    global.__facebookAdapter = global.__facebookAdapter || new FakeFB();
} else {
    //in non-test environment trigger Async FB Adapter
    global.__facebookAdapter = global.__facebookAdapter || new AsyncFB();
}

module.exports = global.__facebookAdapter;