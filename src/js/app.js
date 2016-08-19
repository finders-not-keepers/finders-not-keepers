// modules
var React = require('react');
var ReactDOM = require('react-dom');

// project files
var routes = require("./routes");

var App = require('./components/App');

ReactDOM.render(routes, document.getElementById('app')); 

var axios = require('axios');

axios.create({
    headers: { 
        authorization: 'Bearer ' + localStorage.getItem('id_token')
    }
}).post('/login', {id_token: localStorage.getItem('id_token')})
        .then(function(response){
            console.log("FRONT END RES", response)
            
        })
        .catch (function(error){
            console.log(error, "bla");
        })