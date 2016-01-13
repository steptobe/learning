(function(){
Template.__checkName("typography");
Template["typography"] = new Template("Template.typography", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Typography"),
      desc: Spacebars.call("The basic elements of typography"),
      category: Spacebars.call("Interface")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Headings")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV("\n                            ", HTML.H1("Heading 1\n                                ", HTML.SMALL("Sub-heading"), "\n                            "), "\n                            ", HTML.H2("Heading 2\n                                ", HTML.SMALL("Sub-heading"), "\n                            "), "\n                            ", HTML.H3("Heading 3\n                                ", HTML.SMALL("Sub-heading"), "\n                            "), "\n                            ", HTML.H4("Heading 4\n                                ", HTML.SMALL("Sub-heading"), "\n                            "), "\n                            ", HTML.H5("Heading 5\n                                ", HTML.SMALL("Sub-heading"), "\n                            "), "\n                            ", HTML.H6("Heading 6\n                                ", HTML.SMALL("Sub-heading"), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-8"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Paragraph text")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "col-lg-6 border-right"
        }, "\n                                ", HTML.P("\n                                    Lorem Ipsum is simply dummy text of the ", HTML.STRONG("printing and typesetting"), "\n                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the\n                                    ", HTML.ABBR({
          title: "",
          "data-original-title": "Sample abbreviation"
        }, "scrambled it to make"), "\n                                    a type specimen book.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-6 "
        }, "\n                                ", HTML.P("\n                                    It has survived not only ", HTML.EM("five centuries"), ", but also the leap into electronic\n                                    typesetting,\n                                    remaining essentially unchanged. It was 1960s with the release of Letraset sheets\n                                    containing ", HTML.CODE(".loremIpsumClass"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "row m-t-md"
        }, "\n                            ", HTML.DIV({
          "class": "col-lg-3 border-right"
        }, "\n                                ", HTML.P("\n                                    Lorem Ipsum is simply dummy text of the ", HTML.STRONG("printing and typesetting"), "\n                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3 border-right"
        }, "\n                                ", HTML.P("\n                                    It has survived not only ", HTML.EM("five centuries"), ", but also the leap into electronic\n                                    typesetting,\n                                    remaining ", HTML.CODE("essentially"), " unchanged. .loremIpsumClass, and more recently\n                                    with\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3 border-right"
        }, "\n                                ", HTML.P("\n                                    Lorem Ipsum is simply dummy text of the ", HTML.EM("printing and typesetting"), " industry.\n                                    Lorem Ipsum has been the industry's standard dummy text ever since.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "col-lg-3 "
        }, "\n                                ", HTML.P("\n                                    It has survived not only ", HTML.EM("five centuries"), ", typesetting,\n                                    remaining essentially unchanged. the release of Letraset sheets containing\n                                    loremIpsumClass, and more recently with\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Unstyled list")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.UL({
          "class": "unstyled"
        }, "\n                            ", HTML.LI("But I must explain"), "\n                            ", HTML.LI("To you how all this mistaken"), "\n                            ", HTML.LI("Idea of denouncing pleasure"), "\n                            ", HTML.LI("Great explorer of the truth"), "\n                            ", HTML.LI("To take a trivial example\n                                ", HTML.UL("\n                                    ", HTML.LI("Or one who avoids a pain"), "\n                                    ", HTML.LI("Indignation and dislike men"), "\n                                    ", HTML.LI("Nor again is there anyone"), "\n                                    ", HTML.LI("But who has any right"), "\n                                "), "\n                            "), "\n                            ", HTML.LI("That they cannot foresee"), "\n                            ", HTML.LI("Who avoids a pain that produceg"), "\n                            ", HTML.LI("Consequences that are extremely"), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Unordered list")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.UL("\n                            ", HTML.LI("But I must explain"), "\n                            ", HTML.LI("To you how all this mistaken"), "\n                            ", HTML.LI("Idea of denouncing pleasure"), "\n                            ", HTML.LI("Great explorer of the truth"), "\n                            ", HTML.LI("To take a trivial example\n                                ", HTML.UL("\n                                    ", HTML.LI("Or one who avoids a pain"), "\n                                    ", HTML.LI("Indignation and dislike men"), "\n                                    ", HTML.LI("Nor again is there anyone"), "\n                                    ", HTML.LI("But who has any right"), "\n                                "), "\n                            "), "\n                            ", HTML.LI("That they cannot foresee"), "\n                            ", HTML.LI("Who avoids a pain that produceg"), "\n                            ", HTML.LI("Consequences that are extremely"), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Ordered list")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.OL("\n                            ", HTML.LI("But I must explain"), "\n                            ", HTML.LI("To you how all this mistaken"), "\n                            ", HTML.LI("Idea of denouncing pleasure"), "\n                            ", HTML.LI("Great explorer of the truth"), "\n                            ", HTML.LI("To take a trivial example\n                                ", HTML.OL("\n                                    ", HTML.LI("Or one who avoids a pain"), "\n                                    ", HTML.LI("Indignation and dislike men"), "\n                                    ", HTML.LI("Nor again is there anyone"), "\n                                    ", HTML.LI("But who has any right"), "\n                                "), "\n                            "), "\n                            ", HTML.LI("That they cannot foresee"), "\n                            ", HTML.LI("Who avoids a pain that produceg"), "\n                            ", HTML.LI("Consequences that are extremely"), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Emphasis Classes")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P({
          "class": "text-muted"
        }, "This is an example of muted text."), "\n\n                        ", HTML.P({
          "class": "text-primary"
        }, "This is an example of primary text."), "\n\n                        ", HTML.P({
          "class": "text-success"
        }, "This is an example of success text."), "\n\n                        ", HTML.P({
          "class": "text-info"
        }, "This is an example of info text."), "\n\n                        ", HTML.P({
          "class": "text-warning"
        }, "This is an example of warning text."), "\n\n                        ", HTML.P({
          "class": "text-danger"
        }, "This is an example of danger text."), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Blockquotes")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.BLOCKQUOTE("\n                            ", HTML.P("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a printing\n                                and typesetting ante."), "\n                            ", HTML.SMALL(HTML.STRONG("Author name"), " in ", HTML.CITE({
          title: "",
          "data-original-title": ""
        }, "Book\n                                name")), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Alignment")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P({
          "class": "text-left"
        }, HTML.STRONG("LEFT"), HTML.BR(), "Lorem Ipsum is simply dummy text of the printing\n                            and typesetting industry."), "\n\n                        ", HTML.P({
          "class": "text-center"
        }, HTML.STRONG("CENTER"), HTML.BR(), "It is a long established fact that a reader\n                            will be distracted by the readable content."), "\n\n                        ", HTML.P({
          "class": "text-right"
        }, HTML.STRONG("RIGHT"), HTML.BR(), "There are many variations of passages of Lorem\n                            Ipsum available, but the majority have."), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Description")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DL("\n                            ", HTML.DT("Description lists"), "\n                            ", HTML.DD("A description list is perfect for defining terms."), "\n                            ", HTML.DT("Euismod"), "\n                            ", HTML.DD("Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), "\n                            ", HTML.DD("Donec id elit non mi porta gravida at eget metus."), "\n                            ", HTML.DT("Malesuada porta"), "\n                            ", HTML.DD("Etiam porta sem malesuada magna mollis euismod."), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Horizontal description")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DL({
          "class": "dl-horizontal"
        }, "\n                            ", HTML.DT("Description lists"), "\n                            ", HTML.DD("A description list is perfect for defining terms."), "\n                            ", HTML.DT("Euismod"), "\n                            ", HTML.DD("Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."), "\n                            ", HTML.DD("Donec id elit non mi porta gravida at eget metus."), "\n                            ", HTML.DT("Malesuada porta"), "\n                            ", HTML.DD("Etiam porta sem malesuada magna mollis euismod."), "\n                            ", HTML.DT("Felis euismod semper eget lacinia"), "\n                            ", HTML.DD("Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum\n                                massa justo sit amet risus.\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Grouped Lists"),
        bodyClass: Spacebars.call("no-padding")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "list-group "
        }, "\n                            ", HTML.A({
          "class": "list-group-item active",
          href: ""
        }, "\n                                ", HTML.H5({
          "class": "list-group-item-heading"
        }, "A wonderful serenity has taken"), "\n\n                                ", HTML.P({
          "class": "list-group-item-text"
        }, "I am alone, and feel the charm of existence in this\n                                    spot, which was created for the bliss of souls like mine. "), "\n                            "), "\n                            ", HTML.A({
          "class": "list-group-item",
          href: ""
        }, "\n                                ", HTML.H5({
          "class": "list-group-item-heading"
        }, "Why painful the sixteen how minuter"), "\n\n                                ", HTML.P({
          "class": "list-group-item-text"
        }, "I throw myself down among the tall grass by the\n                                    trickling stream; and, as I lie close to the earth, a thousand unknown plants are\n                                    noticed "), "\n                            "), "\n                            ", HTML.A({
          "class": "list-group-item",
          href: ""
        }, "\n                                ", HTML.H5({
          "class": "list-group-item-heading"
        }, "Barton waited twenty always repair"), "\n\n                                ", HTML.P({
          "class": "list-group-item-text"
        }, "I never was a greater artist than now. When, while the\n                                    lovely valley teems with vapour around me, and the meridian sun "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-8"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Special css class")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n\n                        ", HTML.TABLE({
          "class": "table"
        }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example text\n                                "), "\n                                ", HTML.TD("\n                                    Class name\n                                "), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "font-light"
        }, "Light"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(".font-light"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "font-normal"
        }, "Normal"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(".font-normal"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "font-bold"
        }, "Bold"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(".font-bold"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "font-extra-bold"
        }, "Extra bold"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(".font-extra-bold"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "font-uppercase"
        }, "Uppercase"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(".font-uppercase"), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
          "class": "font-trans"
        }, "Transparent"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(".font-trans"), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
