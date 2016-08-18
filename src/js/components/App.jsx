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
            <div className="container">
            <div className="row">
            <div className="col-xs-12">
            <Nav/>
                <main>
                    {children}
                </main>
                </div>
                </div>
            </div>
        );
    }
});

module.exports = App;