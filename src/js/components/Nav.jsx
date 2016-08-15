var React = require('react');
var Link = require('react-router').Link;

var Nav = React.createClass({
    render: function() {
        return (
            <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Search</Link></li>
                <li><Link to="login">Log In</Link></li>
                <li><Link to="signup">Sign Up</Link></li>
            </ul>
            </div>
        )
    }
})

module.exports = Nav;