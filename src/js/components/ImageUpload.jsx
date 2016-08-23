var React = require('react');
import axios from 'axios';


var ImageUpload = React.createClass({
  _handleSubmit: function(e) {
    e.preventDefault();
    var file = this.refs.fileInput.files[0];
    var url = `/save-details?file-name=${file.name}&file-type=${file.type}`;
    //console.log(file);
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
      })
      .catch(function(err){
        console.log(err)
      })
    } else {
      this.setState({
        fileSelected: false
      })
    }
  },
  render: function () {
      var that = this;
      return (
          <div>
            <input type="file" id="file-input" ref="fileInput"/>
             <img id="preview" src={that.imageUrl} />
             
            <form onSubmit={this._handleSubmit}>
                <input className="btn btn-default btn-lg" type="hidden" id="avatar-url" name="avatar-url" value="/images/default.png"/>
                <input className="btn btn-success btn-lg" type="submit" value="UPLOAD PICTURE" />
            </form>
          </div>
      );
    }
});


export default ImageUpload;

 