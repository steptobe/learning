(function(){
Template.__checkName("chartJs");
Template["chartJs"] = new Template("Template.chartJs", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("ChartJS"),
      desc: Spacebars.call("Simple HTML5 Charts using the canvas element."),
      category: Spacebars.call("Charts")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Radar type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.CANVAS({
          id: "radarChart"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Doughnut bar chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.CANVAS({
          id: "doughnutChart",
          height: "140"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Polar type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.CANVAS({
          id: "polarOptions",
          height: "140"
        }), "\n                    "), "\n                " ];
      });
    }), "\n\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Line type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.CANVAS({
          id: "lineOptions",
          height: "140"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Bar type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.CANVAS({
          id: "barOptions",
          height: "140"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Single Bar type chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.CANVAS({
          id: "singleBarOptions",
          height: "140"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Line type chart without curve")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.CANVAS({
          id: "sharpLineOptions",
          height: "140"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
