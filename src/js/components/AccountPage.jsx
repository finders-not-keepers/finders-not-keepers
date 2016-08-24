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
        // axios.post('/stuff', {
        //     tokenId: localStorage.getItem('sub')
        // })
        // .then(function(response){
        //     console.log(response);
        // })
        // .catch (function(error){
        //     console.log(error);
        // })
    },
    componentDidMount: function() { 
        var that  = this;
        AuthEmmitter.emitter.on('profile', function(profile){
            that.setState({ account: profile.profile })
        })

        axios.create({
        headers: { 
            authorization: 'Bearer ' + localStorage.getItem('id_token')
        }
        }).post('/login', {idToken: localStorage.getItem('id_token')})
        .then(function(response){
            var msg = response.data.msg;
            var user = response.data.user;
            if(user) {
                that.setState({account: user})
            }
        })
        .catch (function(error){
            console.log(error);
        })

       this._fetchData();
    },
    render: function() {
        return (
            <div className="container center">
                <h1 id="welcomeBack" className="text-center"> Welcome back,</h1>
                <h1 className="text-center"><span id="accountName">{this.state.account ? this.state.account.user_metadata.bizname : ''}</span></h1>
                <hr/>
                <h2 className="text-center whatToDo">What would you like to do today?</h2>
                <br/>
                <div className="text-center">
                <Link to={"/accountPosts"}><button type="button" className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-eye-open"></span>  View/Delete Posts</button></Link>
                <Link to={"/createPost"}><button type="button" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-edit"></span>  Create New Post</button></Link>
                </div>
            </div>
            )
    }
})

module.exports = AccountPage;