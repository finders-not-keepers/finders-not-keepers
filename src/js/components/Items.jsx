var React = require('react');
var Link = require('react-router').Link;
var axios = require("axios");

var Items = React.createClass({
    _handleClick: function() {
        /*go to item description*/
        event.preventDefault();

        var that = this;
        axios.get('/itemDesc', {
                item: { /*??????*/ }
            })
            .then(function(response) {
                // if(response.data.msg === 'ok'){
                //     that.setState({
                //         accounts: response.data.account
                //     })
                // }
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    render: function() {
        var that = this;
        return (
            <div>
            <ul>
                {this.props.items.map(function(item) {
                    return <li key={item.id}>{item.title}<br/>{item.media}<br/>{item.description}<br/><button onClick={that._handleClick}>View Description</button></li>
                })}
                </ul>
            </div>
        )
    }
})

module.exports = Items;