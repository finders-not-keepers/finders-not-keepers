var React = require('react');

var AccountPage = React.createClass({
    render: function() {
        return(
            <div>
                <h2>Account Landing Page</h2>
                <button>View Posts</button>
                <button>Create New Post</button>
            </div>
            )
    }
})

module.exports = AccountPage;