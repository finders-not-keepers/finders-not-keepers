/*global localStorage */

var React = require('react');
var Link = require('react-router').Link;
var axios = require("axios");
import AuthEmmitter from '../utils/AuthEmmitter';
var axios = require('axios');

var AccountPage = React.createClass({
    getInitialState: function() {
        return {}
    },
    _fetchData : function (){
        axios.post('/stuff', {
            tokenId: localStorage.getItem('id_token')
        })
        .then(function(response){
        })
        .catch (function(error){
            console.log(error);
        })
    },
    componentDidMount: function() {
        console.log(this.props); 
        
        var that  = this;
        AuthEmmitter.emitter.on('profile', function(profile){
            that.setState({
                account: profile
            })
        })
    },
    render: function() {
        return (
            <div className="jumbotron center">
                <h1 className="text-center"> Welcome back,</h1>
                <h1 className="text-center"><span id="not">{this.state.account ? this.state.account.profile.user_metadata.bizname : ''}</span></h1>
                <p className="text-center">What would you like to do today?</p>
                <div className="text-center">
                <button type="button" className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-eye-open"></span>  View/Delete Posts</button>
                <Link to={"/createPost"}><button type="button" className="btn btn-warning btn-lg"><span className="glyphicon glyphicon-edit"></span>  Create New Post</button></Link>
                </div>
            </div>
            )
    }
})

module.exports = AccountPage;