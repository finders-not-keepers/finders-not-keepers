var React = require('react');
var axios = require("axios");
var Link = require('react-router').Link;

var ItemDesc = React.createClass({
    getInitialState: function () {
        return{
        }
    },
    componentDidMount: function() {
        var that = this;
        axios.post('/itemDescription', {
                ID: that.props.params.itemId
            })
            .then(function(response) {
                if (response.data.msg === 'ok') {
                    that.setState({
                        description: response.data.description[0].description,
                        title: response.data.description[0].title,
                        media: response.data.description[0].media,
                        date: response.data.description[0].createdAt
                    })
                }
            })
            .catch(function(error) {
                console.log(error);
            });

    },
    _handleClick: function(event) {
        // go to make a ClaimItemForm.jsx
    },
    render: function() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <h3>{this.state.media}</h3>
                <p>{this.state.description}</p>
                <br/>
                <p>Found on: {this.state.date}</p>
                <Link to={`claimItem/${this.props.params.itemId}`}><button onClick={this._handleClick} className="submit-button">CLAIM</button></Link>
            </div>
        )
    }
})

module.exports = ItemDesc;