(function(){
Template.__checkName("buttons");
Template["buttons"] = new Template("Template.buttons", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Colors and Buttons"),
      desc: Spacebars.call("The basic color palette"),
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
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body float-e-margins"
    }, "\n                            ", HTML.DIV({
      "class": "wrapper"
    }, "\n                                ", HTML.DIV({
      "class": "row color-demo"
    }, "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-navy-blue extreme-color"
    }, "\n                                        ", HTML.DIV("Primary", HTML.SPAN("Navy Blue")), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-violet"
    }, "\n                                        ", HTML.DIV("Primary 2", HTML.SPAN("Violet")), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-blue"
    }, "\n                                        ", HTML.DIV("Info", HTML.SPAN("Blue")), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-green"
    }, "\n                                        ", HTML.DIV("Success", HTML.SPAN("Green")), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-yellow"
    }, "\n                                        ", HTML.DIV("Warning", HTML.SPAN("Yellow")), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-orange"
    }, "\n                                        ", HTML.DIV("Warning 2", HTML.SPAN("Orange")), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-red"
    }, "\n                                        ", HTML.DIV("Danger", HTML.SPAN("Red")), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "header-line h-bg-red-deep extreme-color"
    }, "\n                                        ", HTML.DIV("Danger 2", HTML.SPAN("Deep red")), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Buttons - primary colors"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Use any of the available button classes to quickly create a styled button.\n                        "), "\n\n                        ", HTML.P("\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-default"
        }, "Default"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-primary"
        }, "Primary"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-primary2"
        }, "Primary2"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-info"
        }, "Info"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-success"
        }, "Success"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-warning"
        }, "Warning"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-warning2"
        }, "Warning2"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-danger"
        }, "Danger"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-danger2"
        }, "Danger2"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn w-xs btn-link"
        }, "Simple link"), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Diferent size"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            If You want larger or smaller buttons You can add ", HTML.CODE(".btn-lg"), ", ", HTML.CODE(".btn-sm"), ",\n                            or ", HTML.CODE(".btn-xs"), " class.\n                        "), "\n\n                        ", HTML.P("\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary btn-lg"
        }, "Large button"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default btn-lg"
        }, "Large button"), "\n                            ", HTML.BR(), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Default button"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default"
        }, "Default button"), "\n                            ", HTML.BR(), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary btn-sm"
        }, "Small button"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default btn-sm"
        }, "Small button"), "\n                            ", HTML.BR(), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary btn-xs"
        }, "Mini button"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default btn-xs"
        }, "Mini button"), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Outline buttons"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Create block level buttons or outline buttons, by adding ", HTML.CODE(".btn-block"), " or ", HTML.CODE(".btn-outline"), ".\n                        "), "\n\n                        ", HTML.P("\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-default"
        }, "Default"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-primary"
        }, "Primary"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-primary2"
        }, "Primary2"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-info"
        }, "Info"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-success"
        }, "Success"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-warning"
        }, "Warning"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-warning2"
        }, "Warning2"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-danger"
        }, "Danger"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-outline btn-danger2"
        }, "Danger2"), "\n                        "), "\n                        ", HTML.P("\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-block btn-outline btn-default"
        }, "Block button"), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Dropdown buttons"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Droppdowns buttons are avalible with any color and any size.\n                        "), "\n\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-primary dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#",
          "class": "font-bold"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-info dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-default dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n\n                        ", HTML.BR(), "\n\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-primary btn-sm dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-info btn-sm dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-default btn-sm dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n                        ", HTML.BR(), "\n\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-primary btn-xs dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-info btn-xs dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "data-toggle": "dropdown",
          "class": "btn btn-default btn-xs dropdown-toggle"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Another action")), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Something else here")), "\n                                ", HTML.LI({
          "class": "divider"
        }), "\n                                ", HTML.LI(HTML.A({
          href: "#"
        }, "Separated link")), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Button gruped"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            This is a group of buttons, ideal for sytuation where many actions are related to same\n                            element.\n                        "), "\n\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          "class": "btn btn-default",
          type: "button"
        }, "Left"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-primary",
          type: "button"
        }, "Middle"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default",
          type: "button"
        }, "Right"), "\n                        "), "\n                        ", HTML.BR(), "\n                        ", HTML.BR(), "\n\n                        ", HTML.DIV({
          "class": "btn-group"
        }, "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default"
        }, HTML.I({
          "class": "fa fa-chevron-left"
        })), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default"
        }, "1"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default  active"
        }, "2"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default"
        }, "3"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default"
        }, "4"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default"
        }, "5"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default"
        }, "6"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default"
        }, "7"), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default"
        }, "8"), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default"
        }, HTML.I({
          "class": "fa fa-chevron-right"
        })), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Icon Buttons"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            To buttons with any color or any size you can add extra icon on the left or the right side.\n                        "), "\n                        ", HTML.BUTTON({
          "class": "btn btn-primary ",
          type: "button"
        }, HTML.I({
          "class": "fa fa-check"
        }), " Submit"), "\n                        ", HTML.BUTTON({
          "class": "btn btn-success ",
          type: "button"
        }, HTML.I({
          "class": "fa fa-upload"
        }), " ", HTML.SPAN({
          "class": "bold"
        }, "Upload"), "\n                        "), "\n                        ", HTML.BUTTON({
          "class": "btn btn-info ",
          type: "button"
        }, HTML.I({
          "class": "fa fa-paste"
        }), " Edit"), "\n                        ", HTML.BUTTON({
          "class": "btn btn-danger",
          type: "button"
        }, HTML.I({
          "class": "fa fa-trash-o"
        }), " ", HTML.SPAN({
          "class": "bold"
        }, "Delete"), "\n                        "), "\n                        ", HTML.BUTTON({
          "class": "btn btn-default ",
          type: "button"
        }, HTML.I({
          "class": "fa fa-map-marker"
        }), " Map"), "\n\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-user-md"
        }), "\n                        "), "\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-group"
        }), "\n                        "), "\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-wrench"
        }), "\n                        "), "\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-exchange"
        }), "\n                        "), "\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-check-circle-o"
        }), "\n                        "), "\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-road"
        }), "\n                        "), "\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-ambulance"
        }), "\n                        "), "\n                        ", HTML.A({
          "class": "btn btn-default"
        }, "\n                            ", HTML.I({
          "class": "fa fa-star"
        }), " Stared\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Icon Buttons with custom size"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Buttons with icons are avalible wih custom size.\n                        "), "\n                        ", HTML.BUTTON({
          "class": "btn btn-primary",
          type: "button"
        }, HTML.I({
          "class": "fa fa-group"
        }), " ", HTML.BR(), "Users"), "\n                        ", HTML.BUTTON({
          "class": "btn btn-primary2",
          type: "button"
        }, HTML.I({
          "class": "fa fa-volume-up"
        }), " ", HTML.BR(), "Volume\n                        "), "\n                        ", HTML.BUTTON({
          "class": "btn btn-info",
          type: "button"
        }, HTML.I({
          "class": "fa fa-print"
        }), " ", HTML.BR(), "Print"), "\n                        ", HTML.BUTTON({
          "class": "btn btn-success",
          type: "button"
        }, HTML.I({
          "class": "fa fa-recycle"
        }), " ", HTML.BR(), "Recycle\n                        "), "\n                        ", HTML.BUTTON({
          "class": "btn btn-warning",
          type: "button"
        }, HTML.I({
          "class": "fa fa-music"
        }), " ", HTML.BR(), "Music"), "\n                        ", HTML.BUTTON({
          "class": "btn btn-warning2",
          type: "button"
        }, HTML.I({
          "class": "fa fa-star"
        }), " ", HTML.BR(), "Stars"), "\n                        ", HTML.BUTTON({
          "class": "btn btn-danger2",
          type: "button"
        }, HTML.I({
          "class": "fa fa-medkit"
        }), " ", HTML.BR(), "Medkit"), "\n                        ", HTML.BR(), "\n                        ", HTML.BUTTON({
          "class": "btn btn-primary btn-xs",
          type: "button"
        }, HTML.I({
          "class": "fa fa-group"
        })), "\n                        ", HTML.BUTTON({
          "class": "btn btn-primary2 btn-xs",
          type: "button"
        }, HTML.I({
          "class": "fa fa-volume-up"
        })), "\n                        ", HTML.BUTTON({
          "class": "btn btn-info btn-xs",
          type: "button"
        }, HTML.I({
          "class": "fa fa-print"
        })), "\n                        ", HTML.BUTTON({
          "class": "btn btn-success btn-xs",
          type: "button"
        }, HTML.I({
          "class": "fa fa-recycle"
        })), "\n                        ", HTML.BUTTON({
          "class": "btn btn-warning btn-xs",
          type: "button"
        }, HTML.I({
          "class": "fa fa-music"
        })), "\n                        ", HTML.BUTTON({
          "class": "btn btn-warning2 btn-xs",
          type: "button"
        }, HTML.I({
          "class": "fa fa-star"
        })), "\n                        ", HTML.BUTTON({
          "class": "btn btn-danger2 btn-xs",
          type: "button"
        }, HTML.I({
          "class": "fa fa-medkit"
        })), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Buttons miscellaneous"),
        bodyClass: Spacebars.call("float-e-margins")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.P("\n                                    Circle buttons\n                                "), "\n                                ", HTML.BUTTON({
          "class": "btn btn-primary btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-list"
        }), "\n                                "), "\n                                ", HTML.BUTTON({
          "class": "btn btn-success btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-link"
        }), "\n                                "), "\n                                ", HTML.BUTTON({
          "class": "btn btn-info btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-check"
        }), "\n                                "), "\n                                ", HTML.BUTTON({
          "class": "btn btn-warning btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-times"
        }), "\n                                "), "\n                                ", HTML.BUTTON({
          "class": "btn btn-danger btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-heart"
        }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.P("\n                                    Single toggle button\n                                "), "\n                                ", HTML.BUTTON({
          "data-toggle": "button",
          "class": "btn btn-warning",
          type: "button"
        }, "Single toggle\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.P("\n                                    Checkbox buttons\n                                "), "\n\n                                ", HTML.DIV({
          "data-toggle": "buttons",
          "class": "btn-group"
        }, "\n                                    ", HTML.LABEL({
          "class": "btn btn-info active"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox"
        }), " Option 1\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-info"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox"
        }), " Option 2\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-info"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox"
        }), " Option 3\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.P("\n                                    Radio buttons\n                                "), "\n\n                                ", HTML.DIV({
          "data-toggle": "buttons",
          "class": "btn-group"
        }, "\n                                    ", HTML.LABEL({
          "class": "btn btn-success active"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "option1",
          name: "options"
        }), " Option 1\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-success"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "option2",
          name: "options"
        }), " Option 2\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-success"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "option3",
          name: "options"
        }), " Option 3\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.BUTTON({
          "class": "btn btn-xs btn-primary btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-list"
        })), "\n                                ", HTML.BUTTON({
          "class": "btn btn-xs btn-success btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-link"
        })), "\n                                ", HTML.BUTTON({
          "class": "btn btn-xs btn-info btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-check"
        }), "\n                                "), "\n                                ", HTML.BUTTON({
          "class": "btn btn-xs btn-warning btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-times"
        })), "\n                                ", HTML.BUTTON({
          "class": "btn btn-xs btn-danger btn-circle",
          type: "button"
        }, HTML.I({
          "class": "fa fa-heart"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n\n                                ", HTML.BUTTON({
          "data-toggle": "button",
          "class": "btn btn-xs btn-warning",
          type: "button"
        }, "Single\n                                    toggle\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.DIV({
          "data-toggle": "buttons",
          "class": "btn-group"
        }, "\n                                    ", HTML.LABEL({
          "class": "btn btn-info active btn-xs"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox"
        }), " Option 1\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-info btn-xs"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox"
        }), " Option 2\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-info btn-xs"
        }, "\n                                        ", HTML.INPUT({
          type: "checkbox"
        }), " Option 3\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3"
        }, "\n                                ", HTML.DIV({
          "data-toggle": "buttons",
          "class": "btn-group"
        }, "\n                                    ", HTML.LABEL({
          "class": "btn btn-success active btn-xs"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "option1",
          name: "options"
        }), " Option 1\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-success btn-xs"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "option2",
          name: "options"
        }), " Option 2\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "btn btn-success btn-xs"
        }, "\n                                        ", HTML.INPUT({
          type: "radio",
          id: "option3",
          name: "options"
        }), " Option 3\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
