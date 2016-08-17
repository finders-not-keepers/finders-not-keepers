var React = require('react');
var Link = require('react-router').Link;

// project files
var Nav = require("./Nav.jsx")

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-xs-12">
            
            <Nav/>
            
            
            
                <main>
                        {this.props.children}
                </main>
                </div>
                </div>
            </div>
        );
    }
});

module.exports = App;