var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require("react-router").IndexLink;

import AuthEmmitter from '../utils/AuthEmmitter.js';

import {withRouter} from 'react-router';


var ACTIVE = {
  background: '#d9534f',
  color: '#fff'
}

var Nav = React.createClass({
  componentDidMount: function(){
    var that = this;
    AuthEmmitter.emitter.on('loggedIn', function(){
      that.props.router.push('/accountPage')
    })
  },
  checkLogin: function() {
    var auth = this.props.auth;
    var loggedIn = auth.loggedIn();
    return loggedIn;
  },
  login: function(e) {
    e.preventDefault();
    this.props.auth.login();
    console.log("INSIDE LOGIN")
  },
  render: function() {
    var that = this;
    function renderNav() {
      
      if(that.checkLogin()) {
        return (
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><IndexLink to={"/accountPage"} activeStyle={ACTIVE}>Home{/*<span className="sr-only">(current)</span>*/}</IndexLink></li>
                <li><Link to={"FAQ"} activeStyle={ACTIVE}>FAQ</Link></li>
              </ul>
               <ul className="nav navbar-nav navbar-right">
                  <li><Link to={"Logout"} activeStyle={ACTIVE}>Logout</Link></li>
              </ul>
            </div>
          );
      } else {
        return (
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><IndexLink to={"/"} activeStyle={ACTIVE}>Home{/*<span className="sr-only">(current)</span>*/}</IndexLink></li>
                <li><Link to={"FAQ"} activeStyle={ACTIVE}>FAQ</Link></li>
                <li><Link onClick={that.login} to={"login"} activeStyle={ACTIVE}>Log In or Sign Up</Link></li>
                
              </ul>
            </div>
          );
      }
    }
    
    return (

      <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
             {/*<a className="navbar-brand" href="/">Finders Not Keepers</a>*/}
            </div>
        
            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            {renderNav()}
          </div>{/*<!-- /.container-fluid -->*/}
        </nav>
    )
  }
})

var NavWithRouter = withRouter(Nav);

module.exports = NavWithRouter;