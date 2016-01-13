(function(){
Template.__checkName("panel");
Template["panel"] = new Template("Template.panel", (function() {
  var view = this;
  return HTML.DIV({
    "class": function() {
      return [ "hpanel ", Spacebars.mustache(view.lookup("color")), " ", Spacebars.mustache(view.lookup("panelClass")), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("collapsed"));
      }, function() {
        return " collapsed ";
      }) ];
    }
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("title"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      "class": function() {
        return [ "panel-heading ", Blaze.If(function() {
          return Spacebars.call(view.lookup("built"));
        }, function() {
          return " hbuilt ";
        }) ];
      }
    }, "\n                ", Blaze.If(function() {
      return Spacebars.call(view.lookup("fullscreen"));
    }, function() {
      return [ "\n                    ", Spacebars.include(view.lookupTemplate("panelToolsFullscreen")), "\n                " ];
    }, function() {
      return [ "\n                    ", Spacebars.include(view.lookupTemplate("panelTools")), "\n                " ];
    }), "\n                ", Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }), "\n            "), "\n        " ];
  }), "\n        ", HTML.DIV({
    "class": function() {
      return [ "panel-body ", Spacebars.mustache(view.lookup("bodyClass")) ];
    }
  }, "\n            ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n        "), "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("footer"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                ", Blaze.If(function() {
      return Spacebars.call(view.lookup("footerRight"));
    }, function() {
      return [ "\n                    ", HTML.SPAN({
        "class": "pull-right"
      }, "\n                        ", Blaze.View("lookup:footerRight", function() {
        return Spacebars.mustache(view.lookup("footerRight"));
      }), "\n                    "), "\n                " ];
    }), "\n                ", Blaze.View("lookup:footer", function() {
      return Spacebars.mustache(view.lookup("footer"));
    }), "\n            "), "\n        " ];
  }), "\n    ");
}));

})();
