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
                          What is Finders Not Keepers?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Hidden message!
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        Hi Céline!🙈
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How do I find the item I lost?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          What if the place I lost my item isn't on this site?
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                      <div className="panel-body">
                        Then you're shit out of luck. You should tell the place to should sign up!
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading5">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                          How do you deal with more valuable items?
                        </a>
                      </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                      <div className="panel-body">
                        We have stric guidelines for the account holders to follow when posting a lost item. That's why it is very important to provice as much detail as possible when claiming an item. Make sure to check <a href="#">these guidelines</a> if you are unsure how to prove your ownership.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
    }
})

module.exports = FAQ;