(function(){
Template.__checkName("fileManager");
Template["fileManager"] = new Template("Template.fileManager", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("File manager"),
      desc: Spacebars.call("Show you files in a nica manager design."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "dropdown"
    }, "\n                            ", HTML.A({
      "class": "dropdown-toggle btn btn-primary btn-block",
      href: "#",
      "data-toggle": "dropdown"
    }, "\n                                NEW\n                            "), "\n                            ", HTML.UL({
      "class": "dropdown-menu filedropdown m-l"
    }, "\n                                ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-folder-o"
    }), " Folder")), "\n                                ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-file"
    }), " File")), "\n                                ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-file-excel-o"
    }), " Sheet")), "\n                                ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-file-audio-o"
    }), " Music")), "\n                                ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-file-movie-o"
    }), " Movie")), "\n                            "), "\n                        "), "\n\n                        ", HTML.UL({
      "class": "h-list m-t"
    }, "\n                            ", HTML.LI({
      "class": "active"
    }, HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-folder"
    }), " Files")), "\n                            ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-user text-info"
    }), " Shared with me")), "\n                            ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-clock-o text-success"
    }), " Recent")), "\n                            ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-star text-warning"
    }), " Starred")), "\n                            ", HTML.LI(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-trash text-danger"
    }), " Trash")), "\n                        "), "\n                    "), "\n\n                "), "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.H3("6 GB used"), "\n                        ", HTML.P("It is 65% of all your storage"), "\n                        ", HTML.DIV({
      "class": "progress full m-t-xs"
    }, "\n                            ", HTML.DIV({
      style: "width: 65%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "65",
      role: "progressbar",
      "class": " progress-bar progress-bar-info"
    }, "\n                                65%\n                            "), "\n                        "), "\n                        ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum adipiscing elit."), "\n                    "), "\n\n                "), "\n\n            "), "\n            ", HTML.DIV({
      "class": "col-md-9"
    }, "\n                ", HTML.DIV({
      "class": "row"
    }, "\n                    ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                            "), "\n                        "), "\n\n                    "), "\n                    ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-powerpoint-o text-danger"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Presentation_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-powerpoint-o text-danger"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Presentation_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-powerpoint-o text-danger"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Presentation_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-powerpoint-o text-danger"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Presentation_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-powerpoint-o text-danger"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Presentation_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-powerpoint-o text-danger"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Presentation_2016.doc"), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                ", HTML.I({
      "class": "fa fa-file-powerpoint-o text-danger"
    }), "\n                            "), "\n                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "Presentation_2016.doc"), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n\n            "), "\n        "), "\n\n\n    "), "\n    " ];
  }) ];
}));

})();
