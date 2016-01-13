(function(){
Template.__checkName("notes");
Template["notes"] = new Template("Template.notes", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Notes"),
      desc: Spacebars.call("Build notebook functionality in your app"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel panel-group"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.DIV({
      "class": "text-center text-muted font-bold"
    }, "Search note or add new"), "\n\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-section"
    }, "\n\n                            ", HTML.DIV({
      "class": "input-group"
    }, "\n                                ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      placeholder: "Search note..."
    }), "\n                           ", HTML.SPAN({
      "class": "input-group-btn"
    }, "\n                                ", HTML.BUTTON({
      "class": "btn btn-default",
      type: "button"
    }, HTML.I({
      "class": "glyphicon glyphicon-plus small"
    }), " "), "\n                           "), "\n                            "), "\n                            ", HTML.BUTTON({
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#notes",
      "class": "btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm"
    }, "\n                                All notes ", HTML.I({
      "class": "fa fa-angle-down"
    }), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      id: "notes",
      "class": "collapse"
    }, "\n\n                            ", HTML.DIV({
      "class": "panel-body note-link"
    }, "\n                                ", HTML.A({
      href: "#note1",
      "data-toggle": "tab"
    }, "\n                                    ", HTML.SMALL({
      "class": "pull-right text-muted"
    }, "26.10.2016"), "\n                                    ", HTML.H5("Publishing packages"), "\n                                    ", HTML.DIV({
      "class": "small"
    }, "\n                                        Many desktop publishing packages and web page editors now use Lorem\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "panel-body note-link"
    }, "\n                                ", HTML.A({
      href: "#note2",
      "data-toggle": "tab"
    }, "\n                                    ", HTML.SMALL({
      "class": "pull-right text-muted"
    }, "22.01.2016"), "\n                                    ", HTML.H5("\n                                        Latin literature from\n                                    "), "\n                                    ", HTML.DIV({
      "class": "small"
    }, "\n                                        Lorem Ipsum, you need to be sure there\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "panel-body note-link"
    }, "\n                                ", HTML.A({
      href: "#note3",
      "data-toggle": "tab"
    }, "\n                                    ", HTML.SMALL({
      "class": "pull-right text-muted"
    }, "14.03.2016"), "\n                                    ", HTML.H5("\n                                        The generated Lorem Ipsum\n                                    "), "\n                                    ", HTML.DIV({
      "class": "small"
    }, "\n                                        It has survived not only five centuries\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "panel-body note-link"
    }, "\n                                ", HTML.A({
      href: "#note4",
      "data-toggle": "tab"
    }, "\n                                    ", HTML.SMALL({
      "class": "pull-right text-muted"
    }, "07.10.2015"), "\n                                    ", HTML.H5("\n                                        Neque porro quisquam\n                                    "), "\n                                    ", HTML.DIV({
      "class": "small"
    }, "\n                                        Finibus Bonorum et Malorum\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "panel-body note-link"
    }, "\n                                ", HTML.A({
      href: "#note5",
      "data-toggle": "tab"
    }, "\n                                    ", HTML.SMALL({
      "class": "pull-right text-muted"
    }, "12.04.2015"), "\n                                    ", HTML.H5("\n                                        The first line of Lorem Ipsum\n                                    "), "\n                                    ", HTML.DIV({
      "class": "small"
    }, "\n                                        Lorem Ipsum which looks reasonable\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n\n\n\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "col-md-9"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                            ", HTML.DIV({
      "class": "text-center hidden"
    }, "\n                                We couldn't find any notes for you.\n                            "), "\n\n                            ", HTML.DIV({
      "class": "tab-content"
    }, "\n                                ", HTML.DIV({
      id: "note1",
      "class": "tab-pane active"
    }, "\n                                    ", HTML.DIV({
      "class": "pull-right text-muted m-l-lg"
    }, "\n                                        26.10.2016\n                                    "), "\n                                    ", HTML.H3("Publishing packages"), "\n                                    ", HTML.HR(), "\n                                    ", HTML.DIV({
      "class": "note-content"
    }, "\n                                ", HTML.TEXTAREA({
      "class": "form-control",
      value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                "
    }), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-o-up"
    }), " Save"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Remove"), "\n                                    "), "\n                                "), "\n\n                                ", HTML.DIV({
      id: "note2",
      "class": "tab-pane"
    }, "\n                                    ", HTML.DIV({
      "class": "pull-right text-muted m-l-lg"
    }, "\n                                        22.01.2016\n                                    "), "\n                                    ", HTML.H3("Latin literature from "), "\n                                    ", HTML.HR(), "\n                                    ", HTML.DIV({
      "class": "note-content"
    }, "\n                                ", HTML.TEXTAREA({
      "class": "form-control",
      value: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n                                "
    }), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-o-up"
    }), " Save"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Remove"), "\n                                    "), "\n                                "), "\n\n                                ", HTML.DIV({
      id: "note3",
      "class": "tab-pane"
    }, "\n                                    ", HTML.DIV({
      "class": "pull-right text-muted m-l-lg"
    }, "\n                                        14.03.2016\n                                    "), "\n                                    ", HTML.H3("The generated Lorem Ipsum "), "\n                                    ", HTML.HR(), "\n                                    ", HTML.DIV({
      "class": "note-content"
    }, "\n                                ", HTML.TEXTAREA({
      "class": "form-control",
      value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n                                "
    }), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-o-up"
    }), " Save"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Remove"), "\n                                    "), "\n                                "), "\n\n                                ", HTML.DIV({
      id: "note4",
      "class": "tab-pane"
    }, "\n                                    ", HTML.DIV({
      "class": "pull-right text-muted m-l-lg"
    }, "\n                                        07.10.2015\n                                    "), "\n                                    ", HTML.H3("Neque porro quisquam"), "\n                                    ", HTML.HR(), "\n                                    ", HTML.DIV({
      "class": "note-content"
    }, "\n                                ", HTML.TEXTAREA({
      "class": "form-control",
      value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                "
    }), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-o-up"
    }), " Save"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Remove"), "\n                                    "), "\n                                "), "\n\n                                ", HTML.DIV({
      id: "note5",
      "class": "tab-pane"
    }, "\n                                    ", HTML.DIV({
      "class": "pull-right text-muted m-l-lg"
    }, "\n                                        12.04.2015\n                                    "), "\n                                    ", HTML.H3("The first line of Lorem Ipsum "), "\n                                    ", HTML.HR(), "\n                                    ", HTML.DIV({
      "class": "note-content"
    }, "\n                                ", HTML.TEXTAREA({
      "class": "form-control",
      value: "\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n                                "
    }), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-o-up"
    }), " Save"), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-sm btn-default"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Remove"), "\n                                    "), "\n                                "), "\n\n\n                            "), "\n\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
