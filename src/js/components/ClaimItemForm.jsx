var React = require('react');
var axios = require("axios");


var ClaimItemForm = React.createClass ({
    getInitialState: function(){
        return {
        };
    },
    componentWillMount: function (){
        this._fetchData();
    },
    _fetchData : function (){
        var that = this;
        axios.post('/crap', {
            itemId: that.props.params.itemId
        })
        .then (function (response){
            console.log(response);
            if(response.data.msg === 'ok'){
               that.setState({
                    media: response.data.item[0].media,
                    title: response.data.item[0].title,
                    description: response.data.item[0].description
               });
            }
        })
        .catch (function (error){
            console.log(error);
        });
    },
    _sendData: function() {
        console.log(this.props);
        var that = this;
        axios.post('/claimItem/:id', {
            itemId: that.props.params.itemId, 
            name: that.refs.firstname.value + " " + that.refs.lastname.value,
            email: that.refs.email.value,
            message : that.refs.description.value
        })
        .then(function(response){
            if(response.data.msg === 'ok'){
               console.log(response);
            }
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
        var that = this;
        return (
            <div>
            <h2>{that.state.title}</h2>
            <img src={that.state.media} />
            <p>We highly suggest reading our guidelines, <a href="/guidelines">here</a>, for claiming an item if this is your first time.</p>
                <form className="form-group form-group-lg">
                    <input className="form-control" ref ="firstname" placeholder="First name"/>
                    <input className="form-control" ref ="lastname" placeholder="Last name"/>
                    <textarea rows="10" className="form-control" ref="description" placeholder="Provide as much detail here as possible to prove that the item is yours. View guidelines above for more info!"></textarea>
                    <input className="form-control" ref ="email" placeholder="Email" />
                    <button className="btn btn-info btn-lg" onClick={that._handleClick}>Send!</button>
                </form>
            </div>
            )
    }
})

module.exports = ClaimItemForm;