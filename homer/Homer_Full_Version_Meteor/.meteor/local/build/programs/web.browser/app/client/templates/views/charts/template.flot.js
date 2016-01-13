(function(){
Template.__checkName("flot");
Template["flot"] = new Template("Template.flot", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Flot chart"),
      desc: Spacebars.call("Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features."),
      category: Spacebars.call("Charts")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-8"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Line type chart with tension")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                            ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-line-chart"
        }), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Bar type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                            ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-bar-chart"
        }), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Pie type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.DIV({
          "class": "flot-pie-chart"
        }, "\n                            ", HTML.DIV({
          "class": "flot-chart-pie-content",
          id: "flot-pie-chart"
        }), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-8"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Area type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                            ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-area-chart"
        }), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Line with points")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                            ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-sin-chart"
        }), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
