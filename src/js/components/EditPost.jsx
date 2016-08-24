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
    componentDidMount: function (){
        this._fetchData();
    },
    _fetchData : function () {
        var that = this;
        axios.post('/editpost/:id', {
          itemId: this.props.params.itemId
        })
        .then(function(response){
            if(response.data.msg === 'ok'){
              console.log(response.data.allitem);
              var item = response.data.allitem[0];
              console.log(item.title);
              that.setState({
                  title: item.title, 
                  description: item.description, 
                  category: item.category
              })
              
            }
        })
        .catch (function(error){
            console.log(error);
        })
    },
    // _handleClick: function(event) {
    //     event.preventDefault();
    //     this._sendData();
    //     //this.props.router.push("/claimSuccess");
    // },
    render: function() {
        console.log("IN THE RENDER", this.state.media)
        console.log(this.state.title, "test avec max");
         var that = this;
         if(!this.state){
            return <div> RIEN</div>
                
        }
         
        return(
            
            <div>
            <h2>Edit Item</h2>
                
                    <p>Enter a title for the item you found:</p>
                    <input ref="titleInput" className="form-control input-lg" type="text" value={that.state.title}/>
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
                    
                    
                    <ImageUpload handleImageUrl={this._handleImageUrl}/>
                    
                    <button className="btn btn-success btn-lg" onClick={that._handleClick}><span className="glyphicon glyphicon-send"></span>  Submit</button>
                
            </div>
            
            )
    }
})


var EditPost = withRouter(EditPost)
module.exports = EditPost;