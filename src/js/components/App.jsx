var React = require('react');
var Link = require('react-router').Link;


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
            <div className="container-fluid">
            <div className="row">
            <div className="col-xs-12">
            <Nav auth={this.props.route.auth} />
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