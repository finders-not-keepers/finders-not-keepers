var React = require('react');
var Link = require('react-router').Link;

// project files
var Nav = require("./Nav.jsx")

var App = React.createClass({
    render: function() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1><Link to="/">Finders Not Keepers</Link></h1>
                </header>
                <main className="main-content">
                    <Nav/>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

module.exports = App;