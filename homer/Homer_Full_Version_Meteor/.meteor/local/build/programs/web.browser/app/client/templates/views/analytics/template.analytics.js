(function(){
Template.__checkName("analytics");
Template["analytics"] = new Template("Template.analytics", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "text-center"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-graph1 fa-4x"
        }), "\n\n                        ", HTML.H1({
          "class": "m-xs"
        }, "$1 206,90"), "\n\n                        ", HTML.H3({
          "class": "font-extra-bold no-margins text-success"
        }, "\n                            All Income\n                        "), "\n                        ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum."), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Users Activity"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-share fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "m-t-xl"
        }, "\n                        ", HTML.H3({
          "class": "m-b-xs"
        }, "4 210,160"), "\n                    ", HTML.SPAN({
          "class": "font-bold no-margins"
        }, "\n                        Social users\n                    "), "\n\n                        ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                            ", HTML.DIV({
          style: "width: 55%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "55",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                                ", HTML.SPAN({
          "class": "sr-only"
        }, "35% Complete (success)"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                ", HTML.SMALL({
          "class": "stats-label"
        }, "Pages / Visit"), "\n                                ", HTML.H4("7.80"), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                ", HTML.SMALL({
          "class": "stats-label"
        }, "% New Visits"), "\n                                ", HTML.H4("76.43%"), "\n                            "), "\n                        "), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Page Views"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-monitor fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "m-t-xl"
        }, "\n                        ", HTML.H1({
          "class": "text-success"
        }, "860k+"), "\n                    ", HTML.SPAN({
          "class": "font-bold no-margins"
        }, "\n                        Social users\n                    "), "\n                        ", HTML.BR(), "\n                        ", HTML.SMALL("\n                            Lorem Ipsum is simply dummy text of the printing and ", HTML.STRONG("typesetting industry"), ".\n                            Lorem Ipsum has been.\n                        "), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Today income"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-cash fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "clearfix"
        }), "\n                    ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                        ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-income-chart"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "m-t-xs"
        }, "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-xs-5"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Today"), "\n                                ", HTML.H4("$230,00 "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-xs-7"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Last week"), "\n                                ", HTML.H4("$7 980,60 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                        "), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n        "), "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Page Views"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-credit fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "clearfix"
        }), "\n                    ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                        ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-bar-chart"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "m-t-xs"
        }, "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-xs-5"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Today"), "\n                                ", HTML.H4("$230,00 "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-xs-7"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Last week"), "\n                                ", HTML.H4("$7 980,60 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                        "), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats"),
        bodyClass: Spacebars.call("list h-200")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Users Activity"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-science fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "m-t-xl"
        }, "\n                            ", HTML.SPAN({
          "class": "font-bold no-margins"
        }, "\n                                Social users\n                            "), "\n                        ", HTML.BR(), "\n                        ", HTML.SMALL("\n                            Lorem Ipsum is simply dummy text of the printing simply all dummy text.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
          "class": "row m-t-sm"
        }, "\n                        ", HTML.DIV({
          "class": "col-lg-6"
        }, "\n                            ", HTML.H3({
          "class": "no-margins font-extra-bold text-success"
        }, "300,102"), "\n\n                            ", HTML.DIV({
          "class": "font-bold"
        }, "98% ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                        "), "\n                        ", HTML.DIV({
          "class": "col-lg-6"
        }, "\n                            ", HTML.H3({
          "class": "no-margins font-extra-bold text-success"
        }, "280,200"), "\n\n                            ", HTML.DIV({
          "class": "font-bold"
        }, "98% ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                        "), "\n\n                    "), "\n                " ];
      });
    }), "\n            "), "\n\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "text-center"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-graph2 fa-4x"
        }), "\n\n                        ", HTML.H1({
          "class": "m-xs"
        }, "$802,40"), "\n                        ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum consectetur adipiscing\n                            elit.\n                        "), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n\n\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats"),
        bodyClass: Spacebars.call("h-200")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Today income"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-shuffle fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "clearfix"
        }), "\n                    ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                        ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-pie-chart",
          style: "height: 112px"
        }), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats"),
        bodyClass: Spacebars.call("h-200")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Page Views"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-battery fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "clearfix"
        }), "\n                    ", HTML.DIV({
          "class": "m-t-xs"
        }, "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Today"), "\n                                ", HTML.H4("$170,20 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Last week"), "\n                                ", HTML.H4("$580,90 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Today"), "\n                                ", HTML.H4("$620,20 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                ", HTML.SMALL({
          "class": "stat-label"
        }, "Last week"), "\n                                ", HTML.H4("$140,70 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                        "), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats"),
        bodyClass: Spacebars.call("h-200")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Today income"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-gleam fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "clearfix"
        }), "\n                    ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                        ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-line-chart",
          style: "height: 125px"
        }), "\n                    "), "\n\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats"),
        bodyClass: Spacebars.call("h-200 list")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                        ", HTML.H4("Users Activity"), "\n                    "), "\n                    ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-display1 fa-4x"
        }), "\n                    "), "\n                    ", HTML.DIV({
          "class": "m-t-xl"
        }, "\n                        ", HTML.SMALL("\n                            Lorem Ipsum is simply dummy text of the printing..\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                        ", HTML.DIV({
          style: "width: 25%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "25",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                            ", HTML.SPAN({
          "class": "sr-only"
        }, "35% Complete (success)"), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                        ", HTML.DIV({
          style: "width: 35%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "35",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                            ", HTML.SPAN({
          "class": "sr-only"
        }, "35% Complete (success)"), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                        ", HTML.DIV({
          style: "width: 55%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "55",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                            ", HTML.SPAN({
          "class": "sr-only"
        }, "35% Complete (success)"), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                        ", HTML.DIV({
          style: "width: 95%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "95",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                            ", HTML.SPAN({
          "class": "sr-only"
        }, "35% Complete (success)"), "\n                        "), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        bodyClass: Spacebars.call("h-200")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV({
          "class": "text-center"
        }, "\n                        ", HTML.I({
          "class": "pe-7s-global fa-4x"
        }), "\n\n                        ", HTML.H1({
          "class": "m-xs text-success"
        }, "$1 208,20"), "\n                        ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum consectetur adipiscing\n                            elit.\n                        "), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n    "), "\n\n    " ];
  });
}));

})();
