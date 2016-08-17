var React = require('react');
var Link = require('react-router').Link;

/*display the accounts related to that search*/

var AccountSearch = React.createClass ({
    render: function () {
      return (
          <div>
            {this.props.children}
          </div>
          )   
    }
})

module.exports = AccountSearch;