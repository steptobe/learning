(function(){
Template.__checkName("boxedLayout");
Template["boxedLayout"] = new Template("Template.boxedLayout", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Splash screen -->\n    "), Spacebars.include(view.lookupTemplate("splash")), "\n\n    ", HTML.DIV({
    "class": "boxed-wrapper"
  }, "\n\n        ", HTML.Raw("<!-- Header -->"), "\n        ", Spacebars.include(view.lookupTemplate("header")), "\n\n        ", HTML.Raw("<!-- Navigation -->"), "\n        ", Spacebars.include(view.lookupTemplate("navigation")), "\n\n        ", HTML.Raw("<!-- Main Wrapper -->"), "\n        ", HTML.DIV({
    id: "wrapper"
  }, "\n            ", Spacebars.include(view.lookupTemplate("yield")), "\n\n            ", HTML.Raw("<!-- Right sidebar -->"), "\n            ", Spacebars.include(view.lookupTemplate("rightSidebar")), "\n\n            ", HTML.Raw("<!-- Footer -->"), "\n            ", Spacebars.include(view.lookupTemplate("footer")), "\n        "), "\n\n    ") ];
}));

})();
