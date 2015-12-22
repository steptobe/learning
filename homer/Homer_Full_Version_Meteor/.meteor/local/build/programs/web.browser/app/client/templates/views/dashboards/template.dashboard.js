(function(){
Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Welcome to Homer Theme")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("pageTitle"), function() {
        return [ "\n\n                Special ", HTML.STRONG("Meteor Admin Theme"), " for small, medium and large webapp with very clean and aesthetic\n                style and feel.\n\n            " ];
      });
    }), "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Dashboard information and statistics"),
        footer: Spacebars.call("Last update: 21.05.2015"),
        footerRight: Spacebars.call("You have two new messages from Monica Bolt")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-md-3 text-center"
        }, "\n                                ", HTML.DIV({
          "class": "small"
        }, "\n                                    ", HTML.I({
          "class": "fa fa-bolt"
        }), " Page views\n                                "), "\n                                ", HTML.DIV("\n                                    ", HTML.H1({
          "class": "font-extra-bold m-t-xl m-b-xs"
        }, "\n                                        226,802\n                                    "), "\n                                    ", HTML.SMALL("Page views in last month"), "\n                                "), "\n                                ", HTML.DIV({
          "class": "small m-t-xl"
        }, "\n                                    ", HTML.I({
          "class": "fa fa-clock-o"
        }), " Data from January\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-md-6"
        }, "\n                                ", HTML.DIV({
          "class": "text-center small"
        }, "\n                                    ", HTML.I({
          "class": "fa fa-laptop"
        }), " Active users in current month (December)\n                                "), "\n                                ", HTML.DIV({
          "class": "flot-chart",
          style: "height: 160px"
        }, "\n                                    ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-line-chart"
        }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-md-3 text-center"
        }, "\n                                ", HTML.DIV({
          "class": "small"
        }, "\n                                    ", HTML.I({
          "class": "fa fa-clock-o"
        }), " Active duration\n                                "), "\n                                ", HTML.DIV("\n                                    ", HTML.H1({
          "class": "font-extra-bold m-t-xl m-b-xs"
        }, "\n                                        10 Months\n                                    "), "\n                                    ", HTML.SMALL("And four weeks"), "\n                                "), "\n                                ", HTML.DIV({
          "class": "small m-t-xl"
        }, "\n                                    ", HTML.I({
          "class": "fa fa-clock-o"
        }), " Last active in 12.10.2015\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "text-center"
        }, "\n                            ", HTML.I({
          "class": "pe-7s-graph1 fa-4x"
        }), "\n\n                            ", HTML.H1({
          "class": "m-xs"
        }, "$1 206,90"), "\n\n                            ", HTML.H3({
          "class": "font-extra-bold no-margins text-success"
        }, "\n                                All Income\n                            "), "\n                            ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum."), "\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                            ", HTML.H4("Users Activity"), "\n                        "), "\n                        ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                            ", HTML.I({
          "class": "pe-7s-share fa-4x"
        }), "\n                        "), "\n                        ", HTML.DIV({
          "class": "m-t-xl"
        }, "\n                            ", HTML.H3({
          "class": "m-b-xs"
        }, "210"), "\n                    ", HTML.SPAN({
          "class": "font-bold no-margins"
        }, "\n                        Social users\n                    "), "\n\n                            ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                                ", HTML.DIV({
          style: "width: 55%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "55",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                                    ", HTML.SPAN({
          "class": "sr-only"
        }, "35% Complete (success)"), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                    ", HTML.SMALL({
          "class": "stats-label"
        }, "Pages / Visit"), "\n                                    ", HTML.H4("7.80"), "\n                                "), "\n\n                                ", HTML.DIV({
          "class": "col-xs-6"
        }, "\n                                    ", HTML.SMALL({
          "class": "stats-label"
        }, "% New Visits"), "\n                                    ", HTML.H4("76.43%"), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n\n\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                            ", HTML.H4("Page Views"), "\n                        "), "\n                        ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                            ", HTML.I({
          "class": "pe-7s-monitor fa-4x"
        }), "\n                        "), "\n                        ", HTML.DIV({
          "class": "m-t-xl"
        }, "\n                            ", HTML.H1({
          "class": "text-success"
        }, "860k+"), "\n                        ", HTML.SPAN({
          "class": "font-bold no-margins"
        }, "\n                            Social users\n                        "), "\n                            ", HTML.BR(), "\n                            ", HTML.SMALL("\n                                Lorem Ipsum is simply dummy text of the printing and ", HTML.STRONG("typesetting\n                                industry"), ". Lorem Ipsum has been.\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                            ", HTML.H4("Today income"), "\n                        "), "\n                        ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                            ", HTML.I({
          "class": "pe-7s-cash fa-4x"
        }), "\n                        "), "\n                        ", HTML.DIV({
          "class": "clearfix"
        }), "\n                        ", HTML.DIV({
          "class": "flot-chart"
        }, "\n                            ", HTML.DIV({
          "class": "flot-chart-content",
          id: "flot-income-chart"
        }), "\n                        "), "\n                        ", HTML.DIV({
          "class": "m-t-xs"
        }, "\n\n                            ", HTML.DIV({
          "class": "row"
        }, "\n                                ", HTML.DIV({
          "class": "col-xs-5"
        }, "\n                                    ", HTML.SMALL({
          "class": "stat-label"
        }, "Today"), "\n                                    ", HTML.H4("$230,00 "), "\n                                "), "\n                                ", HTML.DIV({
          "class": "col-xs-7"
        }, "\n                                    ", HTML.SMALL({
          "class": "stat-label"
        }, "Last week"), "\n                                    ", HTML.H4("$7 980,60 ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Last active"),
        footer: Spacebars.call("This is standard panel footer"),
        panelClass: Spacebars.call("stats")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "stats-title pull-left"
        }, "\n                            ", HTML.H4("Activity"), "\n                        "), "\n                        ", HTML.DIV({
          "class": "stats-icon pull-right"
        }, "\n                            ", HTML.I({
          "class": "pe-7s-science fa-4x"
        }), "\n                        "), "\n                        ", HTML.DIV({
          "class": "m-t-xl"
        }, "\n                            ", HTML.SPAN({
          "class": "font-bold no-margins"
        }, "\n                                Social users\n                            "), "\n                            ", HTML.BR(), "\n                            ", HTML.SMALL("\n                                Lorem Ipsum is simply dummy text of the printing simply all dummy text. Lorem Ipsum is\n                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "row m-t-md"
        }, "\n                            ", HTML.DIV({
          "class": "col-lg-6"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold text-success"
        }, "300,102"), "\n\n                                ", HTML.DIV({
          "class": "font-bold"
        }, "98% ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-6"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold text-success"
        }, "280,200"), "\n\n                                ", HTML.DIV({
          "class": "font-bold"
        }, "98% ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "row m-t-md"
        }, "\n                            ", HTML.DIV({
          "class": "col-lg-6"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold "
        }, "120,108"), "\n\n                                ", HTML.DIV({
          "class": "font-bold"
        }, "38% ", HTML.I({
          "class": "fa fa-level-down"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-6"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold "
        }, "450,600"), "\n\n                                ", HTML.DIV({
          "class": "font-bold"
        }, "28% ", HTML.I({
          "class": "fa fa-level-down"
        })), "\n                            "), "\n\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Recently active projects")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "table-responsive project-list"
        }, "\n                            ", HTML.TABLE({
          "class": "table table-striped"
        }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n\n                                    ", HTML.TH({
          colspan: "2"
        }, "Project"), "\n                                    ", HTML.TH("Completed"), "\n                                    ", HTML.TH("Task"), "\n                                    ", HTML.TH("Date"), "\n                                    ", HTML.TH("Action"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
          type: "checkbox",
          "class": "i-checks",
          checked: ""
        })), "\n                                    ", HTML.TD("Contract with Zender Company\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL(HTML.I({
          "class": "fa fa-clock-o"
        }), " Created 14.08.2015"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
          "class": "pie"
        }, "1/5"), "\n                                    "), "\n                                    ", HTML.TD(HTML.STRONG("20%")), "\n                                    ", HTML.TD("Jul 14, 2013"), "\n                                    ", HTML.TD(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-check text-success"
        }))), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
          type: "checkbox",
          "class": "i-checks"
        })), "\n                                    ", HTML.TD("There are many variations of passages\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL(HTML.I({
          "class": "fa fa-clock-o"
        }), " Created 21.07.2015"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
          "class": "pie"
        }, "1/4"), "\n                                    "), "\n                                    ", HTML.TD(HTML.STRONG("40%")), "\n                                    ", HTML.TD("Jul 16, 2013"), "\n                                    ", HTML.TD(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-check text-navy"
        }))), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
          type: "checkbox",
          "class": "i-checks",
          checked: ""
        })), "\n                                    ", HTML.TD("Contrary to popular belief\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL(HTML.I({
          "class": "fa fa-clock-o"
        }), " Created 12.06.2015"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
          "class": "pie"
        }, "0.52/1.561"), "\n                                    "), "\n                                    ", HTML.TD(HTML.STRONG("75%")), "\n                                    ", HTML.TD("Jul 18, 2013"), "\n                                    ", HTML.TD(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-check text-navy"
        }))), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
          type: "checkbox",
          "class": "i-checks"
        })), "\n                                    ", HTML.TD("Gamma project\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL(HTML.I({
          "class": "fa fa-clock-o"
        }), " Created 06.03.2015"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
          "class": "pie"
        }, "226/360"), "\n                                    "), "\n                                    ", HTML.TD(HTML.STRONG("16%")), "\n                                    ", HTML.TD("Jul 22, 2013"), "\n                                    ", HTML.TD(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-check text-navy"
        }))), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Activity"),
        bodyClass: Spacebars.call("list")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "pull-right"
        }, "\n                            ", HTML.A({
          href: "#",
          "class": "btn btn-xs btn-default"
        }, "Today"), "\n                            ", HTML.A({
          href: "#",
          "class": "btn btn-xs btn-default"
        }, "Month"), "\n                        "), "\n                        ", HTML.DIV({
          "class": "panel-title"
        }, "Last Activity"), "\n                        ", HTML.SMALL({
          "class": "fo"
        }, "This is simple example"), "\n                        ", HTML.DIV({
          "class": "list-item-container"
        }, "\n                            ", HTML.DIV({
          "class": "list-item"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold text-success"
        }, "2,773"), "\n                                ", HTML.SMALL("Tota Messages Sent"), "\n                                ", HTML.DIV({
          "class": "pull-right font-bold"
        }, "98% ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "list-item"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold"
        }, "4,422"), "\n                                ", HTML.SMALL("Last activity"), "\n                                ", HTML.DIV({
          "class": "pull-right font-bold"
        }, "13% ", HTML.I({
          "class": "fa fa-level-down text-color"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "list-item"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold"
        }, "9,180"), "\n                                ", HTML.SMALL("Monthly income"), "\n                                ", HTML.DIV({
          "class": "pull-right font-bold"
        }, "22% ", HTML.I({
          "class": "fa fa-bolt"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "list-item"
        }, "\n                                ", HTML.H3({
          "class": "no-margins font-extra-bold text-success"
        }, "1,450"), "\n                                ", HTML.SMALL("Tota Messages Sent"), "\n                                ", HTML.DIV({
          "class": "pull-right font-bold"
        }, "44% ", HTML.I({
          "class": "fa fa-level-up text-success"
        })), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n\n                "), "\n            "), "\n        "), "\n    " ];
  });
}));

})();
