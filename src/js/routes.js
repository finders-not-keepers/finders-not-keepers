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
var auth = new AuthService("PmdbxTpKHsOulN583eoykb8Z8lizNulQ", "findersnotkeepers.auth0.com");

var requireAuth = function(nextState, replace, next) {
    if (!auth.loggedIn()) {
        localStorage.setItem('last_url', window.location.pathname);
        replace({ pathname: '/' + window.location.hash})
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

