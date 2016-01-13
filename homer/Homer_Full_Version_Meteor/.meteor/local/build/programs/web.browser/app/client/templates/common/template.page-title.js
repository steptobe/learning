(function(){
Template.__checkName("pageTitle");
Template["pageTitle"] = new Template("Template.pageTitle", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "col-lg-12 text-center m-t-md"
  }, "\n            ", HTML.H2("\n                ", Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  }), "\n            "), "\n            ", HTML.P("\n                ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n            "), "\n        "), "\n    ");
}));

})();
