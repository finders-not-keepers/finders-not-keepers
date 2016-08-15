var React = require('react');
var Link = require('react-router').Link;

// project files
var Nav = require("./Nav.jsx")

var App = React.createClass({
    render: function() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1><Link to="/"><img src="img/logo.png"/></Link></h1>
                    <hr/>
                </header>
                <main className="main-content">
                    <Nav/>
                    <hr/>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

module.exports = App;