var React = require('react');
var Link = require('react-router').Link;
var axios = require("axios");
import { withRouter } from 'react-router';

var Items = React.createClass({
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
                                 <h4>{item.title}</h4>
                                 <p className="postsDateP">Found on: <span id="accountName">{item.createdAt}</span></p>
                                 
                                 <Link to={`claimItem/${item.id}`}><button className="btn btn-danger">Claim</button></Link>
                                 <button className="btn btn-default" type="button" data-toggle="modal" data-target={itemIdTarget}>View Description</button>
                                 
                                 <div className="modal fade" id={item.id}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="modal-body">
                                                <p className="postsDateP">{item.description}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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