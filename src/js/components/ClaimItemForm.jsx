var React = require('react');
var axios = require("axios");




var ClaimItemForm = React.createClass ({
    
    _sendData: function() {
        console.log(this.props)
        console.log("these are the refs");
        console.log(this.props)
        var that = this;
        axios.post('/claimItem/send', {
            name: that.refs.firstname.value + " " + that.refs.lastname.value,
            email: that.refs.email.value,
            message : that.refs.description.value, 
            title: ,
            media: ,
        })
        .then(function(response){
            console.log("this is the response")
            console.log(response)
        })
        .catch (function(error){
            console.log(error, "bla");
        })
        
    },
    _handleClick: function(event) {
        event.preventDefault();
        this._sendData();
    },
    render: function() {
        return (
            <div>
            <h2>Claim...(*name of item*)</h2>
            <h3>include picture of item here</h3>
            <p>We highly suggest reading our guidelines, <a href="/guidelines">here</a>, for claiming an item if this is your first time.</p>
                <form>
                    <input ref ="firstname" placeholder="First name"/>
                    <input ref ="lastname" placeholder="Last name"/>
                    <textarea ref="description" placeholder="Description"></textarea>
                    <input ref ="email" placeholder="Email" />
                    <button onClick={this._handleClick}>Send!</button>
                </form>
            </div>
            )
    }
})

module.exports = ClaimItemForm;