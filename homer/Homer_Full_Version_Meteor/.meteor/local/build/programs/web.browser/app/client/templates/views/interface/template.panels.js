(function(){
Template.__checkName("panels");
Template["panels"] = new Template("Template.panels", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Panels design"),
      desc: Spacebars.call("Many panels design give you many possibilities."),
      category: Spacebars.call("Interface")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("This is a standard panel (header, content, footer)"),
        footer: Spacebars.call("This is standard panel footer")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P("\n                            Lorem Ipsum is simply dummy text of the ", HTML.STRONG("printing and typesetting"), " industry.\n                            Lorem Ipsum has been the industry's standard dummy text ever since the\n                            ", HTML.ABBR({
          title: "",
          "data-original-title": "Sample abbreviation"
        }, "scrambled it to make"), " a type\n                            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                            Lorem Ipsum has been the industry's standard dummy text ever since the\n                            scrambled it to make a type specimen book.\n                        "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Default Panel"),
        footer: Spacebars.call("This is standard panel footer")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Built panel"),
        footer: Spacebars.call("This is standard panel footer"),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.DIV({
          "class": "row"
        }, "\n                        ", HTML.DIV({
          "class": "col-lg-6 border-right"
        }, "\n                            ", HTML.P("\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae\n                                ultrices accumsan. Aliquam ornare lacus\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "col-lg-6 "
        }, "\n                            ", HTML.P("\n                                posuere lectus et, fringilla augue.\n                                ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae\n                                accumsan.\n                            "), "\n                        "), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Built panel"),
        footer: Spacebars.call("This is standard panel footer"),
        built: Spacebars.call(true),
        color: Spacebars.call("hblue")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Panel green"),
        color: Spacebars.call("hgreen")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Panel orange"),
        color: Spacebars.call("horange")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Panel red"),
        color: Spacebars.call("hred")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Panel yellow"),
        color: Spacebars.call("hyellow"),
        footer: Spacebars.call("This is standard panel footer")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae\n                        ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Panel blue"),
        color: Spacebars.call("hblue"),
        footer: Spacebars.call("This is standard panel footer")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae\n                        ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Panel violet"),
        color: Spacebars.call("hviolet"),
        footer: Spacebars.call("This is standard panel footer")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae\n                        ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Initial collapsed basic"),
        footer: Spacebars.call("This is standard panel footer"),
        collapsed: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Initial collapsed built"),
        footer: Spacebars.call("This is standard panel footer"),
        collapsed: Spacebars.call(true),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("With additional full screen button"),
        footer: Spacebars.call("This is standard panel footer"),
        built: Spacebars.call(true),
        fullscreen: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.P("\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices\n                        accumsan.\n                    "), "\n                " ];
      });
    }), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading hbuilt"
    }, "\n                        ", HTML.DIV({
      "class": "pull-right"
    }, "\n                            ", HTML.A({
      "class": "btn btn-default btn-xs"
    }, "Action 1"), "\n                            ", HTML.A({
      "class": "btn btn-default btn-xs"
    }, "Action 2"), "\n                        "), "\n                        Pannel with custom buttons\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        This is standard panel footer\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading hbuilt"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                                Panel with search form\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                                ", HTML.FORM({
      action: ""
    }, "\n                                    ", HTML.DIV({
      "class": "input-group"
    }, "\n                                        ", HTML.INPUT({
      type: "text",
      "class": "form-control input-xs",
      placeholder: "Search something...",
      name: "s"
    }), "\n								", HTML.SPAN({
      "class": "input-group-btn"
    }, "\n									", HTML.BUTTON({
      "class": "btn btn-xs btn-default",
      type: "submit"
    }, "\n                                        ", HTML.SPAN({
      "class": "fa fa-search"
    }), "\n                                    "), "\n								"), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        This is standard panel footer\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Pannel with list group"),
        footer: Spacebars.call("This is standard panel footer"),
        bodyClass: Spacebars.call("no-padding"),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                    ", HTML.UL({
          "class": "list-group"
        }, "\n                        ", HTML.LI({
          "class": "list-group-item"
        }, "\n                            ", HTML.SPAN({
          "class": "badge badge-primary"
        }, "16"), "\n                            Lorem ipsum\n                        "), "\n                        ", HTML.LI({
          "class": "list-group-item "
        }, "\n                            ", HTML.SPAN({
          "class": "badge badge-info"
        }, "12"), "\n                            Consectetur adipiscing\n                        "), "\n                        ", HTML.LI({
          "class": "list-group-item"
        }, "\n                            ", HTML.SPAN({
          "class": "badge badge-danger"
        }, "10"), "\n                            Aliquam ornare\n                        "), "\n                        ", HTML.LI({
          "class": "list-group-item"
        }, "\n                            ", HTML.SPAN({
          "class": "badge badge-success"
        }, "10"), "\n                            Vestibulum tincidunt\n                        "), "\n                        ", HTML.LI({
          "class": "list-group-item"
        }, "\n                            ", HTML.SPAN({
          "class": "badge badge-warning"
        }, "7"), "\n                            Posuere lectus\n                        "), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading hbuilt"
    }, "\n                        ", Spacebars.include(view.lookupTemplate("panelTools")), "\n                        Panel with alert\n                    "), "\n                    ", HTML.DIV({
      "class": "alert alert-success"
    }, "\n                        ", HTML.I({
      "class": "fa fa-bolt"
    }), " Adding action was successful\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.Lorem\n                            ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        This is standard panel footer\n                    "), "\n                "), "\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
