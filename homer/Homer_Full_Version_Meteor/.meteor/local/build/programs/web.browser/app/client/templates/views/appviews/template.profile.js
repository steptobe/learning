(function(){
Template.__checkName("profile");
Template["profile"] = new Template("Template.profile", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Profile"),
      desc: Spacebars.call("Show user data in clear profile design"),
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
      "class": "col-lg-4"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "pull-right text-right"
    }, "\n                            ", HTML.DIV({
      "class": "btn-group"
    }, "\n                                ", HTML.I({
      "class": "fa fa-facebook btn btn-default btn-xs"
    }), "\n                                ", HTML.I({
      "class": "fa fa-twitter btn btn-default btn-xs"
    }), "\n                                ", HTML.I({
      "class": "fa fa-linkedin btn btn-default btn-xs"
    }), "\n                            "), "\n                        "), "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b m-t-md",
      src: "images/profile.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                        ", HTML.DIV({
      "class": "progress m-t-xs full progress-small"
    }, "\n                            ", HTML.DIV({
      style: "width: 65%",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "65",
      role: "progressbar",
      "class": " progress-bar progress-bar-success"
    }, "\n                                ", HTML.SPAN({
      "class": "sr-only"
    }, "35% Complete (success)"), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "border-right border-left"
    }, "\n                        ", HTML.SECTION({
      id: "map"
    }, "\n                            ", HTML.DIV({
      id: "map1",
      style: "height: 200px"
    }), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DL("\n                            ", HTML.DT("Description lists"), "\n                            ", HTML.DD("A description list is perfect for defining terms."), "\n                            ", HTML.DT("Euismod"), "\n                            ", HTML.DD("Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), "\n                            ", HTML.DD("Donec id elit non mi porta gravida at eget metus."), "\n                            ", HTML.DT("Malesuada porta"), "\n                            ", HTML.DD("Etiam porta sem malesuada magna mollis euismod."), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, "\n                                ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, "\n                                ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, "\n                                ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), "\n                            "), "\n                        "), "\n                    "), "\n\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-8"
    }, "\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n\n                        ", HTML.UL({
      "class": "nav nav-tabs"
    }, "\n                            ", HTML.LI({
      "class": "active"
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-1"
    }, "Project")), "\n                            ", HTML.LI({
      "class": ""
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-2"
    }, "Messages")), "\n                        "), "\n                        ", HTML.DIV({
      "class": "tab-content"
    }, "\n                            ", HTML.DIV({
      id: "tab-1",
      "class": "tab-pane active"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.STRONG("Lorem ipsum dolor sit amet, consectetuer adipiscing"), "\n\n                                    ", HTML.P("A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of\n                                        existence in this spot, which was created for the bliss of souls like mine."), "\n\n                                    ", HTML.DIV({
      "class": "table-responsive"
    }, "\n                                        ", HTML.TABLE({
      "class": "table table-striped"
    }, "\n                                            ", HTML.THEAD("\n                                            ", HTML.TR("\n\n                                                ", HTML.TH("#"), "\n                                                ", HTML.TH("Project "), "\n                                                ", HTML.TH("Name "), "\n                                                ", HTML.TH("Phone "), "\n                                                ", HTML.TH("Company "), "\n                                                ", HTML.TH("Completed "), "\n                                                ", HTML.TH("Task"), "\n                                                ", HTML.TH("Date"), "\n                                                ", HTML.TH("Action"), "\n                                            "), "\n                                            "), "\n                                            ", HTML.TBODY("\n                                            ", HTML.TR("\n                                                ", HTML.TD("1"), "\n                                                ", HTML.TD("Project ", HTML.SMALL("This is example of project")), "\n                                                ", HTML.TD("Patrick Smith"), "\n                                                ", HTML.TD("0800 051213"), "\n                                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "2/45")), "\n                                                ", HTML.TD("20%"), "\n                                                ", HTML.TD("Jul 14, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("2"), "\n                                                ", HTML.TD("Alpha project"), "\n                                                ", HTML.TD("Alice Jackson"), "\n                                                ", HTML.TD("0500 780909"), "\n                                                ", HTML.TD("Nec Euismod In Company"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "1/5")), "\n                                                ", HTML.TD("40%"), "\n                                                ", HTML.TD("Jul 16, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("3"), "\n                                                ", HTML.TD("Betha project"), "\n                                                ", HTML.TD("John Smith"), "\n                                                ", HTML.TD("0800 1111"), "\n                                                ", HTML.TD("Erat Volutpat"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "4/7")), "\n                                                ", HTML.TD("75%"), "\n                                                ", HTML.TD("Jul 18, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("4"), "\n                                                ", HTML.TD("Gamma project"), "\n                                                ", HTML.TD("Anna Jordan"), "\n                                                ", HTML.TD("(016977) 0648"), "\n                                                ", HTML.TD("Tellus Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "12/3")), "\n                                                ", HTML.TD("18%"), "\n                                                ", HTML.TD("Jul 22, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("2"), "\n                                                ", HTML.TD("Alpha project"), "\n                                                ", HTML.TD("Alice Jackson"), "\n                                                ", HTML.TD("0500 780909"), "\n                                                ", HTML.TD("Nec Euismod In Company"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "2/5")), "\n                                                ", HTML.TD("40%"), "\n                                                ", HTML.TD("Jul 16, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("1"), "\n                                                ", HTML.TD("Project ", HTML.SMALL("This is example of project")), "\n                                                ", HTML.TD("Patrick Smith"), "\n                                                ", HTML.TD("0800 051213"), "\n                                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "1/5")), "\n                                                ", HTML.TD("20%"), "\n                                                ", HTML.TD("Jul 14, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("4"), "\n                                                ", HTML.TD("Gamma project"), "\n                                                ", HTML.TD("Anna Jordan"), "\n                                                ", HTML.TD("(016977) 0648"), "\n                                                ", HTML.TD("Tellus Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "2/8")), "\n                                                ", HTML.TD("18%"), "\n                                                ", HTML.TD("Jul 22, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("1"), "\n                                                ", HTML.TD("Project ", HTML.SMALL("This is example of project")), "\n                                                ", HTML.TD("Patrick Smith"), "\n                                                ", HTML.TD("0800 051213"), "\n                                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "15/5")), "\n                                                ", HTML.TD("20%"), "\n                                                ", HTML.TD("Jul 14, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("2"), "\n                                                ", HTML.TD("Alpha project"), "\n                                                ", HTML.TD("Alice Jackson"), "\n                                                ", HTML.TD("0500 780909"), "\n                                                ", HTML.TD("Nec Euismod In Company"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "2/3")), "\n                                                ", HTML.TD("40%"), "\n                                                ", HTML.TD("Jul 16, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("3"), "\n                                                ", HTML.TD("Betha project"), "\n                                                ", HTML.TD("John Smith"), "\n                                                ", HTML.TD("0800 1111"), "\n                                                ", HTML.TD("Erat Volutpat"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "4/5")), "\n                                                ", HTML.TD("75%"), "\n                                                ", HTML.TD("Jul 18, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("4"), "\n                                                ", HTML.TD("Gamma project"), "\n                                                ", HTML.TD("Anna Jordan"), "\n                                                ", HTML.TD("(016977) 0648"), "\n                                                ", HTML.TD("Tellus Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "2/12")), "\n                                                ", HTML.TD("18%"), "\n                                                ", HTML.TD("Jul 22, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("2"), "\n                                                ", HTML.TD("Alpha project"), "\n                                                ", HTML.TD("Alice Jackson"), "\n                                                ", HTML.TD("0500 780909"), "\n                                                ", HTML.TD("Nec Euismod In Company"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "2/3")), "\n                                                ", HTML.TD("40%"), "\n                                                ", HTML.TD("Jul 16, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("1"), "\n                                                ", HTML.TD("Project ", HTML.SMALL("This is example of project")), "\n                                                ", HTML.TD("Patrick Smith"), "\n                                                ", HTML.TD("0800 051213"), "\n                                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "1/5")), "\n                                                ", HTML.TD("20%"), "\n                                                ", HTML.TD("Jul 14, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            ", HTML.TR("\n                                                ", HTML.TD("4"), "\n                                                ", HTML.TD("Gamma project"), "\n                                                ", HTML.TD("Anna Jordan"), "\n                                                ", HTML.TD("(016977) 0648"), "\n                                                ", HTML.TD("Tellus Ltd"), "\n                                                ", HTML.TD(HTML.SPAN({
      "class": "pie"
    }, "10/50")), "\n                                                ", HTML.TD("18%"), "\n                                                ", HTML.TD("Jul 22, 2013"), "\n                                                ", HTML.TD(HTML.A({
      href: "#"
    }, HTML.I({
      "class": "fa fa-check text-success"
    }))), "\n                                            "), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      id: "tab-2",
      "class": "tab-pane"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body no-padding"
    }, "\n\n\n                                    ", HTML.DIV({
      "class": "chat-discussion",
      style: "height: auto"
    }, "\n\n                                        ", HTML.DIV({
      "class": "chat-message"
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
    }, "\n											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n                                            "), "\n\n                                                ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-up"
    }), " Like "), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-success"
    }, HTML.I({
      "class": "fa fa-heart"
    }), " Love"), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message"
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
    }, "\n											Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.\n                                            "), "\n                                                ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-up"
    }), " Like "), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-heart"
    }), " Love"), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-primary"
    }, HTML.I({
      "class": "fa fa-pencil"
    }), " Message"), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message"
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
      "class": "chat-message"
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
    }, "\n											All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n                                                It uses a dictionary of over 200 Latin words.\n                                            "), "\n                                                ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-up"
    }), " Like "), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-warning"
    }, HTML.I({
      "class": "fa fa-eye"
    }), " Nudge"), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message"
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
    }, "\n											All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n                                                It uses a dictionary of over 200 Latin words.\n                                            "), "\n                                                ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-up"
    }), " Like "), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-success"
    }, HTML.I({
      "class": "fa fa-heart"
    }), " Love"), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message"
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
    }, "\n											Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.\n                                            "), "\n                                                ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-up"
    }), " Like "), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-heart"
    }), " Love"), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-primary"
    }, HTML.I({
      "class": "fa fa-pencil"
    }), " Message"), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
      "class": "chat-message"
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
      "class": "chat-message"
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
    }, "\n											All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n                                                It uses a dictionary of over 200 Latin words.\n                                            "), "\n                                                ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-thumbs-up"
    }), " Like "), "\n                                                    ", HTML.A({
      "class": "btn btn-xs btn-default"
    }, HTML.I({
      "class": "fa fa-heart"
    }), " Love"), "\n                                                "), "\n                                            "), "\n                                        "), "\n\n                                    "), "\n\n                                "), "\n                            "), "\n                        "), "\n\n\n                    "), "\n                "), "\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
