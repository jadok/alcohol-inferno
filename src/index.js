"use strict";
exports.__esModule = true;
var inferno_1 = require("inferno");
require("inferno-devtools");
var inferno_redux_1 = require("inferno-redux");
var index_1 = require("store/index");
// import Layout from './templates/layout'
var AppConnect_1 = require("component/App/AppConnect");
var container = document.getElementById('app');
var views = (<inferno_redux_1.Provider store={index_1["default"]}>
    <AppConnect_1["default"] />
  </inferno_redux_1.Provider>);
inferno_1.render(views, container);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service.worker.js', { scope: '/' }).then(function (reg) {
        // registration worked
        console.log("Registration succeeded. Scope is " + reg.scope);
    })["catch"](function (error) {
        // registration failed
        console.log("Registration failed with " + error);
    });
}
