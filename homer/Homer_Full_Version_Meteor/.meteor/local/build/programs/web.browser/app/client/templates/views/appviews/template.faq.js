(function(){
Template.__checkName("faq");
Template["faq"] = new Template("Template.faq", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("FAQ"),
      desc: Spacebars.call("FAQ page - build faq/support page for your app"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.DIV({
      "class": ""
    }, "Frequently asked questions. Find the answer or contact with us on support email."), "\n                            ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                ", HTML.DIV({
      "class": "input-group"
    }, "\n                                    ", HTML.INPUT({
      "class": "form-control",
      type: "text",
      placeholder: "Search question.."
    }), "\n                                    ", HTML.DIV({
      "class": "input-group-btn"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-search"
    })), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel panel-group",
      id: "accordion",
      role: "tablist",
      "aria-multiselectable": "true"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.H4({
      "class": "m-t-none m-b-none"
    }, "General questions"), "\n                            ", HTML.SMALL({
      "class": "text-muted"
    }, "All general questions about our app."), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q1",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Where can I purchase Homer theme ?\n                            "), "\n                            ", HTML.DIV({
      id: "q1",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q2",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Many desktop publishing packages ?\n                            "), "\n                            ", HTML.DIV({
      id: "q2",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q3",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Lorem Ipsum available, but the majority have ?\n                            "), "\n                            ", HTML.DIV({
      id: "q3",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q4",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                The generated Lorem Ipsum is therefore always ?\n                            "), "\n                            ", HTML.DIV({
      id: "q4",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q5",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                College in Virginia, looked up one of ?\n                            "), "\n                            ", HTML.DIV({
      id: "q5",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q6",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Lorem Ipsum is simply dummy ?\n                            "), "\n                            ", HTML.DIV({
      id: "q6",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q7",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                The standard chunk of Lorem Ipsum used since ?\n                            "), "\n                            ", HTML.DIV({
      id: "q7",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q8",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Many desktop publishing ?\n                            "), "\n                            ", HTML.DIV({
      id: "q8",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#q9",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Cicero are also reproduced in their exact original form, accompanied ?\n                            "), "\n                            ", HTML.DIV({
      id: "q9",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel panel-group",
      id: "accordion2",
      role: "tablist",
      "aria-multiselectable": "true"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.H4({
      "class": "m-t-none m-b-none"
    }, "Technical questions"), "\n                            ", HTML.SMALL({
      "class": "text-muted"
    }, "All technical questions about our app."), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q10",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                The point of using Lorem Ipsum ?\n                            "), "\n                            ", HTML.DIV({
      id: "q10",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q11",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Lorem Ipsum passage, and going through the cites ?\n                            "), "\n                            ", HTML.DIV({
      id: "q11",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q12",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Many desktop publishing packages and ?\n                            "), "\n                            ", HTML.DIV({
      id: "q12",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q13",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Aldus PageMaker including versions of Lorem Ipsum ?\n                            "), "\n                            ", HTML.DIV({
      id: "q13",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q14",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Nor again is there anyone who ?\n                            "), "\n                            ", HTML.DIV({
      id: "q14",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q15",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Neque porro quisquam est, qui dolorem ipsum ?\n                            "), "\n                            ", HTML.DIV({
      id: "q15",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q16",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Temporibus autem quibusdam ?\n                            "), "\n                            ", HTML.DIV({
      id: "q16",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q17",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                Et harum quidem rerum facilis ?\n                            "), "\n                            ", HTML.DIV({
      id: "q17",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.A({
      "data-toggle": "collapse",
      "data-parent": "#accordion2",
      href: "#q18",
      "aria-expanded": "true"
    }, "\n                                ", HTML.I({
      "class": "fa fa-chevron-down pull-right text-muted"
    }), "\n                                The wise man therefore always  ?\n                            "), "\n                            ", HTML.DIV({
      id: "q18",
      "class": "panel-collapse collapse"
    }, "\n                                ", HTML.HR(), "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
