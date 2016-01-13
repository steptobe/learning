(function(){
Template.__checkName("mailbox");
Template["mailbox"] = new Template("Template.mailbox", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Mailbox"),
      desc: Spacebars.call("Mailbox - Email list."),
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
    }, "\n\n                        ", HTML.UL({
      "class": "mailbox-list"
    }, "\n                            ", HTML.LI({
      "class": "active"
    }, "\n                                ", HTML.A({
      href: "#"
    }, "\n                                    ", HTML.SPAN({
      "class": "pull-right"
    }, "12"), "\n                                    ", HTML.I({
      "class": "fa fa-envelope"
    }), " Inbox\n                                "), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-paper-plane"
    }), " Sent"), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-pencil"
    }), " Draft"), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-trash"
    }), " Trash"), "\n                            "), "\n                        "), "\n                        ", HTML.HR(), "\n                        ", HTML.UL({
      "class": "mailbox-list"
    }, "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-plane text-danger"
    }), " Travel"), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-bar-chart text-warning"
    }), " Finance"), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-users text-info"
    }), " Social"), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-tag text-success"
    }), " Promos"), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-flag text-primary"
    }), " Updates"), "\n                            "), "\n                        "), "\n                        ", HTML.HR(), "\n                        ", HTML.UL({
      "class": "mailbox-list"
    }, "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-gears"
    }), " Settings"), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-info-circle"
    }), " Support"), "\n                            "), "\n                        "), "\n\n\n                    "), "\n\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-md-9"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading hbuilt"
    }, "\n                        ", HTML.DIV({
      "class": "text-center p-xs font-normal"
    }, "\n                            ", HTML.DIV({
      "class": "input-group"
    }, HTML.INPUT({
      type: "text",
      "class": "form-control input-sm",
      placeholder: "Search email in your inbox..."
    }), " ", HTML.SPAN({
      "class": "input-group-btn"
    }, " ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-sm btn-default"
    }, "Search\n                            "), " ")), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-6 m-b-md"
    }, "\n                                ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-refresh"
    }), " Refresh"), "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-eye"
    })), "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-exclamation"
    })), "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-trash-o"
    })), "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-check"
    })), "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-tag"
    })), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-6 mailbox-pagination m-b-md"
    }, "\n                                ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-arrow-left"
    })), "\n                                    ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-arrow-right"
    })), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "table-responsive"
    }, "\n                            ", HTML.TABLE({
      "class": "table table-hover table-mailbox"
    }, "\n                                ", HTML.TBODY("\n                                ", HTML.TR({
      "class": "unread"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single checkbox-success"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox",
      checked: ""
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Jeremy Massey")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), "\n                                    "), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Tue, Nov 25"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Marshall Horne")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Praesent nec nisl sed neque ornare maximus at ac enim."), "\n                                    "), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Wed, Jan 13"), "\n                                "), "\n                                ", HTML.TR({
      "class": "active"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Grant Franco"), " ", HTML.SPAN({
      "class": "label label-warning"
    }, "Finance")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Etiam maximus tellus a turpis tempor mollis.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Mon, Oct 19"), "\n                                "), "\n                                ", HTML.TR({
      "class": "unread active"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox",
      checked: ""
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Ferdinand Meadows")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Aenean hendrerit ligula eget augue gravida semper.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sat, Aug 29"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Ivor Rios"), " ", HTML.SPAN({
      "class": "label label-info"
    }, "Social"), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Sed quis augue in nunc venenatis finibus.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sat, Dec 12"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Maxwell Murphy")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Quisque eu tortor quis justo viverra cursus.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, May 17"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Henry Patterson")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Aliquam nec justo interdum, ornare mi non, elementum\n                                        lacus.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Thu, Aug 06"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Brent Rasmussen")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Nam nec turpis sed quam tristique sodales.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, Nov 15"), "\n                                "), "\n                                ", HTML.TR({
      "class": "unread"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single checkbox-success"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox",
      checked: ""
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Joseph Hurley")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Nullam tempus leo id urna sagittis blandit.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, Aug 10"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Alan Matthews")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Quisque quis turpis ac quam sagittis scelerisque vel ut\n                                        urna.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, Mar 27"), "\n                                "), "\n                                ", HTML.TR({
      "class": "active"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Colby Lynch"), " ", HTML.SPAN({
      "class": "label label-danger"
    }, "Travel")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Donec non enim pulvinar, ultrices metus eget, condimentum\n                                        mi.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Thu, Dec 31"), "\n                                "), "\n                                ", HTML.TR({
      "class": "unread"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single checkbox-success"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox",
      checked: ""
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Jeremy Massey")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), "\n                                    "), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Tue, Nov 25"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Marshall Horne")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Praesent nec nisl sed neque ornare maximus at ac enim."), "\n                                    "), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Wed, Jan 13"), "\n                                "), "\n                                ", HTML.TR({
      "class": "active"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Grant Franco"), " ", HTML.SPAN({
      "class": "label label-warning"
    }, "Finance")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Etiam maximus tellus a turpis tempor mollis.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Mon, Oct 19"), "\n                                "), "\n                                ", HTML.TR({
      "class": "unread active"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox",
      checked: ""
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Ferdinand Meadows")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Aenean hendrerit ligula eget augue gravida semper.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sat, Aug 29"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Ivor Rios"), " ", HTML.SPAN({
      "class": "label label-info"
    }, "Social"), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Sed quis augue in nunc venenatis finibus.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sat, Dec 12"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Maxwell Murphy")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Quisque eu tortor quis justo viverra cursus.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, May 17"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Henry Patterson")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Aliquam nec justo interdum, ornare mi non, elementum\n                                        lacus.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Thu, Aug 06"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Brent Rasmussen")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Nam nec turpis sed quam tristique sodales.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, Nov 15"), "\n                                "), "\n                                ", HTML.TR({
      "class": "unread"
    }, "\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox checkbox-single checkbox-success"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox",
      checked: ""
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Joseph Hurley")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Nullam tempus leo id urna sagittis blandit.")), "\n                                    ", HTML.TD(HTML.I({
      "class": "fa fa-paperclip"
    })), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, Aug 10"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD({
      "class": ""
    }, "\n                                        ", HTML.DIV({
      "class": "checkbox"
    }, "\n                                            ", HTML.INPUT({
      type: "checkbox"
    }), "\n                                            ", HTML.LABEL(), "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Alan Matthews")), "\n                                    ", HTML.TD(HTML.A({
      href: "#"
    }, "Quisque quis turpis ac quam sagittis scelerisque vel ut\n                                        urna.")), "\n                                    ", HTML.TD(), "\n                                    ", HTML.TD({
      "class": "text-right mail-date"
    }, "Sun, Mar 27"), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                        ", HTML.I({
      "class": "fa fa-eye"
    }, " "), " 6 unread\n                    "), "\n                "), "\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
