var React = require('react');

var FAQ = React.createClass({
    render: function(){
        return(
            <div>
              <h2>Frequently Asked Questions</h2>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          How do I claim an item that I had lost but was found?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        If you found an item you lost via our website “Finders Not Keeper”, follow the instructions after clicking the ‘claim’. Give as much details as possible as proof of the item being yours. The business that posted your item will get back to you shortly via e-mail and tell you how to proceed to retrieve it. 
                        <br/>Photo ID is required for all pick-ups in any business listed on “Finders Not Keepers”. When picking up an item, you will be asked to present your ID, and note your name and contact information (either phone # or e-mail address), as well as sign for the item.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How long are found items held for?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        Items are typically held for a minimum of 30 days for most items turned in.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What happens if nobody claims a found item?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                          All unclaimed items are 'disposed of', either via destruction, recycling or donation.
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Can I ask a friend to pick up an item for me?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                      <div className="panel-body">
                        “Finders Not Keepers” listed businesses strive to ensure that the proper owners are the ones receiving their items. In the event the rightful owner is not able to pick the item up in person, a third party is permitted to pick up the item on the owner's behalf under certain circumstances:
                        <br/>The owner must inform the business in advance of this request via e-mail, and have been provided the authorisation by the latter. 
                        <br/>The third party individual who is identified by the owner as authorized to pick the item up on their behalf must bring a copy of the confirmation provided to the owner by the business involved hat has been signed by the owner.
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading5">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                          Disclaimer
                        </a>
                      </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                      <div className="panel-body">
                        “Finders Not Keepers” listed businesses regret that they cannot be responsible for items of personal property left unattended on their grounds or within their buildings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
    }
})

module.exports = FAQ;