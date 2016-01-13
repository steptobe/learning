(function(){
Template.__checkName("forum");
Template["forum"] = new Template("Template.forum", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Forum"),
      desc: Spacebars.call("Topics board for forum page."),
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
      "class": "col-lg-12"
    }, "\n\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "text-muted small pull-right text-right"
    }, "\n                            Proin eu tempus tortor, vitae bibendum est. Nam placerat hendrerit rhoncus", HTML.BR(), "\n                            Last modyfication by: ", HTML.SPAN({
      "class": "font-bold"
    }, "Mike Smith"), "\n                            21.03.2015, 06:45 pm\n                        "), "\n                        ", HTML.DIV({
      "class": "form-inline"
    }, "\n                            Search topic: ", HTML.INPUT({
      "class": "form-control",
      type: "text"
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "hpanel forum-box"
    }, "\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-clock-o"
    }, " "), " Last modification: 10.12.2015, 10:22 am\n                "), "\n                        General topics\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n\n                                ", HTML.SPAN({
      "class": "label label-success pull-left"
    }, "Special"), "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4(" General Discussion")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Suspendisse egestas risus quis sem ultricies venenatis. Phasellus\n                                    maximus tortor ut augue accumsan, sed posuere dolor tincidunt. In hac habitasse\n                                    platea dictumst.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 4780 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 150 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4("Introductions")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Mauris feugiat ante vitae euismod vestibulum. Suspendisse id\n                                    ullamcorper odio, ut tristique ante. In scelerisque dolor in mi condimentum\n                                    consequat.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 260 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 149 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel forum-box"
    }, "\n\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-clock-o"
    }, " "), " Last modification: 11.10.2015, 08:10 am\n                "), "\n                        Nunc eu luctus neque.\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.SPAN({
      "class": "label label-warning pull-left"
    }, "New"), "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, "\n                                    ", HTML.H4("Morbi aliquam aliquam"), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Morbi aliquam aliquam erat, id iaculis dui maximus vel. Curabitur\n                                    dolor leo, tempus sit amet rutrum nec, luctus vel nisl. Nam sollicitudin quam non\n                                    arcu faucibus, id mattis lacus interdum. Nam eleifend sodales ante sed pharetra.\n                                    Integer cursus dapibus fringilla.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 2451 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 100 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.SPAN({
      "class": "label label-warning pull-left"
    }, "New"), "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4("Quisque ultrices ")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Vestibulum scelerisque semper ligula ac consectetur. Proin tincidunt\n                                    dui ac quam mollis eleifend.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 5699 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 114 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel forum-box"
    }, "\n\n                    ", HTML.DIV({
      "class": "panel-heading"
    }, "\n                ", HTML.SPAN({
      "class": "pull-right"
    }, "\n                    ", HTML.I({
      "class": "fa fa-clock-o"
    }, " "), " Last modification: 01.03.2015, 11:10 am\n                "), "\n                        Aenean vitae\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, "\n                                    ", HTML.H4("Pellentesque rhoncus "), "\n                                "), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Pellentesque habitant morbi tristique senectus et netus et malesuada\n                                    fames ac turpis egestas.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 1200 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 457 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4("Sed iaculis vel libero")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Nam sollicitudin quam non arcu faucibus, id mattis lacus interdum. Nam\n                                    eleifend sodales ante sed pharetra. Integer cursus dapibus fringilla. Maecenas\n                                    volutpat dapibus vestibulum. Mauris ullamcorper nibh nec consectetur fermentum.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 460 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 280 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.SPAN({
      "class": "label label-info pull-left"
    }, "Latest"), "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4("Mauris fermentum ")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Aenean ornare lacus quis blandit posuere. Nulla porta lectus facilisis\n                                    justo pharetra, nec varius felis sollicitudin.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 870 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 621 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4("Vivamus non lacus diam.")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Aenean quis nulla finibus, lobortis nunc sit amet, tempor ligula. Nunc\n                                    pharetra, mauris aliquet mollis semper, libero eros mattis eros, sit amet semper\n                                    elit libero in leo. In porttitor quam sit amet felis congue aliquam. Ut commodo\n                                    aliquam consectetur. In hac habitasse platea dictumst.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 278 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 455 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4("Donec lacus dolor")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Nullam ipsum diam, tempus at pretium id, posuere rutrum urna. Sed et\n                                    eros vitae magna condimentum semper sed vel enim.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 780 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 120 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-md-10 forum-heading"
    }, "\n                                ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "forumDetails"
        }));
      }
    }, HTML.H4("Fusce sagittis")), "\n\n                                ", HTML.DIV({
      "class": "desc"
    }, "Duis sed enim velit. In auctor porta lorem, nec viverra risus faucibus\n                                    at. Nulla sagittis eros id nibh vulputate, id malesuada nunc ultrices.\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 824 "), "\n                                ", HTML.SMALL("Views"), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-md-1 forum-info"
    }, "\n                                ", HTML.SPAN({
      "class": "number"
    }, " 266 "), "\n                                ", HTML.SMALL("Posts"), "\n                            "), "\n                        "), "\n                    "), "\n\n                "), "\n\n\n            "), "\n        "), "\n    "), "\n\n    " ];
  }) ];
}));

})();
