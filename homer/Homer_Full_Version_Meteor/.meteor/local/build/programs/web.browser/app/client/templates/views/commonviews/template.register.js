(function(){
Template.__checkName("register");
Template["register"] = new Template("Template.register", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "back-link"
  }, "\n        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard"
      }));
    },
    "class": "btn btn-primary"
  }, "Back to Dashboard"), "\n    "), HTML.Raw('\n\n    <div class="register-container">\n        <div class="row">\n            <div class="col-md-12">\n                <div class="text-center m-b-md">\n                    <h3>Registration</h3>\n                    <small>Full suported AngularJS WebApp/Admin template with very clean and aesthetic style prepared for your next app. </small>\n                </div>\n                <div class="hpanel">\n                    <div class="panel-body">\n                        <form action="#" id="loginForm">\n                            <div class="row">\n                                <div class="form-group col-lg-12">\n                                    <label>Username</label>\n                                    <input type="" value="" id="" class="form-control" name="">\n                                </div>\n                                <div class="form-group col-lg-6">\n                                    <label>Password</label>\n                                    <input type="password" value="" id="" class="form-control" name="">\n                                </div>\n                                <div class="form-group col-lg-6">\n                                    <label>Repeat Password</label>\n                                    <input type="password" value="" id="" class="form-control" name="">\n                                </div>\n                                <div class="form-group col-lg-6">\n                                    <label>Email Address</label>\n                                    <input type="" value="" id="" class="form-control" name="">\n                                </div>\n                                <div class="form-group col-lg-6">\n                                    <label>Repeat Email Address</label>\n                                    <input type="" value="" id="" class="form-control" name="">\n                                </div>\n                                <div class="checkbox col-lg-12">\n                                    <input type="checkbox" class="i-checks" checked="">\n                                    Sigh up for our newsletter\n                                </div>\n                            </div>\n                            <div class="text-center">\n                                <button class="btn btn-success">Register</button>\n                                <button class="btn btn-default">Cancel</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-md-12 text-center">\n                <strong>HOMER</strong> - AngularJS Responsive WebApp <br> 2015 Copyright Company Name\n            </div>\n        </div>\n    </div>') ];
}));

})();
