(function(){
Template.__checkName("textEditor");
Template["textEditor"] = new Template("Template.textEditor", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Text editor"),
      desc: Spacebars.call("WYSWIG editor"),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", HTML.DIV({
    "class": "content"
  }, "\n\n        ", HTML.DIV("\n            ", HTML.DIV({
    "class": "row"
  }, "\n                ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call(" Summernote standard editor")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n\n                        ", HTML.DIV({
        "class": "summernote"
      }, "\n                            ", HTML.H3("Hello Jonathan! "), "\n\n                            ", HTML.P("dummy text of the printing and typesetting industry. ", HTML.STRONG("Lorem Ipsum has been the\n                                dustrys"), " standard dummy text ever since the 1500s, when an unknown printer took\n                                a galley of type and scrambled it to make a type specimen book. It has survived not only\n                                five centuries, but also the leap into electronic typesetting, remaining essentially\n                                unchanged. It was popularised in the 1960s with the release of Letraset sheets\n                                containing Lorem Ipsum passages, and more\n                                ", HTML.BR(), HTML.BR(), "All the Lorem Ipsum generators on the Internet tend to repeat predefined\n                                chunks as necessary, making this the first true generator on the Internet. It uses a\n                                dictionary of over 200 Latin words, combined with a handful of model sentence\n                                structures, to generate Lorem Ipsum which looks reasonable.\n                                recently with."), "\n\n                            ", HTML.P("Mark Smith\n                            "), "\n                        "), "\n                    " ];
    });
  }), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "row"
  }, "\n                ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Summernote with custom toolbar")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n\n                        ", HTML.DIV({
        "class": "summernote1"
      }, "\n                            ", HTML.H4("It is a long established fact"), "\n\n                            ", HTML.P("Many desktop publishing packages and web page editors now use Lorem Ipsum as their\n                                default model text, and a search for lorem ipsum will uncover many web sites still in\n                                their infancy. Various versions have evolved over the years, sometimes by accident,\n                                sometimes on purpose (injected humour and the like)"), "\n\n                            ", HTML.P("Many desktop publishing packages and web page editors now use Lorem Ipsum as their\n                                default model text, and a search for lorem ipsum will uncover many web sites still in\n                                their infancy. Various versions have evolved over the years, sometimes by accident,\n                                sometimes on purpose (injected humour and the like)with."), "\n                        "), "\n                    " ];
    });
  }), "\n                "), "\n                ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Summernote airMode")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n\n                        ", HTML.DIV({
        "class": "summernote2"
      }, "\n                            ", HTML.H4("It is a long established fact"), "\n\n                            ", HTML.P("Many desktop publishing packages and web page editors now use Lorem Ipsum as their\n                                default model text, and a search for lorem ipsum will uncover many web sites still in\n                                their infancy. Various versions have evolved over the years, sometimes by accident,\n                                sometimes on purpose (injected humour and the like)"), "\n\n                            ", HTML.P("Many desktop publishing packages and web page editors now use Lorem Ipsum as their\n                                default model text, and a search for lorem ipsum will uncover many web sites still in\n                                their infancy. Various versions have evolved over the years, sometimes by accident,\n                                sometimes on purpose (injected humour and the like)with."), "\n                        "), "\n                    " ];
    });
  }), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

})();
