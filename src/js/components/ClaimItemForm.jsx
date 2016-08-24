var React = require('react');
var axios = require("axios");
var Link = require('react-router').Link;
import { withRouter } from 'react-router';


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
        axios.post('/claim', {
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
        this.props.router.push("/claimSuccess");
    },
    render: function() {
        var that = this;
        return (
            <div>
            <h2>{that.state.title}</h2>
            <img src={that.state.media} className="col-xs-6 thumbnail claimPhoto"/>
            <div className="row">
            <div className="col-xs-12">
            <h4 className="claim-desc"><span className="claim-desc-color">Description:</span> {that.state.description}</h4>
            <hr/>
            <p>We highly suggest reading our guidelines, <a href="/guidelines" className="decodeMTL">here</a>, for claiming an item if this is your first time.</p>
                
                <form className="form-group form-group-lg">
                    <p>First name:</p>
                    <input className="form-control" ref ="firstname"/>
                    <p>Last name:</p>
                    <input className="form-control" ref ="lastname"/>
                    <p>Description:</p>
                    <p><em>Provide as much detail as possible to prove that this item is yours (serial numbers, markings, contents, colors, etc.)</em></p>
                    <textarea rows="10" className="form-control" ref="description"></textarea>
                    <p>E-mail:</p>
                    <input className="form-control" ref ="email"/>
                    <button className="btn btn-info btn-lg" onClick={that._handleClick}><span className="glyphicon glyphicon-send"></span>  Send!</button>
                </form>
                </div>
            </div>
            </div>
            )
    }
})

var ClaimItemFormRoute = withRouter(ClaimItemForm)
module.exports = ClaimItemFormRoute;
