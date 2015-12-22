(function(){
Template.__checkName("blankLayout");
Template["blankLayout"] = new Template("Template.blankLayout", (function() {
  var view = this;
  return [ HTML.Raw('<div class="color-line"></div>\n\n    <!-- Main Wrapper -->\n    '), Spacebars.include(view.lookupTemplate("yield")) ];
}));

})();
