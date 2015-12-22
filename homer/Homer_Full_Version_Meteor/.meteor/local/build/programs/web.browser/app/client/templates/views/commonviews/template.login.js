(function(){
Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
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
  }, "Back to Dashboard"), "\n    "), HTML.Raw('\n\n    <div class="login-container">\n        <div class="row">\n            <div class="col-md-12">\n                <div class="text-center m-b-md">\n                    <h3>PLEASE LOGIN TO APP</h3>\n                    <small>This is the best app ever!</small>\n                </div>\n                <div class="hpanel">\n                    <div class="panel-body">\n                        <form action="#" id="loginForm">\n                            <div class="form-group">\n                                <label class="control-label" for="username">Username</label>\n                                <input type="text" placeholder="example@gmail.com" title="Please enter you username" required="" value="" name="username" id="username" class="form-control">\n                                <span class="help-block small">Your unique username to app</span>\n                            </div>\n                            <div class="form-group">\n                                <label class="control-label" for="password">Password</label>\n                                <input type="password" title="Please enter your password" placeholder="******" required="" value="" name="password" id="password" class="form-control">\n                                <span class="help-block small">Yur strong password</span>\n                            </div>\n                            <div class="checkbox">\n                                <input type="checkbox" class="i-checks" checked="">\n                                Remember login\n                                <p class="help-block small">(if this is a private computer)</p>\n                            </div>\n                            <button class="btn btn-success btn-block">Login</button>\n                            <a class="btn btn-default btn-block" href="#">Register</a>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-md-12 text-center">\n                <strong>HOMER</strong> - AngularJS Responsive WebApp <br> 2015 Copyright Company Name\n            </div>\n        </div>\n    </div>') ];
}));

})();
