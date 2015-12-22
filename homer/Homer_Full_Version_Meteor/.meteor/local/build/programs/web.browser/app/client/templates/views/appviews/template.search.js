(function(){
Template.__checkName("search");
Template["search"] = new Template("Template.search", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Search view"),
      desc: Spacebars.call("Use search view to show search functionality."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.DIV({
      "class": "m-b-md"
    }, "\n                                ", HTML.H4("\n                                    Filters\n                                "), "\n                                ", HTML.SMALL("\n                                    Filter your project basend on diferent options below.\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "class": "control-label"
    }, "Project date:"), "\n                                ", HTML.DIV({
      "class": "input-group date"
    }, "\n                                    ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      value: "10/06/2016"
    }), "\n                                    ", HTML.SPAN({
      "class": "input-group-addon"
    }, HTML.I({
      "class": "glyphicon glyphicon-calendar"
    })), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "class": "control-label"
    }, "Project value:"), "\n                                ", HTML.DIV({
      "class": "input-group"
    }, "\n                                    ", HTML.INPUT({
      id: "demo1",
      type: "text",
      name: "demo1",
      value: "50"
    }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "class": "control-label"
    }, "Client:"), "\n                                ", HTML.DIV({
      "class": "input-group"
    }, "\n                                    ", HTML.SELECT({
      "class": "form-control m-b",
      name: "account"
    }, "\n                                        ", HTML.OPTION({
      selected: ""
    }, "Company and Brothers"), "\n                                        ", HTML.OPTION("Morgan & Morgan Inc."), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "class": "control-label"
    }, "Employees"), "\n                                ", HTML.DIV({
      "class": "input-group"
    }, "\n                                    ", HTML.INPUT({
      id: "demo2",
      type: "text",
      name: "demo2",
      value: "2"
    }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "class": "control-label"
    }, "Status:"), "\n                                ", HTML.DIV({
      "class": "input-group"
    }, "\n                                    ", HTML.DIV({
      "class": "checkbox checkbox-primary"
    }, "\n                                        ", HTML.INPUT({
      checked: "",
      id: "checkbox1",
      type: "checkbox"
    }), "\n                                        ", HTML.LABEL({
      "for": "checkbox1"
    }, "\n                                            Completed\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "checkbox checkbox-success"
    }, "\n                                        ", HTML.INPUT({
      id: "checkbox2",
      type: "checkbox"
    }), "\n                                        ", HTML.LABEL({
      "for": "checkbox2"
    }, "\n                                            Pending\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "checkbox checkbox-success"
    }, "\n                                        ", HTML.INPUT({
      id: "checkbox3",
      type: "checkbox"
    }), "\n                                        ", HTML.LABEL({
      "for": "checkbox3"
    }, "\n                                            Cancel\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "form-group"
    }, "\n                                ", HTML.LABEL({
      "class": "control-label"
    }, "Tags:"), "\n                                ", HTML.DIV({
      "class": "input-group"
    }, "\n                                    ", HTML.SELECT({
      "class": "select2",
      multiple: "multiple"
    }, "\n                                        ", HTML.OPTION({
      selected: "",
      value: "Branding"
    }, "Branding"), "\n                                        ", HTML.OPTION({
      selected: "",
      value: "Website"
    }, "Website"), "\n                                        ", HTML.OPTION({
      selected: "",
      value: "Design"
    }, "Design"), "\n                                        ", HTML.OPTION({
      selected: "",
      value: "Ilustration"
    }, "Ilustration"), "\n                                        ", HTML.OPTION({
      selected: "",
      value: "New"
    }, "New"), "\n                                        ", HTML.OPTION({
      value: "Important"
    }, "Important"), "\n                                        ", HTML.OPTION({
      value: "External"
    }, "External"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.BUTTON({
      "class": "btn btn-success btn-block"
    }, "Apply"), "\n\n                        "), "\n\n                    "), "\n\n                "), "\n                ", HTML.DIV({
      "class": "col-md-9"
    }, "\n                    ", HTML.DIV({
      "class": "row"
    }, "\n                        ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.DIV({
      "class": "input-group"
    }, "\n                                        ", HTML.INPUT({
      "class": "form-control",
      type: "text",
      placeholder: "Search projects.."
    }), "\n                                        ", HTML.DIV({
      "class": "input-group-btn"
    }, "\n                                            ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-search"
    })), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "row"
    }, "\n\n                        ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$620,20 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Desing project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item active"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$140,70 ", HTML.I({
      "class": "fa fa-long-arrow-right text-info"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Project manager app"), "\n                                        ", HTML.P({
      "class": "small"
    }, "It is a long established fact that a reader will be distracted by the readable"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$580,90 ", HTML.I({
      "class": "fa fa-level-down text-danger"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "New branding"), "\n                                        ", HTML.P({
      "class": "small"
    }, "There are many variations of passages of Lorem Ipsum available, "), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$170,20 ", HTML.I({
      "class": "fa fa-level-up text-warning"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Website project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "All the Lorem Ipsum generators on the Internet tend to repeat"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$240,70 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Ilustration project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$620,20 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Desing project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$140,70 ", HTML.I({
      "class": "fa fa-long-arrow-right text-info"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Project manager app"), "\n                                        ", HTML.P({
      "class": "small"
    }, "It is a long established fact that a reader will be distracted by the readable"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$580,90 ", HTML.I({
      "class": "fa fa-level-down text-danger"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "New branding"), "\n                                        ", HTML.P({
      "class": "small"
    }, "There are many variations of passages of Lorem Ipsum available, "), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$170,20 ", HTML.I({
      "class": "fa fa-level-up text-warning"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Website project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "All the Lorem Ipsum generators on the Internet tend to repeat"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$240,70 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Ilustration project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$620,20 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Desing project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$140,70 ", HTML.I({
      "class": "fa fa-long-arrow-right text-info"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Project manager app"), "\n                                        ", HTML.P({
      "class": "small"
    }, "It is a long established fact that a reader will be distracted by the readable"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$580,90 ", HTML.I({
      "class": "fa fa-level-down text-danger"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "New branding"), "\n                                        ", HTML.P({
      "class": "small"
    }, "There are many variations of passages of Lorem Ipsum available, "), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "hpanel filter-item"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                                            ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                            ", HTML.H4("$170,20 ", HTML.I({
      "class": "fa fa-level-up text-warning"
    })), "\n                                        "), "\n                                        ", HTML.H4({
      "class": "m-b-xs"
    }, "Website project"), "\n                                        ", HTML.P({
      "class": "small"
    }, "All the Lorem Ipsum generators on the Internet tend to repeat"), "\n                                    "), "\n                                "), "\n                            "), "\n\n\n\n\n                        "), "\n\n\n\n                    "), "\n\n\n                "), "\n            "), "\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
