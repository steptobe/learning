(function(){
Template.__checkName("options");
Template["options"] = new Template("Template.options", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Options"),
      desc: Spacebars.call("Example small header for demo purpose."),
      category: Spacebars.call("Forms"),
      small: Spacebars.call("true")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content animate-panel"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-md-12"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.H1("Options"), "\n                            ", HTML.P({
      "class": "lead"
    }, "\n                                Homer admin theme gives you few configure options for your application layout. Each of the layout element: navigation, navbar, small header and footer can be fixed positioning.\n                            "), "\n                            ", HTML.P("\n                                Use below buttons to enable/disable available options.\n                            "), "\n                            ", HTML.DIV("\n                                ", HTML.DL({
      "class": "dl-horizontal"
    }, "\n                                    ", HTML.DT({
      style: "text-align: left"
    }, "Fixed sidebar"), "\n                                    ", HTML.DD({
      "class": "status-fixed-sidebar"
    }, "Off"), "\n\n                                    ", HTML.DT({
      style: "text-align: left"
    }, "Fixed navbar"), "\n                                    ", HTML.DD({
      "class": "status-fixed-navbar"
    }, "Off"), "\n\n                                    ", HTML.DT({
      style: "text-align: left"
    }, "Fixed footer"), "\n                                    ", HTML.DD({
      "class": "status-fixed-footer"
    }, "Off"), "\n\n                                    ", HTML.DT({
      style: "text-align: left"
    }, "Fixed small header"), "\n                                    ", HTML.DD({
      "class": "status-fixed-small-header"
    }, "Off"), "\n\n                                    ", HTML.DT({
      style: "text-align: left"
    }, "Boxed layout"), "\n                                    ", HTML.DD({
      "class": "status-boxed-layout"
    }, "Off"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                            ", HTML.DIV({
      "class": "panel-tools"
    }, "\n                                ", HTML.A({
      "class": "showhide"
    }, HTML.I({
      "class": "fa fa-chevron-up"
    })), "\n                                ", HTML.A({
      "class": "closebox"
    }, HTML.I({
      "class": "fa fa-times"
    })), "\n                            "), "\n                            Fixed navbar\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.P("\n                                Fixed navbar is a top navbar that is sticked on screen.\n                            "), "\n                            ", HTML.P("\n                                To add fixed navbar you need to add .fixed-navbar class to body element in layout.js file.\n                            "), "\n                            ", HTML.DIV({
      "class": "text-center"
    }, "\n                                ", HTML.BUTTON({
      id: "fixed-navbar",
      type: "button",
      "class": "btn btn-success"
    }, "\n                                    Toggle fixed navbar\n                                "), "\n\n                            "), "\n\n                            ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                    ", HTML.PRE("\n$('body').addClass('fixed-navbar');\n                    "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                            ", HTML.DIV({
      "class": "panel-tools"
    }, "\n                                ", HTML.A({
      "class": "showhide"
    }, HTML.I({
      "class": "fa fa-chevron-up"
    })), "\n                                ", HTML.A({
      "class": "closebox"
    }, HTML.I({
      "class": "fa fa-times"
    })), "\n                            "), "\n                            Fixed navbar\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.P("\n                                Fixed sidebar is a (left menu) sidebar that is sticked on screen.\n                            "), "\n                            ", HTML.P("\n                                To add fixed sidebar you need to add .fixed-sidebar class to body in layout.js file. Fixed sidebar works with fixed-navbar.\n                            "), "\n                            ", HTML.DIV({
      "class": "text-center"
    }, "\n                                ", HTML.BUTTON({
      id: "fixed-sidebar",
      type: "button",
      "class": "btn btn-success"
    }, "\n                                    Toggle fixed sidebar\n                                "), "\n\n                            "), "\n\n                            ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                    ", HTML.PRE("\n$('body').addClass('fixed-sidebar');\n                    "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                            ", HTML.DIV({
      "class": "panel-tools"
    }, "\n                                ", HTML.A({
      "class": "showhide"
    }, HTML.I({
      "class": "fa fa-chevron-up"
    })), "\n                                ", HTML.A({
      "class": "closebox"
    }, HTML.I({
      "class": "fa fa-times"
    })), "\n                            "), "\n                            Fixed footer\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.P("\n                                Fixed footer is a bottom footer that is sticked on screen.\n                            "), "\n                            ", HTML.P("\n                                To add fixed footer you need to add .fixed-footer class to body element in layout.js file.\n                            "), "\n                            ", HTML.DIV({
      "class": "text-center"
    }, "\n                                ", HTML.BUTTON({
      id: "fixed-footer",
      type: "button",
      "class": "btn btn-success"
    }, "\n                                    Toggle footer footer\n                                "), "\n\n                            "), "\n\n                            ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                    ", HTML.PRE("\n$('body').addClass('fixed-footer');\n                    "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                            ", HTML.DIV({
      "class": "panel-tools"
    }, "\n                                ", HTML.A({
      "class": "showhide"
    }, HTML.I({
      "class": "fa fa-chevron-up"
    })), "\n                                ", HTML.A({
      "class": "closebox"
    }, HTML.I({
      "class": "fa fa-times"
    })), "\n                            "), "\n                            Fixed small header\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.P("\n                                Fixed small header is a top page header that is sticked on screen (only small version).\n                            "), "\n                            ", HTML.P("\n                                To add fixed small header you need to add .fixed-small-header class to body in layout.js file. Fixed sidebar works with fixed-navbar and fiexd sidebar.\n                            "), "\n                            ", HTML.DIV({
      "class": "text-center"
    }, "\n                                ", HTML.BUTTON({
      id: "fixed-small-header",
      type: "button",
      "class": "btn btn-success"
    }, "\n                                    Toggle fixed small header\n                                "), "\n\n                            "), "\n\n                            ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                    ", HTML.PRE("\n$('body').addClass('fixed-small-header');\n                    "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                            ", HTML.DIV({
      "class": "panel-tools"
    }, "\n                                ", HTML.A({
      "class": "showhide"
    }, HTML.I({
      "class": "fa fa-chevron-up"
    })), "\n                                ", HTML.A({
      "class": "closebox"
    }, HTML.I({
      "class": "fa fa-times"
    })), "\n                            "), "\n                            Boxed layout\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.P("\n                                Boxed layout is an option for fixed width and centered layout on desktop resolution.\n                            "), "\n                            ", HTML.P("\n                                To add boxed layout you need to add .boxed class to body element and special additional div wrapper after body tag with .boxed-wrapper class.\n                            "), "\n                            ", HTML.DIV({
      "class": "text-center"
    }, "\n                                ", HTML.BUTTON({
      id: "boxed-layout",
      type: "button",
      "class": "btn btn-success"
    }, "\n                                    Toggle boxed layout\n                                "), "\n\n                            "), "\n\n                            ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                    ", HTML.PRE("\n", HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), 'body class="boxed"', HTML.CharRef({
      html: "&gt;",
      str: ">"
    }), "\n    ", HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), 'div class="boxed-wrapper"', HTML.CharRef({
      html: "&gt;",
      str: ">"
    }), "\n        ….\n        ….\n    ", HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), "/div", HTML.CharRef({
      html: "&gt;",
      str: ">"
    }), "\n", HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), "/body", HTML.CharRef({
      html: "&gt;",
      str: ">"
    }), "\n                    "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
