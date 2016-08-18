var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require("react-router").IndexLink;
var ACTIVE = { background: '#d9534f', color: '#fff'}

var Nav = React.createClass({
    render: function() {
        return (
            
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
             {/*<a className="navbar-brand" href="/">Finders Not Keepers</a>*/}
            </div>
        
            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><IndexLink to={"/"} activeStyle={ACTIVE}>Home{/*<span className="sr-only">(current)</span>*/}</IndexLink></li>
                <li><Link to={"login"} activeStyle={ACTIVE}>Log In</Link></li>
                <li><Link to={"signup"} activeStyle={ACTIVE}>Sign Up</Link></li>
                <li><Link to={"FAQ"} activeStyle={ACTIVE}>FAQ</Link></li>
              </ul>
            </div>{/*<!-- /.navbar-collapse -->*/}
          </div>{/*<!-- /.container-fluid -->*/}
        </nav>
        )
    }
})

module.exports = Nav;