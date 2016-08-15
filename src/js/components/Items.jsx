var React = require('react');
var Link = require('react-router').Link;

var Items = React.createClass({
    render: function () {
         console.log(this.props)
        return(
            <div>
            <ul>
                {this.props.items.map(function(item) {
                    return <li key={Math.random()}>{item.name}</li>
                })}
                </ul>
            </div>
            )
    }
})

module.exports = Items;