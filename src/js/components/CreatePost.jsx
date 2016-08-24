/* global localStorage*/
var React = require('react');
var axios = require("axios");
var Link = require('react-router').Link;
import ImageUpload from './ImageUpload';
import { withRouter } from 'react-router';



var CreatePost = React.createClass({
    getInitialState : function (){
        return {
            imgUrl: "https://s3-us-west-1.amazonaws.com/findersnotkeepers/Finder-Default-Img.jpg"
        }
    },
    _sendData: function () {
      var imageUrl = this.state.imgUrl;
      var subid = localStorage.getItem('sub');
      var that = this;
      axios.post('/createPost', {
            title: that.refs.titleInput.value.toLowerCase(), 
            description: that.refs.descriptionInput.value.toLowerCase(),
            category: that.refs.category.value.toLowerCase(),
            subid: subid, 
            imageUrl : imageUrl
        })
        .then(function(response){
            if(response.data.msg === 'ok'){
               console.log(response);
            }
        })
        .catch (function(error){
            console.log(error);
        })
    },
    _handleClick: function() {
        this._sendData();
        this._handleImageUrl();
        this.props.router.push("/postSuccess");
    },
    _handleImageUrl: function(imgUrl) {
        this.setState({
            imgUrl: imgUrl
        })
    },
    render: function() {
         var that = this;
        return(
            <div>
            <h2>Create a new lost item</h2>
                
                    <p>Enter a title for the item you found:</p>
                    <input ref="titleInput" className="form-control input-lg" type="text"/>
                    <p>Select Category:</p>
                    <select ref="category" className="form-control input-lg"  data-width="100%" placeholder="Category">
                        <option value="Accessories">Accessory</option>
                        <option value="Keys">Keys</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Wallets or Cards">Wallet or Card</option>
                        <option value="Electronics">Electronic</option>
                        <option value="General">Other</option>
                    </select>
                    <p>Description:</p>
                    <textarea rows="10" ref="descriptionInput" className="form-control input-lg"></textarea>
                    
                    <ImageUpload handleImageUrl={this._handleImageUrl}/>
                    
                    <button className="btn btn-success btn-lg" onClick={that._handleClick}><span className="glyphicon glyphicon-send"></span>  Submit</button>
                
            </div>
            )
    }
})


var CreatePostRoute = withRouter(CreatePost)
module.exports = CreatePostRoute;
