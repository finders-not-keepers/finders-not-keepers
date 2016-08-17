var React = require('react');
var axios = require("axios");
import { withRouter } from 'react-router';

var Items = require("./Items");

var SearchItem = React.createClass({
    getInitialState: function(){
        return {
        };
    },
    componentDidMount: function() {
        if(this.props.params.query){
            this._fetchData();
        }
    },
    _fetchData: function() {
    var searchTerms = '';
    var that = this;
    if(this.props.params.query){
          searchTerms = this.props.params.query.toLowerCase();
    } else {
        searchTerms = this.refs.userInput.value.toLowerCase();
    }
    axios.post('/searchItem', {
            item: searchTerms, 
            username: that.props.params.username
        })
        .then(function(response) {
            console.log(response.data);
            
            if(response.data.msg === 'ok'){
                that.setState({item: response.data.item})
                that.props.router.push(`/account/${that.props.params.username}/searchItem/items/${searchTerms }`);
            }
        })
        .catch(function(error) {
            console.log(error, "bla");
        }); 
        
    },
    _handleClick: function(event) {
        event.preventDefault();
        this._fetchData();
    },
    render: function() {
        return (
            <div>
            <h2>What did you lose at <span id="locationSpan">{this.props.params.username}</span>?</h2>
                <input ref="userInput" className="form-control" type="text" />
                <button onClick={this._handleClick} className=" btn-lg btn btn-danger">Find!</button>
                {this.state.item ? <Items fetchData={this._handleClick} query={this.props.params.query} items={this.state.item}/> : ''}
            </div>
            )
    }
})

var SearchItemRoute = withRouter(SearchItem)
module.exports = SearchItemRoute;