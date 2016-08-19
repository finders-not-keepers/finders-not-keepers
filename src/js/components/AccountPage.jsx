var React = require('react');
var Link = require('react-router').Link;
var axios = require("axios");
import AuthEmmitter from '../utils/AuthEmmitter';

var AccountPage = React.createClass({
    getInitialState: function() {
        return {}
    },
    componentDidMount: function() {
        var that  = this;
        AuthEmmitter.emitter.on('profile', function(profile){
            console.log("THIS IS IN")
            that.setState({
                account: profile
            })
        })
    },
    render: function() {
        console.log(this.state);
        //console.log(JSON.parse(localStorage.getItem("profile")));
        
        return (
            <div className="jumbotron center">
                <h1 className="text-center"> Welcome back,</h1>
                <h1 className="text-center"><span id="accountName">{this.state.account ? this.state.account.profile.user_metadata.bizname : ''}</span></h1>
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