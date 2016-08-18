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
                   {this.props.items.map(function(item) {
                   var itemIdTarget = ("#" + item.id)
                    return (
                        <div key={item.id} className = "col-xs-12 col-sm-4 col-md-3 col-lg-3 well">
                            <div className = "thumbnail">
                                 <img src={item.media} alt="Generic placeholder thumbnail"/>
                            </div>
                          
                            <div className = "caption">
                                 <h3>{item.title}</h3>
                                 <p>Found on <span id="not">{item.createdAt}</span></p>
                                 
                                 <Link to={`claimItem/${item.id}`}><button className="btn btn-info btn-sm">Claim</button></Link>
                                 <button className="btn btn-warning btn-sm" type="button" data-toggle="modal" data-target={itemIdTarget}>View Description</button>
                                 
                                 <div className="modal fade" id={item.id}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="modal-body">
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default btn-small" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                 
                            </div>
                        </div>)
                   })} 
            </div>
        )
    }
})

var ItemsRoute = withRouter(Items);
module.exports = ItemsRoute;