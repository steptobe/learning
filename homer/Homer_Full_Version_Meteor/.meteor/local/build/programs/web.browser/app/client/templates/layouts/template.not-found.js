(function(){
Template.__checkName("notFound");
Template["notFound"] = new Template("Template.notFound", (function() {
  var view = this;
  return HTML.DIV({
    "class": "content"
  }, "\n        ", HTML.DIV({
    "class": "row wrapper bg-white"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "text-center m-lg p-lg"
  }, "\n                    ", HTML.Raw("<h1>Route Not Found</h1>"), "\n\n                    ", HTML.Raw("<p>\n                        You can go back to main page (Dashboard)\n                    </p>"), "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard"
      }));
    },
    "class": "btn btn-sm btn-primary"
  }, "Go to Dashboard"), "\n                "), "\n            "), "\n        "), "\n    ");
}));

})();
