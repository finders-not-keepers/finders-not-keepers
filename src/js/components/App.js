var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        {/*nav*/}
        {this.props.children}
        <hr/>
      </main>
    );
  }
});

module.exports = App;