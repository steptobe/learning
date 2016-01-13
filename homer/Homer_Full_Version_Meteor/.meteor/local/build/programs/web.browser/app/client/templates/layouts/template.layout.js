(function(){
Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Splash screen -->\n    "), Spacebars.include(view.lookupTemplate("splash")), HTML.Raw("\n\n    <!-- Header -->\n    "), Spacebars.include(view.lookupTemplate("header")), HTML.Raw("\n\n    <!-- Navigation -->\n    "), Spacebars.include(view.lookupTemplate("navigation")), HTML.Raw("\n\n    <!-- Main Wrapper -->\n    "), HTML.DIV({
    id: "wrapper"
  }, "\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n\n        ", HTML.Raw("<!-- Right sidebar -->"), "\n        ", Spacebars.include(view.lookupTemplate("rightSidebar")), "\n\n        ", HTML.Raw("<!-- Footer -->"), "\n        ", Spacebars.include(view.lookupTemplate("footer")), "\n    ") ];
}));

})();
