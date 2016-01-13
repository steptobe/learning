(function(){
Template.__checkName("project");
Template["project"] = new Template("Template.project", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Project detail"),
      desc: Spacebars.call("Special page for project detail."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV({
      "class": "row"
    }, "\n\n            ", HTML.DIV({
      "class": "col-md-8"
    }, "\n\n                ", HTML.DIV({
      "class": "font-bold m-b-sm"
    }, "\n                    Project details\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.DIV({
      "class": "pull-right"
    }, "\n                            ", HTML.BUTTON({
      "class": "btn btn-success btn-xs"
    }, "  Active"), "\n                            ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " ", HTML.I({
      "class": "fa fa-pencil"
    }), " Edit"), "\n                        "), "\n                        ", HTML.H2({
      "class": "m-t-none"
    }, "Common project "), "\n                        ", HTML.SMALL("\n                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of\n                            spring which I enjoy with my whole heart.\n                            I am alone, and feel the charm of existence in this spot, which was created for the bliss of\n                            souls like mine.\n                        "), "\n                        ", HTML.DIV({
      "class": "small m-t-xs"
    }, "\n                            ", HTML.STRONG("Create by:"), " Anthony Novic", HTML.BR(), "\n                            ", HTML.STRONG("Client:"), " Nordic Company Walking\n                        "), "\n\n\n\n                        ", HTML.DIV({
      "class": "m-t-md"
    }, "\n                            ", HTML.CANVAS({
      id: "lineOptions",
      height: "60"
    }), "\n                        "), "\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel"
    }, "\n\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.P("\n                            ", HTML.STRONG("These sweet mornings of spring"), " which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.\n                        "), "\n\n                        ", HTML.DIV({
      "class": "table-responsive"
    }, "\n                            ", HTML.TABLE({
      "class": "table table-hover table-bordered table-striped"
    }, "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-success"
    }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Message\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            This is issue with the coresponding note\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Adrian Novak\n                                    "), "\n                                    ", HTML.TD("\n                                        12.02.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-info"
    }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Call\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            Desktop publishing packages and web page editors now use Lorem Ipsum as their default model text\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anna Smith\n                                    "), "\n                                    ", HTML.TD("\n                                        10.02.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-success"
    }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Message\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            It is a long established fact that a reader will be\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anthony Jackson\n                                    "), "\n                                    ", HTML.TD("\n                                        02.03.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-info"
    }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Message\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Monica Proven\n                                    "), "\n                                    ", HTML.TD("\n                                        01.10.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-info"
    }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Meeting\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            Always free from repetition, injected humour, or non-characteristic words etc.\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Alex Ferguson\n                                    "), "\n                                    ", HTML.TD("\n                                        28.11.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-success"
    }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Message\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL('\n                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit am\n                                        '), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Mark Conor\n                                    "), "\n                                    ", HTML.TD("\n                                        18.09.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-success"
    }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Call\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL('\n                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit am\n                                        '), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Carol Jackson\n                                    "), "\n                                    ", HTML.TD("\n                                        11.03.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-success"
    }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Message\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            Content here, content here', making it look like readable English. Many desktop\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Carol Jackson\n                                    "), "\n                                    ", HTML.TD("\n                                        05.04.2015\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-info"
    }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Meeting\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            Virginia, looked up one of the more obscure Latin words, consectetur\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Monica Smith\n                                    "), "\n                                    ", HTML.TD("\n                                        10.06.2014\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
      "class": "label label-success"
    }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
      "class": "issue-info"
    }, "\n                                        ", HTML.A({
      href: "#"
    }, "\n                                            Meeting\n                                        "), "\n                                        ", HTML.BR(), "\n                                        ", HTML.SMALL("\n                                            Injected humour, or randomised words which don't l\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anna Johnson\n                                    "), "\n                                    ", HTML.TD("\n                                        13.05.2014\n                                    "), "\n                                    ", HTML.TD({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-xs"
    }, " Action"), "\n                                    "), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "col-md-4"
    }, "\n\n                ", HTML.DIV({
      "class": "font-bold m-b-sm"
    }, "\n                    Project statistics\n                "), "\n\n                ", HTML.DIV({
      "class": "hpanel stats"
    }, "\n                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n\n                        ", HTML.DIV("\n                            ", HTML.I({
      "class": "pe-7s-cash fa-4x"
    }), "\n                            ", HTML.H1({
      "class": "m-xs text-success"
    }, "$1 208,20"), "\n                        "), "\n\n                        ", HTML.P("\n                            ", HTML.STRONG("Existence of spring"), " and feel the charm of existence in this spot, which was created for the bliss of souls like mine.\n                        "), "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-6"
    }, "\n                                ", HTML.SMALL({
      "class": "stat-label"
    }, "Today"), "\n                                ", HTML.H4("$170,20 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-xs-6"
    }, "\n                                ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                ", HTML.H4("$580,90 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "row"
    }, "\n                            ", HTML.DIV({
      "class": "col-xs-6"
    }, "\n                                ", HTML.SMALL({
      "class": "stat-label"
    }, "Today"), "\n                                ", HTML.H4("$620,20 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                            "), "\n                            ", HTML.DIV({
      "class": "col-xs-6"
    }, "\n                                ", HTML.SMALL({
      "class": "stat-label"
    }, "Last week"), "\n                                ", HTML.H4("$140,70 ", HTML.I({
      "class": "fa fa-level-up text-success"
    })), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n                ", HTML.DIV({
      "class": "font-bold m-b-sm"
    }, "\n                    Project participants\n                "), "\n\n                ", HTML.DIV({
      "class": "row"
    }, "\n                    ", HTML.DIV({
      "class": "col-md-6"
    }, "\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a1.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("Mark Newon"), "\n                                    ", HTML.P({
      "class": "small"
    }, "UI Designer"), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a2.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("Anna Smith"), "\n                                    ", HTML.P({
      "class": "small"
    }, "JS Developer"), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a3.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("John Smith"), "\n                                    ", HTML.P({
      "class": "small"
    }, "CEO X company"), "\n                                "), "\n                            "), "\n                        "), "\n\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a1.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("Max Simson"), "\n                                    ", HTML.P({
      "class": "small"
    }, "UI Designer"), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                    ", HTML.DIV({
      "class": "col-md-6"
    }, "\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a4.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("Anna Novak"), "\n                                    ", HTML.P({
      "class": "small"
    }, "UX Designer"), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a5.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("Michael Smith"), "\n                                    ", HTML.P({
      "class": "small"
    }, "JAVA Developer"), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a6.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("Max Simson"), "\n                                    ", HTML.P({
      "class": "small"
    }, "UI Designer"), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "hpanel"
    }, "\n                            ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                ", HTML.IMG({
      alt: "logo",
      "class": "img-circle img-small",
      src: "images/a7.jpg"
    }), "\n                                ", HTML.DIV({
      "class": "m-t-sm"
    }, "\n                                    ", HTML.STRONG("John Smith"), "\n                                    ", HTML.P({
      "class": "small"
    }, "CEO X company"), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), "\n\n    " ];
  }) ];
}));

})();
