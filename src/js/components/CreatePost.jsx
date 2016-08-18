var React = require('react');

var CreatePost = React.createClass({
    render: function() {
        return(
            <div>
            <h2>Create a new lost item:</h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="titleInput" className="form-control" type="text" placeholder="Item title" />
                    <p>**select itme category (will be a drop down menu)**</p>
                    <p>**photo upload here**</p>
                    <textarea ref="descriptionInput" className="form-control" placeholder="Description"></textarea>
                    <input ref="streetNumberInput" className="form-control" type="text" placeholder="Street number" />
                    
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
            )
    }
})

module.exports = CreatePost;