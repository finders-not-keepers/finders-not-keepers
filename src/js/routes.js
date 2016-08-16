var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

//project files
var SearchAccount = require("./components/SearchAccount.jsx")
var AccountSearch = require("./components/AccountSearch.jsx")
var LogIn = require("./components/LogIn.jsx")
var SignUp = require("./components/SignUp.jsx")
var SearchItem = require("./components/SearchItem.jsx")
var Items = require("./components/Items.jsx")
var AccountPage = require("./components/AccountPage.jsx")
var CreatePost = require("./components/CreatePost.jsx")
var FAQ = require("./components/FAQ.jsx")

var App = require("./components/App.jsx");

var routes = (
    <Router history={ReactRouter.browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={SearchAccount}/>
            <Route path="account/:username" component={AccountSearch}>
                <Route path="searchItem" component={SearchItem}>
                    <Route path="items/:query" component={Items} />
                </Route>
            </Route>
            
            <Route path="login" component={LogIn}/> 
            <Route path="accountPage" component={AccountPage} />
            <Route path="signup" component={SignUp} />
            <Route path="createPost" component={CreatePost} />
            <Route path="FAQ" component={FAQ} />
        </Route>
        
    </Router>
);

module.exports = routes;