var React = require('react');
import axios from 'axios';


var ImageUpload = React.createClass({
  getInitialState :function (){
    // var defaultUrl = 'https://s3-us-west-1.amazonaws.com/findersnotkeepers/Finder-Default-Img.jpg';
    // return { imgPreview: defaultUrl};
    return {
      
    }
  },
  _handleSubmit: function(event) {
    event.preventDefault();
    var file = this.refs.fileInput.files[0];
    var url = `/save-details?file-name=${file.name}&file-type=${file.type}`;
    var that = this;
    if(file) {
      axios.post(url)
      .then(function(res){
        var imageUrl = res.data.url;
        axios.put(imageUrl, file).then(function(res){
        }).catch(function(err){
            console.log(err);
        })
        that.props.handleImageUrl(imageUrl);
        that.setState({imgPreview: imageUrl});
      })
      .catch(function(err){
        console.log(err)
      })
    } 
  },
  render: function () {
      var that = this;
      console.log('props', this.props);
      return (
          <div>
            
            <div className="fileUpload btn btn-default btn-lg">
            <span><span className="glyphicon glyphicon-camera"></span>  Upload an image</span>
            <input type="file" className="upload image-upload-btn" id="file-input" ref="fileInput" onChange={that._handleSubmit}/>
            </div>
              <img className="imgPreview" id="preview" src={this.props.imgURL} />
            
          </div>
      );
    }
});


export default ImageUpload;

 