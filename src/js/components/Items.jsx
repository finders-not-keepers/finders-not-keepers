var React = require('react');
var Link = require('react-router').Link;
var axios = require("axios");
import { withRouter } from 'react-router';

var Items = React.createClass({
    // _handleClick: function() {
    //     /*go to item description*/
    //     event.preventDefault();

    //     var that = this;
    //     console.log("we get here");
    //     console.log(this.props.items)
    //     axios.post(`/itemDesc`, {
    //             item: that.props.params.id
    //         })
    //         .then(function(response) {
    //             if(response.data.msg === 'ok'){
    //                 that.setState({
    //                     accounts: response.data.account
    //                 })
    //                 that.props.router.push(`/account/${that.props.params.username}/searchItem/items/${that.props.params.id}`);
    //             }
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });
    // },
    render: function() {
        var that = this;
        return (
            <div>
            <ul>
                {this.props.items.map(function(item) {
                    return <li key={item.id}>{item.title}<br/>{item.media}<br/>{item.createdAt}<br/><Link to={`itemDescription/${item.id}`}><button>View Description</button></Link></li>
                })}
                </ul>
                {this.props.children}
            </div>
        )
    }
})

var ItemsRoute = withRouter(Items);
module.exports = ItemsRoute;