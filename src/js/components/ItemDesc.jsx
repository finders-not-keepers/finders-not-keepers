var React = require('react');
var axios = require("axios");

var ItemDesc = React.createClass({
    _handleClick: function(event) {
        // go to make a claim form
    },
    render: function() {
        return (
        <div>
        <p>insert query to photo of that item</p>
        <button onClick={this._handleClick} className="submit-button">CLAIM</button>
        </div>
        )
    }
})