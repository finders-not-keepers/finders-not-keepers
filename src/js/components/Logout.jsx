/* ===== ./src/views/Main/Login/Login.js ===== */
import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import {withRouter} from 'react-router';
var Link = require('react-router').Link;

var AuthEmmitter = require('../utils/AuthEmmitter.js');
// LogoutEmmitter.emitter.on('event', () => {
//   console.log('an event occurred!');
// });


var Logout = React.createClass({
  
    confirmLogout: function() {
      
      this.props.auth.logout();
      this.props.router.push('/');
      AuthEmmitter.emitter.emit('logout');
    },
    
    render: function(){
    var  auth = this.props.auth;
    return (
      <div className="jumbotron">
      <h3 className="text-center">Are you sure you want to logout?</h3>
      <div className="text-center">
             <Button className="btn btn-success btn-lg" onClick={this.confirmLogout}><span className="glyphicon glyphicon-ok"></span>  Yes</Button>
             <Link to={"/accountPage"}><Button className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-remove"></span>  No!</Button></Link>
        </div>
      </div>
    )
    }
});

var LogoutWithRouter = withRouter(Logout);


module.exports = LogoutWithRouter;