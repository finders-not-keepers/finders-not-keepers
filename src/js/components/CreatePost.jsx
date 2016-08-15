var React = require('react');

var CreatePost = React.createClass({
    render: function() {
        return(
            <div>
            <h2>Create a new lost item:</h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="titleInput" className="input-field" type="text" placeholder="Item title" />
                    <p>**select itme category (will be a drop down menu)**</p>
                    <p>**photo upload here**</p>
                    <textarea ref="descriptionInput" placeholder="Description"></textarea>
                    <input ref="streetNumberInput" className="input-field" type="text" placeholder="Street number" />
                    
                    <button className="submit-button">Submit</button>
                </form>
            </div>
            )
    }
})

module.exports = CreatePost;