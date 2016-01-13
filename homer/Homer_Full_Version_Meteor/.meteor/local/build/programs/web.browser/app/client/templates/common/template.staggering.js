(function(){
Template.__checkName("staggering");
Template["staggering"] = new Template("Template.staggering", (function() {
  var view = this;
  return HTML.DIV({
    "class": "animate-panel",
    "data-effect": function() {
      return Spacebars.mustache(view.lookup("effect"));
    },
    "data-delay": function() {
      return Spacebars.mustache(view.lookup("delay"));
    },
    "data-child": function() {
      return Spacebars.mustache(view.lookup("child"));
    }
  }, "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    ");
}));

})();
