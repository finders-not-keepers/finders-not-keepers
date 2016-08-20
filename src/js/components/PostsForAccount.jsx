/*global localStorage */
var React = require('react');
import { withRouter } from 'react-router'
var Link = require('react-router').Link;
var axios = require("axios");

var PostsForAccount = React.createClass({
    componentWillMount : function (){
        console.log("WE GET HERE");
        this._fetchData();
    }, 
    _fetchData : function (){
      var that = this;
      var subid = localStorage.getItem('sub');
      console.log(subid, "HEY YOU");
        axios.post('/postsforaccounts', {
            subid: subid
        })
        .then (function (response){
            console.log(response);
        })
        .catch (function (error){
            console.log(error);
        });
        
    },
    render: function() {
        var that = this;
        return (
            <div>
                   {that.props.items.map(function(item) {
                   var itemIdTarget = ("#" + item.id)
                    return (
                        <div key={item.id} className = "col-xs-12 col-sm-4 col-md-3 col-lg-3 well">
                            <div className = "thumbnail">
                                 <img src={item.media} alt="Generic placeholder thumbnail"/>
                            </div>
                          
                            <div className = "caption">
                                 <h3>{item.title}</h3>
                                 <p>Found on <span id="accountName">{item.createdAt}</span></p>
                                 
                                 <Link to={`/`}><button className="btn btn-default"><span className="glyphicon glyphicon-pencil"></span>  Edit</button></Link>
                                 <button className="btn btn-default" type="button" data-toggle="modal" data-target={itemIdTarget}><span className="glyphicon glyphicon-remove"></span>  Delete</button>
                                 
                            </div>
                        </div>)
                   })} 
            </div>
        )
    }
})

module.exports = PostsForAccount