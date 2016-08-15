var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

//project files
var SearchAccount = require("./components/SearchAccount.jsx")
// var Account = require("./components/Account.jsx")
var LogIn = require("./components/LogIn.jsx")
var SignUp = require("./components/SignUp.jsx")

var App = require("./components/App.jsx");

var routes = (
    <Router history={ReactRouter.browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={SearchAccount}/>
            {/*<Route path="/account/:username" component={Account}/>*/}
          <Route path="login" component={LogIn}/> 
          <Route path="signup" component={SignUp} />
        </Route>
    </Router>
);

module.exports = routes;