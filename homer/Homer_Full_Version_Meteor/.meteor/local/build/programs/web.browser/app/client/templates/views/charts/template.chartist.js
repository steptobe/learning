(function(){
Template.__checkName("chartist");
Template["chartist"] = new Template("Template.chartist", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Chartist"),
      desc: Spacebars.call("Chartist.js is a simple responsive charting library built with SVG."),
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
        title: Spacebars.call("Basic line chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.DIV({
          id: "ct-chart1",
          "class": "ct-perfect-fourth"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Basic pie chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.DIV({
          id: "ct-chart5",
          "class": "ct-perfect-fourth"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Gauge chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.DIV({
          id: "ct-chart6",
          "class": "ct-perfect-fourth"
        }), "\n                    "), "\n                " ];
      });
    }), "\n\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Horizontal bar chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.DIV({
          id: "ct-chart4",
          "class": "ct-perfect-fourth"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Stacked bar chart")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.DIV({
          id: "ct-chart3",
          "class": "ct-perfect-fourth"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Line chart with area")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV("\n                        ", HTML.DIV({
          id: "ct-chart7",
          "class": "ct-major-twelfth"
        }), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
