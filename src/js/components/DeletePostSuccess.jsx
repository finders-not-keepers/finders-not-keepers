var React = require('react');
var Link = require('react-router').Link;

var DeletePostSuccess = React.createClass({
    render: function(){
        return(
            <div className="postSuccess">
                <span className="glyphicon glyphicon-ok-circle element-animation"></span>
                <h1 className="text-center">Thank you!</h1>
                <h2 className="text-center">You're post was successfully deleted. We hope it found it's home.</h2>
                <br/>
                <Link to={"/accountPosts"}><button className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-th-large"></span>  Back to all posts</button></Link>
            </div>
            )
    }
})

module.exports = DeletePostSuccess