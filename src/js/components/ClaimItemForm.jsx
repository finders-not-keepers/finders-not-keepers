var React = require('react');
var axios = require("axios");

var ClaimItemForm = React.createClass ({
    _handleClick: function() {
        // send to primary account holder e-mail
    },
    render: function() {
        return (
            <div>
            <h2>Claim...(*name of item*)</h2>
            <h3>include picture of item here</h3>
            <p>We highly suggest reading our guidelines, <a href="/guidelines">here</a>, for claiming an item if this is your first time.</p>
                <form>
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                    <textarea ref="descriptionInput" placeholder="Description"></textarea>
                    <input placeholder="Phone number" />
                    <button onClick={this._handleClick}>Send!</button>
                </form>
            </div>
            )
    }
})

module.exports = ClaimItemForm;