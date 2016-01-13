(function(){
Template.__checkName("lock");
Template["lock"] = new Template("Template.lock", (function() {
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
  }, "Back to Dashboard"), "\n    "), HTML.Raw('\n\n    <div class="lock-container">\n            <div class="hpanel">\n                <div class="panel-body text-center">\n\n                    <i class="pe-7s-lock big-icon text-success"></i>\n                    <br>\n                    <h4><span class="text-success">3:43:15 PM</span> <strong>Friday, February 27, 2015</strong></h4>\n                    <p>Your are in lock screen. Main app was shut down and you need to enter your passwor to go back to app.</p>\n                    <form action="#" role="form" class="m-t">\n                        <div class="form-group">\n                            <input type="password" required="" placeholder="******" class="form-control">\n                        </div>\n                        <button class="btn btn-primary block full-width" type="submit">Unlock</button>\n                    </form>\n                </div>\n            </div>\n    </div>') ];
}));

})();
