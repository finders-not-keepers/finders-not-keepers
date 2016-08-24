var React = require('react');
var Link = require('react-router').Link;

var ClaimItemSuccess = React.createClass({
    render: function(){
        return(
            <div className="postSuccess">
                <span className="glyphicon glyphicon-ok-circle fadein"></span>
                <h3 className="text-center whiteText">We hope you get your item back soon!</h3>
                <h4 className="text-center whiteText">You're e-mail was successfully sent. <br/> All interactions will now occur via e-mail with the business owner. Best of luck!</h4>
                <br/>
                <Link to={"/"}><button className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-home"></span>  Back to homepage?</button></Link>
            </div>
            )
    }
})

module.exports = ClaimItemSuccess