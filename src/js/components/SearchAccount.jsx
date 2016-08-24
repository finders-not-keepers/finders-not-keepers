var React = require('react');
var history = require('react-router').browserHistory;
import { withRouter } from 'react-router'
var Link = require('react-router').Link;

var axios = require("axios");

var SearchAccount = React.createClass({
    getInitialState: function(){
        return {};
    },
    _handleClick: function(event) {
        // this.setState({
        //     acounts: this.state.accounts.concat(following)
        // })
        event.preventDefault();
        var that = this;
        axios.post('/searchAccount', {
                account: that.refs.userInput.value.toLowerCase()
            })
            .then(function(response) {
                if(response.data.msg === 'ok'){
                    that.setState({
                        accounts: response.data.account
                    })
                //that.props.router.push(`/account/${response.data.account}`);
                //that.props.router.push(`/account/${response.data}`);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    render: function() {
        var that = this;
        return (
                <div className="homePage">
                <h1 className="text-center element-animation">Finders<span id="not">Not</span> Keepers</h1>
                <p className="text-center homePageSubtitle other-element-animation">We help find the stuff you forgot at the places you went to.</p>
                <br/>
                <hr/>
                <br/>
                
                <h2 className="text-center">Where did you lose your item?</h2>
                    
                <div>
                    <form name="myform" className="input-group"> 
                    
                        <input ref="userInput" className="form-control input-lg" type="text" name="mytextfield" />
                        <span className="input-group-btn"><button onClick={this._handleClick} className="btn btn-lg btn-danger"><span className="glyphicon glyphicon-arrow-right"></span></button></span>
                    
                    </form>
                </div>
                
                <ul className="list-group">
                {that.state.accounts ? that.state.accounts.map(acc => {
                    return <li className="list-group-item" key={acc.id}><Link to={`/account/${acc.id}/searchItem`}><h4>{acc.name}</h4></Link><p className="addressAccount"><span className="glyphicon glyphicon-map-marker"></span>  {acc.address}</p></li>
                }) : ""}
                </ul>
                {that.props.children}
                
            </div>
            
            )
    }
})

var SearchAccountRoute = withRouter(SearchAccount);
module.exports = SearchAccountRoute;