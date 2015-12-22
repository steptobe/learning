(function(){
Template.__checkName("emailCompose");
Template["emailCompose"] = new Template("Template.emailCompose", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Mailbox"),
      desc: Spacebars.call("Mailbox - Email compose."),
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
    }, "\n                            ", HTML.DIV({
      "class": "p-xs h4"
    }, "\n\n                                New message\n\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-heading hbuilt"
    }, "\n                            ", HTML.DIV({
      "class": "p-xs"
    }, "\n\n                                ", HTML.FORM({
      method: "get",
      "class": "form-horizontal"
    }, "\n                                    ", HTML.DIV({
      "class": "form-group"
    }, HTML.LABEL({
      "class": "col-sm-1 control-label text-left"
    }, "To:"), "\n\n                                        ", HTML.DIV({
      "class": "col-sm-11"
    }, HTML.INPUT({
      type: "text",
      "class": "form-control input-sm",
      placeholder: "example@email.com"
    })), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "form-group"
    }, HTML.LABEL({
      "class": "col-sm-1 control-label text-left"
    }, "Cc:"), "\n\n                                        ", HTML.DIV({
      "class": "col-sm-11"
    }, HTML.INPUT({
      type: "text",
      "class": "form-control input-sm"
    })), "\n                                    "), "\n                                    ", HTML.DIV({
      "class": "form-group"
    }, HTML.LABEL({
      "class": "col-sm-1 control-label text-left"
    }, "Subject:"), "\n\n                                        ", HTML.DIV({
      "class": "col-sm-11"
    }, HTML.INPUT({
      type: "text",
      "class": "form-control input-sm",
      placeholder: "Enter Email subject"
    })), "\n                                    "), "\n                                "), "\n\n\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body no-padding"
    }, "\n                            ", HTML.DIV({
      "class": "summernote"
    }, "\n                                ", HTML.H5("Hello Jonathan! "), "\n\n                                ", HTML.P("dummy text of the printing and typesetting industry. ", HTML.STRONG("Lorem Ipsum has been the dustrys"), " standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more\n                                    ", HTML.BR(), HTML.BR(), "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\n                                    recently with."), "\n\n                                ", HTML.P("Mark Smith\n                                "), "\n                            "), "\n                        "), "\n\n\n                        ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                            ", HTML.DIV({
      "class": "pull-right"
    }, "\n                                ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-edit"
    }), " Save"), "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Discard"), "\n                                "), "\n                            "), "\n                            ", HTML.BUTTON({
      "class": "btn btn-primary"
    }, "Send email"), "\n                            ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-paperclip"
    }), " "), "\n                                ", HTML.BUTTON({
      "class": "btn btn-default"
    }, HTML.I({
      "class": "fa fa-image"
    }), " "), "\n                            "), "\n\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
