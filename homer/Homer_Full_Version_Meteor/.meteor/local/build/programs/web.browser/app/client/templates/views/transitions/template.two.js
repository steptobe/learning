(function(){
Template.__checkName("transitionTwo");
Template["transitionTwo"] = new Template("Template.transitionTwo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "p-lg"
  }, "\n        ", HTML.DIV({
    "class": "content"
  }, "\n            ", HTML.DIV({
    "class": "row"
  }, "\n                ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      child: Spacebars.call("hpanel"),
      effect: Spacebars.call("fadeInLeft")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("staggering"), function() {
      return [ "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                    " ];
    });
  }), "\n                "), "\n                ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      child: Spacebars.call("hpanel")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("staggering"), function() {
      return [ "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                    " ];
    });
  }), "\n                "), "\n                ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      child: Spacebars.call("hpanel"),
      effect: Spacebars.call("fadeInRight")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("staggering"), function() {
      return [ "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                        ", Blaze._TemplateWith(function() {
        return {
          title: Spacebars.call("Box example")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("panel"), function() {
          return [ "\n                            ", HTML.DIV({
            "class": "h-100"
          }), "\n                        " ];
        });
      }), "\n                    " ];
    });
  }), "\n                "), "\n            "), "\n        "), "\n    ");
}));

})();
