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
          searchTerms = this.props.params.query;
    } else {
        searchTerms = this.refs.userInput.value;
    }
    axios.post('/searchItem', {
            item: searchTerms, 
            username: that.props.params.username
        })
        .then(function(response) {
            that.setState({items: response.data.items})
            if(response.data.msg === 'ok'){
                that.props.router.push(`/account/${that.props.params.username}/searchItem/items/${that.refs.userInput.value}`);
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
    render: function() {
        var that = this;
        console.log(this.props.params);
        return (
            <div>
            <h2>What did you lose at {this.props.params.username}?</h2>
                <input ref="userInput" className="input-field" type="text" />
                <button onClick={this._handleClick} className="submit-button">Go</button>
                {this.state.items ? <Items fetchData={this._handleClick} query={this.props.params.query} items={this.state.items}/> : ''}
            </div>
            )
    }
})

var SearchItemRoute = withRouter(SearchItem)
module.exports = SearchItemRoute;