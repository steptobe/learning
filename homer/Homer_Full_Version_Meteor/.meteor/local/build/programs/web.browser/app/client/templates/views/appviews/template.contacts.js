(function(){
Template.__checkName("contacts");
Template["contacts"] = new Template("Template.contacts", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Contacts"),
      desc: Spacebars.call("Show users list in nice and color panels"),
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
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-success pull-right"
    }, "NEW"), "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/profile.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Bradly Danforth ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hyellow contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a4.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Tangela Sternberg ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hviolet contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a2.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Claud Vogan ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hblue contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a3.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Valda Purdy ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hblue contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a9.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a5.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hyellow contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-warning pull-right"
    }, "SPECIAL"), "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a6.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hred contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a7.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-success pull-right"
    }, "NEW"), "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/profile.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Bradly Danforth ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hyellow contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a4.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Tangela Sternberg ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hviolet contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a2.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Claud Vogan ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hblue contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a3.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, " Valda Purdy ")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hblue contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a9.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hgreen contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a5.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hyellow contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.SPAN({
      "class": "label label-warning pull-right"
    }, "SPECIAL"), "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a6.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-lg-3"
    }, "\n                ", HTML.DIV({
      "class": "hpanel hred contact-panel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.IMG({
      alt: "logo",
      "class": "img-circle m-b",
      src: "images/a7.jpg"
    }), "\n                        ", HTML.H3(HTML.A({
      href: ""
    }, "Max Simson")), "\n                        ", HTML.DIV({
      "class": "text-muted font-bold m-b-xs"
    }, "California, LA"), "\n                        ", HTML.P("\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      "class": "panel-footer contact-footer"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Projects: "), " ", HTML.STRONG("200")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4 border-right"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Messages: "), " ", HTML.STRONG("300")), " "), "\n                            ", HTML.DIV({
      "class": "col-md-4"
    }, " ", HTML.DIV({
      "class": "contact-stat"
    }, HTML.SPAN("Views: "), " ", HTML.STRONG("400")), " "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
