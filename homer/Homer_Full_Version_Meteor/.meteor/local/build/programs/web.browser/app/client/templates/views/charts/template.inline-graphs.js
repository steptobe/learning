(function(){
Template.__checkName("inlineGraphs");
Template["inlineGraphs"] = new Template("Template.inlineGraphs", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Inline charts"),
      desc: Spacebars.call("Small inline charts directly in the browser using data supplied in scripts."),
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
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Sparkline charts")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P("\n                            This jQuery plugin generates sparklines (small inline charts) directly in the browser using\n                            data supplied either inline in the HTML\n                        "), "\n                        ", HTML.TABLE({
          "class": "table table-bordered white-bg"
        }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Graph"), "\n                                ", HTML.TH("Type"), "\n                            "), "\n                            "), "\n\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          id: "sparkline7"
        }), "\n                                "), "\n                                ", HTML.TD("\n                                    Inline line chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          id: "sparkline2"
        }), "\n                                "), "\n                                ", HTML.TD("\n                                    Bar chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          id: "sparkline3"
        }), "\n                                "), "\n                                ", HTML.TD("\n                                    Pie chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          id: "sparkline4"
        }), "\n                                "), "\n                                ", HTML.TD("\n                                    Long inline chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          id: "sparkline5"
        }), "\n                                "), "\n                                ", HTML.TD("\n                                    Tristate chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          id: "sparkline6"
        }), "\n                                "), "\n                                ", HTML.TD("\n                                    Discrete chart\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Peity charts")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P("\n                            Peity is a simple jQuery plugin that converts an element's content into a simple svg mini\n                            pie donut line or bar chart and is compatible with any browser that supports svg: Chrome,\n                            Firefox, IE9+, Opera, Safari.\n                        "), "\n                        ", HTML.TABLE({
          "class": "table table-bordered white-bg"
        }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Graph"), "\n                                ", HTML.TH("Type"), "\n                            "), "\n                            "), "\n\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "pie"
        }, "1/5"), "\n                                "), "\n                                ", HTML.TD("\n                                    Pie chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "line"
        }, "5,3,9,6,5,9,7,3,5,2"), "\n                                "), "\n                                ", HTML.TD("\n                                    Line chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "bar"
        }, "5,3,9,6,5,9,7,3,5,2"), "\n                                "), "\n                                ", HTML.TD("\n                                    Bar chart\n                                "), "\n                            "), "\n\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
