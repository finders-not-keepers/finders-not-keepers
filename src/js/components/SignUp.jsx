var React = require('react');

var SignUp = React.createClass({
    _handleSubmit: function() {
        {/*sign up stuff*/}
    },
    render: function () {
        return(
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input ref="companyNameInput" className="input-field" type="text" placeholder="Company name" />
                    <p>**select company category (will be a drop down menu)**</p>
                    <input ref="usernameInput" className="input-field" type="text" placeholder="Enter a username" />
                    <input ref="passwordInput" className="input-field" type="password" placeholder="Enter a password" />
                    <input ref="phoneInput" className="input-field" type="text" placeholder="Phone number" />
                    <p><strong>Address:</strong></p>
                    <input ref="streetNumberInput" className="input-field" type="text" placeholder="Street number" />
                    <input ref="addLine1Input" className="input-field" type="text" placeholder="Address line 1" />
                    <input ref="addLine2Input" className="input-field" type="text" placeholder="Address Line 2" />
                    <input ref="cityInput" className="input-field" type="text" placeholder="City" />
                    <input ref="provinceInput" className="input-field" type="text" placeholder="Province" />
                    <input ref="countryInput" className="input-field" type="text" placeholder="Country" />
                    <input ref="postalCodeInput" className="input-field" type="text" placeholder="Postal Code" />
                    
                    <button className="search-button">Continue >></button>
                    <p>**would continue to a page where you can enter the primary contacts, and finally submit**</p>
                </form>
            </div>
            )
    }
})

module.exports = SignUp;