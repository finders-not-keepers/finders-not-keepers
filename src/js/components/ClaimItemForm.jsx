var React = require('react');
var axios = require("axios");

var ClaimItemForm = React.createClass ({
    render: function() {
        return (
            <div>
            <h2>Claim... {/*name of item*/}</h2>
            <p>We highly suggest reading our guidelines, <a href="#">here</a>, for claiming an item if this is your first time.</p>
                <form>
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                    <textarea ref="descriptionInput" placeholder="Description"></textarea>
                    <input placeholder="Phone number" />
                    <button>Send!</button>
                </form>
            </div>
            )
    }
})

module.exports = ClaimItemForm;