var React = require('react');
var Link = require('react-router').Link;

var AccountPage = React.createClass({
    render: function() {
        return(
            <div className="jumbotron center">
                <h1 className="text-center"> Welcome back,</h1>
                <h1 className="text-center"><span id="not">Tim Hortons 1</span></h1>
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