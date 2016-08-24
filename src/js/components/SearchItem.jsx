/*global localStorage */
var React = require('react');
var axios = require("axios");
import { withRouter } from 'react-router';
var Link = require("react-router").Link;

var Items = require("./Items");

var SearchItem = React.createClass({
    getInitialState: function(){
        return {
            allItems: [],
            name: ""
        };
    },
    componentDidMount: function() {
        var that = this;
        if(this.props.params.query){
            this._fetchData(this.props.params.query);
        }
        var accountid = this.props.params.username;
        axios.post("/allItems", {
            accountid: accountid
        })
        .then(function(response) {
            if (response.data.msg === "ok"){
               that.setState({
                   allItems: response.data.items,
                   name: response.data.items[0].name
               })
            }
        })
        .catch(function(error) {
            console.log(error)
        })
    },
    _fetchData: function(query) {
    var searchTerms = this.refs.userInput.value.toLowerCase();
    var that = this;
    axios.post('/searchItem', {
            item: searchTerms || query, 
            username: that.props.params.username
        })
        .then(function(response) {
            if(response.data.msg === 'ok'){
                that.setState({allItems: response.data.item});
                that.props.router.push(`/account/${that.props.params.username}/searchItem/items/${searchTerms}`);
            }
        })
        .catch(function(error) {
            console.log(error);
        }); 
        
    },
    _handleClick: function(event) {
        event.preventDefault();
        this._fetchData();
    },
    _renderContent: function() {
        var that = this;
        if(this.state.allItems.length > 0) {
            return (


            
            <div>
            {that.state.allItems.map(function(item) {
                   var itemIdTarget = ("#" + item.id)
                   var itemIdTargetImg = ("#" + item.id + "69")
                    return (
                        <div key={item.id} className = "col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="well">
                                <div className="thumbnail">
                                     <a data-target={itemIdTargetImg} data-toggle="modal"><img id="imageToBeClicked" src={item.media} alt={item.title} /></a>
                                </div>
                                <div className="modal fade" id={item.id + "69"}>
                                    <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <img className="modalImage text-center img-responsive" src={item.media}></img>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal"><span className="glyphicon glyphicon-remove"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                
                              
                                <div className = "caption">
                                     <h4>{item.title}</h4>
                                     <p className="postsDateP">Found on: <span id="accountName">{item.createdAt.substring(0,10)}</span></p>
                                     
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
                            </div>
                        </div>)
                   })}
                </div>
            

                );
        }
        else {
            return <div><h2 className="text-center">There are no items matching your search at the moment. <br/>Consider changing your search terms.😊</h2></div>
        }
    },
    render: function() {
        var that = this;
        
        return (
            <div>
            <h2>What did you lose at <span id="locationSpan">{that.state.name ? that.state.name : ''}</span>?</h2>
            <form name="myform" className="input-group">
                <input ref="userInput" className="form-control input-lg" type="text" name="mytextfield"/>
                <span className="input-group-btn"><button onClick={this._handleClick} className=" btn-lg btn btn-danger"><span className="glyphicon glyphicon-search"></span></button></span>
                {this.state.item ? <Items fetchData={this._handleClick} query={this.props.params.query} items={this.state.item}/> : ''}
            </form>
            {this._renderContent()}
            </div>
            );
        
    }
})

var SearchItemRoute = withRouter(SearchItem)
module.exports = SearchItemRoute;

