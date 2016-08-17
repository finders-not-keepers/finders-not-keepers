var React = require('react');
var Link = require('react-router').Link;
var Login = require('./Login.jsx')


// project files
var Nav = require("./Nav.jsx")

var App = React.createClass({
    render: function() {
        
    var children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1><Link to="/"><img src="img/logo.png"/></Link></h1>
                    <hr/>
                </header>
                <main className="main-content">
                    <Nav/>
                    <hr/>
                    {children}
                </main>
            </div>
        );
    }
});

module.exports = App;