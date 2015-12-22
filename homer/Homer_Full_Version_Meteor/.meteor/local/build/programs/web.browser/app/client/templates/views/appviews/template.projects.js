(function(){
Template.__checkName("projects");
Template["projects"] = new Template("Template.projects", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Projects"),
      desc: Spacebars.call("List of projects."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row projects"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-success pull-right"
    }, "NEW"), "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Desing project")), "\n\n                                ", HTML.P("\n                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has..\n                                "), "\n\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Hendrix Corp"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("1.5.2"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("12.06.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 12%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "12",
      role: "progressbar",
      "class": " progress-bar progress-bar-success"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-success"
    }, "\n                                        $1 206,40\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a1.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a2.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a4.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a7.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hyellow"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Project manager app")), "\n                                ", HTML.P("\n                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..\n                                "), "\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Vito Company"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("3.0.0"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("16.10.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 65%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "65",
      role: "progressbar",
      "class": " progress-bar progress-bar-warning"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-warning"
    }, "\n                                        $3 600,20\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a7.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a8.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a2.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n        "), "\n\n        ", HTML.DIV({
      "class": "row projects"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hblue"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-info pull-right"
    }, "NEW"), "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Website project")), "\n                                ", HTML.P("\n                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,\n                                    sometimes by accident, sometimes on purpose (injected humour and the like).\n                                "), "\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Morph Company"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("2.5.2"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("10.01.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 43%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "43",
      role: "progressbar",
      "class": " progress-bar progress-bar-info"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-info"
    }, "\n                                        $456,20\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a8.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a2.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a1.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a4.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-success pull-right"
    }, "NEW"), "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Desing project")), "\n                                ", HTML.P("\n                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a\n                                    more-or-less normal distribution of letters, as opposed to using.\n                                "), "\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Hendrix Corp"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("1.5.2"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("12.06.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 12%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "12",
      role: "progressbar",
      "class": " progress-bar progress-bar-success"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-success"
    }, "\n                                        $1 206,40\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a1.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a2.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a4.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a7.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n        "), "\n\n\n        ", HTML.DIV({
      "class": "row projects"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " New branding")), "\n\n                                ", HTML.P("\n                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which\n                                "), "\n\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Red Agency"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("1.2.1"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("22.04.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 22%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "22",
      role: "progressbar",
      "class": " progress-bar progress-bar-success"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-success"
    }, "\n                                        $680,00\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a8.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " New branding")), "\n\n                                ", HTML.P("\n                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which\n                                "), "\n\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Red Agency"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("1.2.1"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("22.04.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 22%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "22",
      role: "progressbar",
      "class": " progress-bar progress-bar-success"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-success"
    }, "\n                                        $680,00\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a8.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n        "), "\n\n\n        ", HTML.DIV({
      "class": "row projects"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Project manager app")), "\n\n                                ", HTML.P("\n                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..\n                                "), "\n\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Vito Company"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("3.0.0"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("16.10.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 65%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "65",
      role: "progressbar",
      "class": " progress-bar progress-bar-success"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-success"
    }, "\n                                        $3 600,20\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a7.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a8.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a2.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hred"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-danger pull-right"
    }, "DEDLINE"), "\n\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Ilustration project")), "\n\n                                ", HTML.P("\n                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of\n                                    over 200 Latin words\n                                "), "\n\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Taco Fresh Company"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("1.0.4"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("26.02.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 23%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "23",
      role: "progressbar",
      "class": " progress-bar progress-bar-danger"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-danger"
    }, "\n                                        $456,20\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a1.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n        "), "\n\n\n        ", HTML.DIV({
      "class": "row projects"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hred"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-danger pull-right"
    }, "DEDLINE"), "\n\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Ilustration project")), "\n\n                                ", HTML.P("\n                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of\n                                    over 200 Latin words\n                                "), "\n\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Taco Fresh Company"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("1.0.4"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("26.02.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 23%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "23",
      role: "progressbar",
      "class": " progress-bar progress-bar-danger"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-danger"
    }, "\n                                        $456,20\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a5.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a3.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a1.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hblue"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-info pull-right"
    }, "NEW"), "\n\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-sm-8"
    }, "\n                                ", HTML.H4(HTML.A({
      href: ""
    }, " Website project")), "\n\n                                ", HTML.P("\n                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,\n                                    sometimes by accident, sometimes on purpose (injected humour and the like).\n                                "), "\n\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "CLIENT"), "\n                                        ", HTML.SMALL("Morph Company"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "VERSION"), "\n                                        ", HTML.SMALL("2.5.2"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "DEDLINE"), "\n                                        ", HTML.SMALL("10.01.2015"), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "project-label"
    }, "PROGRESS"), "\n                                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                                            ", HTML.DIV({
      style: "width: 43%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "43",
      role: "progressbar",
      "class": " progress-bar progress-bar-info"
    }, "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-sm-4 project-info"
    }, "\n                                ", HTML.DIV({
      "class": "project-action m-t-md"
    }, "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " View"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Edit"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-xs btn-default"
    }, " Delete"), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-value"
    }, "\n                                    ", HTML.H2({
      "class": "text-info"
    }, "\n                                        $456,20\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "project-people"
    }, "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a8.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a2.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a1.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a4.jpg"
    }), "\n                                    ", HTML.IMG({
      alt: "logo",
      "class": "img-circle",
      src: "images/a6.jpg"
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        Additional information about project in footer\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n\n    " ];
  }) ];
}));

})();
