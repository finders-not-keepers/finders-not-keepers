var React = require('react');
import axios from 'axios';


var ImageUpload = React.createClass({
  getInitialState :function (){
    var defaultUrl = 'https://s3-us-west-1.amazonaws.com/findersnotkeepers/Finder-Default-Img.jpg';
    return { imgPreview: defaultUrl};
    //return {}
  },
  _handleSubmit: function(event) {
    event.preventDefault();
    var file = this.refs.fileInput.files[0];
    console.log("FILESSSSS", file)
    var url = `/save-details?file-name=${file.name}&file-type=${file.type}`;
    var that = this;
    if(file) {
      axios.post(url)
      .then(function(res){
        var imageUrl = res.data.url;
        axios.put(imageUrl, file).then(function(res){
            var blah = res.config.url;
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
    else {
        var defaultUrl = 'https://s3-us-west-1.amazonaws.com/findersnotkeepers/Finder-Default-Img.jpg';
        that.props.handleImageUrl(defaultUrl);
        that.setState({imgPreview: defaultUrl});
    }
  },
  render: function () {
      var that = this;
      return (
          <div>
            <form>
              <input className="btn btn-default" type="file" id="file-input" ref="fileInput" onChange={that._handleSubmit} />  
              <img className="imgPreview" id="preview" src={that.state.imgPreview} />
            </form>
          </div>
      );
    }
});


export default ImageUpload;

 