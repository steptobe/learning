(function(){
Template.__checkName("tour");
Template["tour"] = new Template("Template.tour", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Tour"),
      desc: Spacebars.call("The easiest way to show people how to use your website."),
      category: Spacebars.call("Interface")
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
        title: Spacebars.call("Tour - how it works."),
        panelClass: Spacebars.call("tour-1")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n\n                            ", HTML.DIV({
          "class": "col-lg-4 tour-2"
        }, "\n                                ", HTML.P("\n                                    ", HTML.STRONG("Start"), " tour example!\n                                "), "\n                                ", HTML.BUTTON({
          "class": "btn btn-success m-b-lg run-tour"
        }, "Start Tour!"), "\n\n                                ", HTML.H5("\n                                    Example text for tour purpose\n                                "), "\n\n                                ", HTML.P("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that\n                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content\n                                    here, content here', making it look like readable English.\n                                "), "\n\n                                ", HTML.DIV({
          "class": "flot-chart",
          style: "height: 50px"
        }, "\n                                    ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-income-chart"
        }), "\n                                "), "\n                                ", HTML.DIV({
          "class": "m-t-xs"
        }, "\n\n                                    ", HTML.DIV({
          "class": "row"
        }, "\n                                        ", HTML.DIV({
          "class": "col-xs-5"
        }, "\n                                            ", HTML.SMALL({
          "class": "stat-label"
        }, "Today"), "\n                                            ", HTML.H4("$230,00 "), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "col-xs-7"
        }, "\n                                            ", HTML.SMALL({
          "class": "stat-label"
        }, "Last week"), "\n                                            ", HTML.H4("$7 980,60 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.P("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that\n                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content\n                                    here, content here', making it look like readable English.\n                                "), "\n\n                            "), "\n\n                            ", HTML.DIV({
          "class": "col-lg-8 tour-3"
        }, "\n                                ", HTML.H5("\n                                    How to use it\n                                "), "\n\n                                ", HTML.P("\n                                    Tour is very easy to use. All you have to do is to define main tour object\n                                    ", HTML.CODE("var tour = new Tour"), ". You can add ", HTML.CODE("backdrop: true,"), " to add a\n                                    gray background.\n                                    Next you need to define a tour step with array:\n                                "), "\n                                ", HTML.STRONG(" Example:"), "\n                        ", HTML.PRE('\n\n// Instance the tour\nvar tour = new Tour({\n  steps: [\n  {\n    element: ".my-element",\n    title: "Title of my step",\n    content: "Content of my step"\n  },\n  {\n    element: ".my-other-element",\n    title: "Title of my step",\n    content: "Content of my step"\n  }\n]});\n\n// Initialize the tour\ntour.init();\n\n// Start the tour\ntour.start();\n\n                        '), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-lg-12"
        }, "\n                                ", HTML.H5("\n                                    Configuration\n                                "), "\n\n                                ", HTML.P("\n                                    ", HTML.STRONG("See full documentation of official tour plugin:"), " ", HTML.A({
          href: "http://bootstraptour.com/",
          target: "_blank"
        }, "http://bootstraptour.com/"), ".\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n        "), "\n\n    " ];
  }) ];
}));

})();
