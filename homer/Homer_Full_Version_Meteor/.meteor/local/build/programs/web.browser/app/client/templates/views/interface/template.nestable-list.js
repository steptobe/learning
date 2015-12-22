(function(){
Template.__checkName("nestableList");
Template["nestableList"] = new Template("Template.nestableList", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Nestable list"),
      desc: Spacebars.call("Nestable - Drag & drop hierarchical list."),
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
      "class": "col-md-4"
    }, "\n                    ", HTML.DIV({
      id: "nestable-menu"
    }, "\n                        ", HTML.BUTTON({
      type: "button",
      "data-action": "expand-all",
      "class": "btn btn-default btn-sm"
    }, "Expand All\n                        "), "\n                        ", HTML.BUTTON({
      type: "button",
      "data-action": "collapse-all",
      "class": "btn btn-default btn-sm"
    }, "Collapse All\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Nestable custom theme list")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n\n                        ", HTML.P({
          "class": "m-b-lg"
        }, "\n                            Each list you can customize by standard css styles. Each element is responsive so you can\n                            add to it any other element to improve functionality of list.\n                        "), "\n\n                        ", HTML.DIV({
          "class": "dd",
          id: "nestable2"
        }, "\n                            ", HTML.OL({
          "class": "dd-list"
        }, "\n                                ", HTML.LI({
          "class": "dd-item",
          "data-id": "1"
        }, "\n                                    ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                        ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-users"
        })), " Cras\n                                        ornare tristique.\n                                    "), "\n                                    ", HTML.OL({
          "class": "dd-list"
        }, "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "2"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                                ", HTML.SPAN({
          "class": "pull-right"
        }, " 12:00 pm "), "\n                                                ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-cog"
        })), "\n                                                Vivamus vestibulum nulla nec ante.\n                                            "), "\n                                        "), "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "3"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                                ", HTML.SPAN({
          "class": "pull-right"
        }, " 11:00 pm "), "\n                                                ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-bolt"
        })), "\n                                                Nunc dignissim risus id metus.\n                                            "), "\n                                        "), "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "4"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                                ", HTML.SPAN({
          "class": "pull-right"
        }, " 11:00 pm "), "\n                                                ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-laptop"
        })), "\n                                                Vestibulum commodo\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n\n                                ", HTML.LI({
          "class": "dd-item",
          "data-id": "5"
        }, "\n                                    ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                        ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-users"
        })), " Integer\n                                        vitae libero.\n                                    "), "\n                                    ", HTML.OL({
          "class": "dd-list"
        }, "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "6"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                                ", HTML.SPAN({
          "class": "pull-right"
        }, " 15:00 pm "), "\n                                                ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-users"
        })), "\n                                                Nam convallis pellentesque nisl.\n                                            "), "\n                                        "), "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "7"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                                ", HTML.SPAN({
          "class": "pull-right"
        }, " 16:00 pm "), "\n                                                ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-bomb"
        })), "\n                                                Vivamus molestie gravida turpis\n                                            "), "\n                                        "), "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "8"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "\n                                                ", HTML.SPAN({
          "class": "pull-right"
        }, " 21:00 pm "), "\n                                                ", HTML.SPAN({
          "class": "label h-bg-navy-blue"
        }, HTML.I({
          "class": "fa fa-child"
        })), " Ut\n                                                aliquam sollicitudin leo.\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                            ", HTML.H5("Serialised Output"), "\n                        "), "\n                        ", HTML.TEXTAREA({
          id: "nestable2-output",
          "class": "form-control"
        }), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Nestable basic list")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n\n                        ", HTML.P({
          "class": "m-b-lg"
        }, "\n                            ", HTML.STRONG("Nestable"), " is an interactive hierarchical list. You can drag and drop to\n                            rearrange the order. It works well on touch-screens.\n                        "), "\n\n                        ", HTML.DIV({
          "class": "dd",
          id: "nestable"
        }, "\n                            ", HTML.OL({
          "class": "dd-list"
        }, "\n                                ", HTML.LI({
          "class": "dd-item",
          "data-id": "1"
        }, "\n                                    ", HTML.DIV({
          "class": "dd-handle"
        }, "1 - Lorem ipsum"), "\n                                "), "\n                                ", HTML.LI({
          "class": "dd-item",
          "data-id": "2"
        }, "\n                                    ", HTML.DIV({
          "class": "dd-handle"
        }, "2 - Dolor sit"), "\n                                    ", HTML.OL({
          "class": "dd-list"
        }, "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "3"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "3 - Adipiscing elit"), "\n                                        "), "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "4"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "4 - Nonummy nibh"), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.LI({
          "class": "dd-item",
          "data-id": "5"
        }, "\n                                    ", HTML.DIV({
          "class": "dd-handle"
        }, "5 - Consectetuer"), "\n                                    ", HTML.OL({
          "class": "dd-list"
        }, "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "6"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "6 - Aliquam erat"), "\n                                        "), "\n                                        ", HTML.LI({
          "class": "dd-item",
          "data-id": "7"
        }, "\n                                            ", HTML.DIV({
          "class": "dd-handle"
        }, "7 - Veniam quis"), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.LI({
          "class": "dd-item",
          "data-id": "8"
        }, "\n                                    ", HTML.DIV({
          "class": "dd-handle"
        }, "8 - Tation ullamcorper"), "\n                                "), "\n                                ", HTML.LI({
          "class": "dd-item",
          "data-id": "9"
        }, "\n                                    ", HTML.DIV({
          "class": "dd-handle"
        }, "9 - Ea commodo"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                            ", HTML.H5("Serialised Output"), "\n                        "), "\n                        ", HTML.TEXTAREA({
          id: "nestable-output",
          "class": "form-control"
        }), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
