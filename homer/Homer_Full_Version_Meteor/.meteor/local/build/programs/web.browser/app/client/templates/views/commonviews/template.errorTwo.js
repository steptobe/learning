(function(){
Template.__checkName("errorTwo");
Template["errorTwo"] = new Template("Template.errorTwo", (function() {
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
  }, "Back to Dashboard"), "\n    "), "\n\n    ", HTML.DIV({
    "class": "error-container"
  }, "\n        ", HTML.Raw('<i class="pe-7s-way text-success big-icon"></i>'), "\n        ", HTML.Raw("<h1>500</h1>"), "\n        ", HTML.Raw("<strong>Internal Server Error</strong>"), "\n        ", HTML.Raw("<p>\n            The server encountered something unexpected that didn't allow it to complete the request. We apologize.\n        </p>"), "\n        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard"
      }));
    },
    "class": "btn btn-xs btn-success"
  }, "Go back to dashboard"), "\n    ") ];
}));

})();
