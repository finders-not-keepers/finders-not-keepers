var React = require('react');

var SearchItem = React.createClass({
    _handleSubmit: function(event) {
        event.preventDefault();
        /*search in the database for an account and go to search item page*/
        
        
    },
    render: function() {
        return (
            <div>
            <h2>What did you lose?</h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="userInput" className="input-field" type="text" />
                    <button className="submit-button">Go</button>
                </form>
            </div>
            )
    }
})


module.exports = SearchItem;