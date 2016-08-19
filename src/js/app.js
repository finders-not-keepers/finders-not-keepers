/* global localStorage */

// modules
var React = require('react');
var ReactDOM = require('react-dom');

// project files
var routes = require("./routes");

var App = require('./components/App');

ReactDOM.render(routes, document.getElementById('app')); 

var axios = require('axios');

