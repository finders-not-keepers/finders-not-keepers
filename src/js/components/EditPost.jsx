/* global localStorage*/
var React = require('react');
var axios = require("axios");
var Link = require('react-router').Link;
import ImageUpload from './ImageUpload';
import { withRouter } from 'react-router';

var EditPost = React.createClass({
    getInitialState : function (){
        return {}
    },
    componentWillMount: function (){
        this._fetchData();
    },
    _fetchData : function () {
        var that = this;
        axios.get(`/getpost/${this.props.params.itemId}`)
        .then(function(response){
            console.log("GET POST RES", response.data.allitem[0].media)
            if(response.data.msg === 'ok'){
              var item = response.data.allitem[0];
              that.setState({
                  title: item.title, 
                  description: item.description, 
                  category: item.category,
                  imgUrl: item.media
              })
              
            }
        })
        .catch (function(error){
            console.log(error);
        })
    },
    _handleClick: function(event) {
        event.preventDefault();
        var imageUrl = this.state.imgUrl;
        var subid = localStorage.getItem('sub');
        var that = this;
        axios.post(`/editpost/:id`, {
            itemId : this.props.params.itemId,
            title: that.refs.titleInput.value.toLowerCase(), 
            description: that.refs.descriptionInput.value.toLowerCase(),
            category: that.refs.category.value.toLowerCase(),
            subid: subid, 
            imgUrl : imageUrl
        })
        .then(function(response){
            if(response.data.msg === 'ok'){
               console.log(response);
            }
        })
        .catch (function(error){
            console.log(error);
        })
        this.props.router.push("/accountPosts");
    },
    _handleImageUrl: function(imgUrl) {
        this.setState({
            imgUrl: imgUrl
        });
    },
    render: function() {
        console.log("IN THE RENDER", this.state.imgUrl);
         var that = this;
         var imgURL = this.state.imgUrl;
         if(!this.state.title){
            return <div> RIEN</div>
                
        }
         
        return(
            <div>
            <h2>Edit Item</h2>
                    <p>Enter a title for the item you found:</p>
                    <input ref="titleInput" className="form-control input-lg" type="text" defaultValue={that.state.title}/>
                    <p>Select Category:</p>
                    <select ref="category" className="form-control input-lg"  data-width="100%" defaultValue={that.state.category}>
                        <option value="Accessories">Accessory</option>
                        <option value="Keys">Keys</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Wallets or Cards">Wallet or Card</option>
                        <option value="Electronics">Electronic</option>
                        <option value="General">Other</option>
                    </select>
                    <p>Description:</p>
                    <textarea rows="10" ref="descriptionInput" className="form-control input-lg" defaultValue={that.state.description}></textarea>
                    
                    <ImageUpload handleImageUrl={that._handleImageUrl} imgURL={imgURL} />
                    
                    <button className="btn btn-success btn-lg" onClick={that._handleClick}><span className="glyphicon glyphicon-send"></span>  Submit</button>
                
            </div>
            
            )
    }
})


var EditPost = withRouter(EditPost)
module.exports = EditPost;