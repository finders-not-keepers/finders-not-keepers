var React = require('react');

var LogIn = React.createClass({
    _handleSubmit: function() {
        {/*brings you to landing page of account*/}
    },
    render: function () {
        return(
            <div>
                <h2>Welcome back! Log In:</h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="usernameInput" className="input-field" type="text" placeholder="Enter your username" />
                    <input ref="passwordInput" className="input-field" type="password" placeholder="Enter your password" />
                    <button className="search-button">Log In</button>
                </form>
            </div>
            )
    }
})

module.exports = LogIn;