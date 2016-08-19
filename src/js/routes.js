/*global localStorage */

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

//project files
var SearchAccount = require("./components/SearchAccount.jsx")
var AccountSearch = require("./components/AccountSearch.jsx")
var SignUp = require("./components/SignUp.jsx")
var SearchItem = require("./components/SearchItem.jsx")
var Items = require("./components/Items.jsx")
var AccountPage = require("./components/AccountPage.jsx")
var CreatePost = require("./components/CreatePost.jsx")
var FAQ = require("./components/FAQ.jsx")
var ClaimItemForm = require("./components/ClaimItemForm.jsx")
var Guidelines = require("./components/Guidelines.jsx")
import AuthService from "./utils/AuthService";
var Logout = require('./components/Logout');

var App = require("./components/App.jsx");



var auth = window.auth = new AuthService("PmdbxTpKHsOulN583eoykb8Z8lizNulQ", "findersnotkeepers.auth0.com", {
    allowedConnections: ['Username-Password-Authentication'],
    additionalSignUpFields: [{
            name: "bizname",
            placeholder: "Enter name of your business",
            // The following properties are optionalicon: "https://example.com/assests/address_icon.png",
            validator: function(bizname) {
                return {
                    valid: bizname.length >= 5,
                    hint: "Must have 5 or more chars" // optional
                };
            }
        }, {
            name: "address",
            placeholder: "Enter address of your business",
            // The following properties are optionalicon: "https://example.com/assests/address_icon.png",

            validator: function(address) {
                return {
                    valid: address.length >= 10,
                    hint: "Must have 10 or more chars" // optional
                };
            }
        }, {
            type: "select",
            name: "type",
            placeholder: "Select type of business",
            options: [{
                value: "Restaurant",
                label: "Restaurant"
            }, {
                value: "Local Business or Retail Store",
                label: "Local Business or Retail Store"
            }, {
                value: "Company, Organisation, or Institution",
                label: "Company, Organisation, or Institution"
            }, {
                value: "Entertainement Venue or Theater",
                label: "Entertainement Venue or Theater"
            }, {
                value: "Resort or Park",
                label: "Resort or Park"
            }, {
                value: "Taxis, Ridesharing, or Public Transport",
                label: "Taxis, Ridesharing, or Public Transport"
            }]
            // The following properties are optional

        },

    ]
});


var requireAuth = function(nextState, replace, next) {
    if (!auth.loggedIn()) {
        localStorage.setItem('last_url', window.location.pathname);
        replace({
            pathname: '/' + window.location.hash
        })
    }
    next();
}



var routes = (
    <Router history={ReactRouter.browserHistory}>
        <Route path="/" component={App} auth={auth}>
        <IndexRoute component={SearchAccount} />
            <Route path="account/:username" component={AccountSearch}>
                <Route path="searchItem" component={SearchItem}>
                    <Route path="items/:query" component={Items}/>
                </Route>
            </Route>
         
            <Route path="accountPage" component={AccountPage} onEnter={requireAuth} />
            <Route path="signup" component={SignUp} />
            <Route path="createPost" component={CreatePost} onEnter={requireAuth} />
            <Route path="FAQ" component={FAQ} />
            <Route path="claimItem/:itemId" component={ClaimItemForm}  />
            <Route path="guidelines" component={Guidelines} />
            <Route path="logout" component={Logout} />
        </Route>
        
    </Router>
);

module.exports = routes;
