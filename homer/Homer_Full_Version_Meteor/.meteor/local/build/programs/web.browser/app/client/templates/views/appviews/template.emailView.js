(function(){
Template.__checkName("emailView");
Template["emailView"] = new Template("Template.emailView", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Mailbox"),
      desc: Spacebars.call("Mailbox - Email view."),
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
    }, "\n\n                            ", HTML.A({
      href: "mailbox_compose.html",
      "class": "btn btn-success btn-block m-b-md"
    }, "Compose"), "\n\n                            ", HTML.UL({
      "class": "mailbox-list"
    }, "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, "\n                                        ", HTML.SPAN({
      "class": "pull-right"
    }, "12"), "\n                                        ", HTML.I({
      "class": "fa fa-envelope"
    }), " Inbox\n                                    "), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-paper-plane"
    }), " Sent"), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-pencil"
    }), " Draft"), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Trash"), "\n                                "), "\n                            "), "\n                            ", HTML.HR(), "\n                            ", HTML.UL({
      "class": "mailbox-list"
    }, "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-plane text-danger"
    }), " Travel"), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-bar-chart text-warning"
    }), " Finance"), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-users text-info"
    }), " Social"), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-tag text-success"
    }), " Promos"), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-flag text-primary"
    }), " Updates"), "\n                                "), "\n                            "), "\n                            ", HTML.HR(), "\n                            ", HTML.UL({
      "class": "mailbox-list"
    }, "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-gears"
    }), " Settings"), "\n                                "), "\n                                ", HTML.LI("\n                                    ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-info-circle"
    }), " Support"), "\n                                "), "\n                            "), "\n\n\n                        "), "\n\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "col-md-9"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel email-compose"
    }, "\n                        ", HTML.DIV({
      "class": "panel-heading hbuilt"
    }, "\n\n                            ", HTML.DIV({
      "class": "p-xs h4"
    }, "\n                                ", HTML.SMALL({
      "class": "pull-right"
    }, "\n                                    08:26 PM (16 hours ago)\n                                "), "\n                                Email view\n\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "border-top border-left border-right bg-light"
    }, "\n                            ", HTML.DIV({
      "class": "p-m"
    }, "\n\n                                ", HTML.DIV("\n                                    ", HTML.SPAN({
      "class": "font-extra-bold"
    }, "Subject: "), "\n                                    Lorem Ipsum has been the industry's standard dummy text ever\n                                "), "\n                                ", HTML.DIV("\n                                    ", HTML.SPAN({
      "class": "font-extra-bold"
    }, "From: "), "\n                                    ", HTML.A({
      href: "#"
    }, "example.@email.com"), "\n                                "), "\n                                ", HTML.DIV("\n                                    ", HTML.SPAN({
      "class": "font-extra-bold"
    }, "Date: "), "\n                                    14.10.2016\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.DIV("\n                                ", HTML.H4("Hello Jonathan! "), "\n\n                                ", HTML.P("dummy text of the printing and typesetting industry. ", HTML.STRONG("Lorem Ipsum has been the dustrys"), " standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n                                    ", HTML.BR(), HTML.BR(), "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\n                                    recently with."), "\n\n                                ", HTML.P("Mark Smith\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "border-bottom border-left border-right bg-white p-m"
    }, "\n                            ", HTML.P({
      "class": "m-b-md"
    }, "\n                                ", HTML.SPAN(HTML.I({
      "class": "fa fa-paperclip"
    }), " 3 attachments - "), "\n                                ", HTML.A({
      href: "#",
      "class": "btn btn-default btn-xs"
    }, "Download all in zip format ", HTML.I({
      "class": "fa fa-file-zip-o"
    }), " "), "\n                            "), "\n\n                            ", HTML.DIV("\n                                ", HTML.DIV({
      "class": "row"
    }, "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                                ", HTML.I({
      "class": "fa fa-file-pdf-o text-info"
    }), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                                ", HTML.A({
      href: "#"
    }, "Document_2016.doc"), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                                ", HTML.I({
      "class": "fa fa-file-audio-o text-warning"
    }), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                                ", HTML.A({
      href: "#"
    }, "Audio_2016.doc"), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                                            ", HTML.DIV({
      "class": "panel-body file-body"
    }, "\n                                                ", HTML.I({
      "class": "fa fa-file-excel-o text-success"
    }), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                                                ", HTML.A({
      href: "#"
    }, "Sheets_2016.doc"), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n\n\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "panel-footer text-right"
    }, "\n                            ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-reply"
    }), " Reply"), "\n                                ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-arrow-right"
    }), " Forward"), "\n                                ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-print"
    }), " Print"), "\n                                ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-trash-o"
    }), " Remove"), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
