/*global localStorage */
var React = require('react');
import { withRouter } from 'react-router'
var Link = require('react-router').Link;
var axios = require("axios");

var PostsForAccount = React.createClass({
    getInitialState : function (){
      return {allItems: []};
    },
    componentWillMount : function (){
        this._fetchData();
        console.log("component is mounting")
    }, 
    _fetchData : function (){
      var that = this;
      var subid = localStorage.getItem('sub');
        axios.post('/postsforaccounts', {
            subid: subid
        })
        .then (function (response){
            if (response.data.msg === 'ok'){
              console.log("RESPONSE IS ALL GOOD", response.data.allitems);
               that.setState({allItems: response.data.allitems})
            }
            
        })
        .catch (function (error){
            console.log(error);
        });
        
    },
    _handleDelete: function(itemId) {
        /*item id is that.state.allItems.id*/
        var that = this;
        console.log("AFTER DELETE", itemId);
        axios.post('/delete',
        {
            itemId: itemId
        })
    },
    render: function() {
        console.log(this.state.allItems, "in render!!!")

        var that = this;
        return (
            <div>
                
                   {that.state.allItems.map(function(item) {
                  
                   var itemIdTarget = ("#" + item.id)
                    return (
                        <div key={item.id} className = "col-xs-12 col-sm-4 col-md-3 col-lg-3 well">
                            <div className = "thumbnail">
                                 <img src={item.media} alt="Generic placeholder thumbnail"/>
                            </div>
                          
                            <div className = "caption">
                                 <h4>{item.title}</h4>
                                 <p className="postsDateP">Found on <span id="accountName">{item.createdAt}</span></p>
                                 
                                 
                                 
                                 <button className="btn btn-default" type="button" data-toggle="modal" data-target={itemIdTarget}><span className="glyphicon glyphicon-eye-open"></span>  View Description</button>
                                 <Link to={`/`}><button className="btn btn-default"><span className="glyphicon glyphicon-pencil"></span>  Edit</button></Link>
                                 <Link to={"/deleteSuccess"}><button value={item.id} onClick={that._handleDelete.bind(that, item.id)} className="btn btn-danger" type="button"><span className="glyphicon glyphicon-remove"></span>  Delete</button></Link>
                                 
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

module.exports = PostsForAccount