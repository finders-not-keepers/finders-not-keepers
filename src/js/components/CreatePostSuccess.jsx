var React = require('react');
var Link = require('react-router').Link;

var CreatePostSuccess = React.createClass({
    render: function(){
        return(
            <div className="postSuccess">
                <span className="glyphicon glyphicon-ok-circle fadein"></span>
                <h1 className="text-center">Thank you!</h1>
                <h2 className="text-center">You're post was successfully submitted. Thanks for helping people find their stuff.</h2>
                <br/>
                <Link to={"/accountPage"}><button className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-home"></span>  Back to homepage?</button></Link>
            </div>
            )
    }
})

module.exports = CreatePostSuccess