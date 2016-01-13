(function(){
Template.__checkName("errorOne");
Template["errorOne"] = new Template("Template.errorOne", (function() {
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
  }, "\n        ", HTML.Raw('<i class="pe-7s-way text-success big-icon"></i>'), "\n        ", HTML.Raw("<h1>404</h1>"), "\n        ", HTML.Raw("<strong>Page Not Found</strong>"), "\n        ", HTML.Raw("<p>\n            Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.\n        </p>"), "\n        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard"
      }));
    },
    "class": "btn btn-xs btn-success"
  }, "Go back to dashboard"), "\n    ") ];
}));

})();
