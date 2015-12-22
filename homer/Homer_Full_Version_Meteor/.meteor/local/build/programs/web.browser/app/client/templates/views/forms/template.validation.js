(function(){
Template.__checkName("validation");
Template["validation"] = new Template("Template.validation", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Validation"),
      desc: Spacebars.call("Build a form with validation functionality"),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", HTML.DIV({
    "class": "content"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.Raw('<div class="col-lg-6">\n                <div class="hpanel">\n                    <div class="panel-heading">\n                        <div class="panel-tools">\n                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>\n                            <a class="closebox"><i class="fa fa-times"></i></a>\n                        </div>\n                        jQuery Validation Plugin\n                    </div>\n                    <div class="panel-body">\n                        <p>\n                            The jQuery Validation Plugin provides drop-in validation for your existing forms, while making all kinds of customizations to fit your application really easy.\n                        </p>\n\n                        <form role="form" id="form">\n                            <div class="form-group"><label>Email</label> <input type="email" placeholder="Enter email" class="form-control" required=""></div>\n                            <div class="form-group"><label>Password</label> <input type="password" placeholder="Password" class="form-control" name="password"></div>\n                            <div class="form-group"><label>Url</label> <input type="text" placeholder="Enter email" class="form-control" name="url"></div>\n                            <div class="form-group"><label>Number</label> <input type="text" placeholder="Enter email" class="form-control" name="number"></div>\n                            <div class="form-group"><label>MaxLength</label> <input type="text" placeholder="Enter email" class="form-control" name="max"></div>\n                            <div>\n                                <button class="btn btn-sm btn-primary m-t-n-xs" type="submit"><strong>Submit</strong></button>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>'), "\n            ", HTML.Raw('<div class="col-lg-6">\n                <div class="hpanel">\n                    <div class="panel-heading">\n                        <div class="panel-tools">\n                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>\n                            <a class="closebox"><i class="fa fa-times"></i></a>\n                        </div>\n                        Displaying Errors within Field Labels\n                    </div>\n                    <div class="panel-body">\n                        <p>\n\n                            With errorPlacement() function you can easily change placement for error. With message properties you can set your own text for error message.\n\n                        </p>\n\n                        <form role="form" id="form_2">\n                            <div class="form-group"><label for="name">First name</label> <input type="text" id="name" name="name" placeholder="Enter your name" class="form-control" required=""></div>\n                            <div class="form-group"><label for="last_name">Last name</label> <input type="text" id="last_name" placeholder="Enter your last name" class="form-control" name="last_name"></div>\n                            <div class="form-group"><label for="url">Official website</label> <input type="text" id="url" placeholder="www.example.com" class="form-control" name="url"></div>\n                            <div class="form-group"><label for="number">Phone number</label> <input type="text" id="number" placeholder="Phone number" class="form-control" name="number"></div>\n                            <div class="form-group"><label for="username">Username</label> <input type="text" id="username" placeholder="Login" class="form-control" name="username"></div>\n                            <div>\n                                <button class="btn btn-sm btn-primary m-t-n-xs" type="submit"><strong>Submit</strong></button>\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "hpanel"
  }, "\n                    ", HTML.Raw('<div class="panel-heading">\n                        <div class="panel-tools">\n                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>\n                            <a class="closebox"><i class="fa fa-times"></i></a>\n                        </div>\n                        jQuery Validation Plugin\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "panel-body no-padding"
  }, "\n\n                        ", HTML.TABLE({
    "class": "table table-striped"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Method"), "\n                                ", HTML.TH("Description"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("remote"), "\n                                ", HTML.TD("Requests a resource to check the element for validity."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("minlength"), "\n                                ", HTML.TD("Makes the element require a given minimum length."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("   maxlength"), "\n                                ", HTML.TD("Makes the element require a given maxmimum length."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" rangelength"), "\n                                ", HTML.TD(" Makes the element require a given value range."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("  min"), "\n                                ", HTML.TD("  Makes the element require a given minimum."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("   max"), "\n                                ", HTML.TD(" Makes the element require a given maximum."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" range"), "\n                                ", HTML.TD(" Makes the element require a given value range."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" email"), "\n                                ", HTML.TD(" Makes the element require a valid email"), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("  url"), "\n                                ", HTML.TD("  Makes the element require a valid url"), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("   date"), "\n                                ", HTML.TD(" Makes the element require a date."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" dateISO"), "\n                                ", HTML.TD(" Makes the element require an ISO date."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" number"), "\n                                ", HTML.TD(" Makes the element require a decimal number."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" digits"), "\n                                ", HTML.TD("  Makes the element require digits only."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" creditcard"), "\n                                ", HTML.TD(" Makes the element require a credit card number."), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD(" equalTo"), "\n                                ", HTML.TD(" Requires the element to be the same as another one"), "\n                            "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

})();
