var React = require('react');
var Link = require('react-router').Link;

var Nav = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="login">Log In</Link></li>
                        <p>(these links for dev purposes)</p>
                        <ul>
                            <li><Link to="createPost">Create new lost item</Link></li>
                            <li><Link to="accountPage">View account landing page</Link></li>
                        </ul>
                    <li><Link to="signup">Sign Up</Link></li>
                    <li><Link to="FAQ">FAQ</Link></li>
                </ul>
            </div>
        )
    }
})

module.exports = Nav;