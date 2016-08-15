var React = require('react');
var history = require('react-router').browserHistory;
import { withRouter } from 'react-router'

var axios = require("axios");

var SearchAccount = React.createClass({
    // getInitialState: function() {
    //   return {
    //       accounts: []
    //   }  
    // },
    _handleClick: function(event) {
        // this.setState({
        //     acounts: this.state.accounts.concat(following)
        // })
        event.preventDefault();
        var that = this;
        axios.post('/searchAccount', {
                account: this.refs.userInput.value
            })
            .then(function(response) {
                if(response.data.msg === 'ok'){
                    that.props.router.push(`/account/${response.data.account}`);
                }
            })
            
            .catch(function(error) {
                console.log(error);
            });
    },
    render: function() {
        return (
            <div>
            <h2>Where did you lose your item?</h2>
                <input ref="userInput" className="input-field" type="text" />
                <button onClick={this._handleClick} className="submit-button">Go</button>
                
                {this.props.children}
            </div>
        )
    }
})

var SearchAccountRoute = withRouter(SearchAccount);
module.exports = SearchAccountRoute;