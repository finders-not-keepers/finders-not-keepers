var React = require('react');
var axios = require("axios");


var ClaimItemForm = React.createClass ({
    _sendData: function() {
        var that = this;
        axios.post('/claimItem/:id', {
            itemId: that.props.params.itemId, 
            name: that.refs.firstname.value + " " + that.refs.lastname.value,
            email: that.refs.email.value,
            message : that.refs.description.value
        })
        .then(function(response){
            var emailobj = response.data;
        })
        .catch (function(error){
            console.log(error);
        })
    },
    _handleClick: function(event) {
        event.preventDefault();
        this._sendData();
    },
    render: function() {
        return (
            <div>
            <h2>Title</h2>
            <h3>include picture of item here</h3>
            <p>We highly suggest reading our guidelines, <a href="/guidelines">here</a>, for claiming an item if this is your first time.</p>
                <form>
                    <input className="form-control" ref ="firstname" placeholder="First name"/>
                    <input className="form-control" ref ="lastname" placeholder="Last name"/>
                    <textarea className="form-control" ref="description" placeholder="Description"></textarea>
                    <input className="form-control" ref ="email" placeholder="Email" />
                    <button className="btn btn-default" onClick={this._handleClick}>Send!</button>
                </form>
            </div>
            )
    }
})

module.exports = ClaimItemForm;