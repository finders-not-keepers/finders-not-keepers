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
    }, 
    _fetchData : function (){
      var that = this;
      var subid = localStorage.getItem('sub');
        axios.post('/postsforaccounts', {
            subid: subid
        })
        .then (function (response){
            console.log(response)
            if (response.data.msg === 'ok'){
               that.setState({allItems: response.data.allitems})
            }
            
        })
        .catch (function (error){
            console.log(error);
        });
        
    },
    _handleDelete: function(itemId) {
        var that = this;
        axios.post('/delete',
        {
            itemId: itemId
        })
    },
    render: function() {
        console.log(this.state.allItems)
        
        var that = this;
        return (
            <div>   
                <h2>Your posts:</h2>
                
                   {that.state.allItems.map(function(item) {
                  
                   var itemIdTarget = ("#" + item.id)
                    return (
                        <div key={item.id} className = "col-xs-12 col-sm-4 col-md-3 col-lg-3 well">
                            <div className = "thumbnail">
                                 <img src={item.media} alt="Generic Thumbnail"></img>
                            </div>
                          
                            <div className = "caption">
                                 <h4>{item.title}</h4>
                                 <p className="postsDateP">Found on: <span id="accountName">{item.createdAt.substring(0,10)}</span></p>
                                 
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