(function(){
Template.__checkName("chatView");
Template["chatView"] = new Template("Template.chatView", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Chat view"),
      desc: Spacebars.call("Create a chat rooom in your app"),
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
      "class": "col-md-12"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel "
    }, "\n                        ", HTML.DIV({
      "class": "panel-heading hbuilt"
    }, "\n                            ", HTML.DIV({
      "class": "panel-tools"
    }, "\n                                ", HTML.A({
      "class": "closebox"
    }, HTML.I({
      "class": "fa fa-times"
    })), "\n                            "), "\n                            Chat room\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body no-padding"
    }, "\n\n\n                            ", HTML.DIV({
      "class": "row"
    }, "\n\n                                ", HTML.DIV({
      "class": "col-md-9 "
    }, "\n                                    ", HTML.DIV({
      "class": "chat-discussion"
    }, "\n\n                                        ", HTML.DIV({
      "class": "chat-message left"
    }, "\n                                            ", HTML.IMG({
      "class": "message-avatar",
      src: "images/a2.jpg",
      alt: ""
    }), "\n                                            ", HTML.DIV({
      "class": "message"
    }, "\n                                                ", HTML.A({
      "class": "message-author",
      href: "#"
    }, " Michael Smith "), "\n                                                ", HTML.SPAN({
      "class": "message-date"
    }, "  Fri Jan 25 2015 - 11:12:36 "), "\n                                            ", HTML.SPAN({
      "class": "message-content"
    }, "\n											There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\n                                            "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message right"
    }, "\n                                            ", HTML.IMG({
      "class": "message-avatar",
      src: "images/a2.jpg",
      alt: ""
    }), "\n                                            ", HTML.DIV({
      "class": "message"
    }, "\n                                                ", HTML.A({
      "class": "message-author",
      href: "#"
    }, " Michael Smith "), "\n                                                ", HTML.SPAN({
      "class": "message-date"
    }, "  Fri Jan 25 2015 - 11:12:36 "), "\n                                            ", HTML.SPAN({
      "class": "message-content"
    }, "\n											There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\n                                            "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message left"
    }, "\n                                            ", HTML.IMG({
      "class": "message-avatar",
      src: "images/a1.jpg",
      alt: ""
    }), "\n                                            ", HTML.DIV({
      "class": "message"
    }, "\n                                                ", HTML.A({
      "class": "message-author",
      href: "#"
    }, " Michael Smith "), "\n                                                ", HTML.SPAN({
      "class": "message-date"
    }, " Mon Jan 26 2015 - 18:39:23 "), "\n                                            ", HTML.SPAN({
      "class": "message-content"
    }, "\n											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n                                            "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message right"
    }, "\n                                            ", HTML.IMG({
      "class": "message-avatar",
      src: "images/a4.jpg",
      alt: ""
    }), "\n                                            ", HTML.DIV({
      "class": "message"
    }, "\n                                                ", HTML.A({
      "class": "message-author",
      href: "#"
    }, " Karl Jordan "), "\n                                                ", HTML.SPAN({
      "class": "message-date"
    }, "  Fri Jan 25 2015 - 11:12:36 "), "\n                                            ", HTML.SPAN({
      "class": "message-content"
    }, "\n											Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.\n                                            "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message left"
    }, "\n                                            ", HTML.IMG({
      "class": "message-avatar",
      src: "images/a2.jpg",
      alt: ""
    }), "\n                                            ", HTML.DIV({
      "class": "message"
    }, "\n                                                ", HTML.A({
      "class": "message-author",
      href: "#"
    }, " Michael Smith "), "\n                                                ", HTML.SPAN({
      "class": "message-date"
    }, "  Fri Jan 25 2015 - 11:12:36 "), "\n                                            ", HTML.SPAN({
      "class": "message-content"
    }, "\n											There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.\n                                            "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message right"
    }, "\n                                            ", HTML.IMG({
      "class": "message-avatar",
      src: "images/a5.jpg",
      alt: ""
    }), "\n                                            ", HTML.DIV({
      "class": "message"
    }, "\n                                                ", HTML.A({
      "class": "message-author",
      href: "#"
    }, " Alice Jordan "), "\n                                                ", HTML.SPAN({
      "class": "message-date"
    }, "  Fri Jan 25 2015 - 11:12:36 "), "\n                                            ", HTML.SPAN({
      "class": "message-content"
    }, "\n											All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n                                                It uses a dictionary of over 200 Latin words.\n                                            "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message left"
    }, "\n                                            ", HTML.IMG({
      "class": "message-avatar",
      src: "images/a6.jpg",
      alt: ""
    }), "\n                                            ", HTML.DIV({
      "class": "message"
    }, "\n                                                ", HTML.A({
      "class": "message-author",
      href: "#"
    }, " Mark Smith "), "\n                                                ", HTML.SPAN({
      "class": "message-date"
    }, "  Fri Jan 25 2015 - 11:12:36 "), "\n                                            ", HTML.SPAN({
      "class": "message-content"
    }, "\n											All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n                                                It uses a dictionary of over 200 Latin words.\n                                            "), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-md-3"
    }, "\n                                    ", HTML.DIV({
      "class": "chat-users"
    }, "\n\n                                        ", HTML.DIV({
      "class": "users-list"
    }, "\n\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.SPAN({
      "class": "pull-right label label-success"
    }, "Online"), "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a3.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Janet Smith"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a1.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Monica Smith"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.SPAN({
      "class": "pull-right label label-success"
    }, "Online"), "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a2.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Michael Smith"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a4.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Karl Jordan"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a5.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Alice Smith"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a6.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Monica Cale"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a2.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Mark Jordan"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.SPAN({
      "class": "pull-right label "
    }, "Online"), "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a3.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Janet Smith"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a4.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Karl Jordan"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a5.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Alice Smith"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a6.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Monica Cale"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.DIV({
      "class": "chat-user"
    }, "\n                                                ", HTML.IMG({
      "class": "chat-avatar",
      src: "images/a2.jpg",
      alt: ""
    }), "\n                                                ", HTML.DIV({
      "class": "chat-user-name"
    }, "\n                                                    ", HTML.A({
      href: "#"
    }, "Mark Jordan"), "\n                                                "), "\n                                            "), "\n\n\n                                        "), "\n\n                                    "), "\n                                "), "\n\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-footer"
    }, "\n                            ", HTML.DIV({
      "class": "input-group"
    }, "\n                                ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      placeholder: "Type your message here..."
    }), "\n                        ", HTML.SPAN({
      "class": "input-group-btn"
    }, "\n                            ", HTML.BUTTON({
      "class": "btn btn-success"
    }, "\n                                Send"), "\n                        "), "\n                            "), "\n                        "), "\n\n                    "), "\n\n\n                "), "\n\n            "), "\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
