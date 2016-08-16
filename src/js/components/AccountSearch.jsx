var React = require('react');
var Link = require('react-router').Link;

/*display the accounts related to that search*/

var AccountSearch = React.createClass ({
    render: function () {
      return (
          <div>
            <h1>Select a place to find your item:</h1>
            <Link to={`/account/${this.props.params.username}/searchItem`}>{this.props.params.username}</Link>
            {this.props.children}
          </div>
          )   
    }
})

module.exports = AccountSearch;