(function(){
Template.__checkName("appPlans");
Template["appPlans"] = new Template("Template.appPlans", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("App plans"),
      desc: Spacebars.call("Present pricing option for your app"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n\n                    ", HTML.DIV({
      "class": "text-center m-b-xl"
    }, "\n                        ", HTML.H3("Best pricing for your app"), "\n\n                        ", HTML.P("\n                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' and web page editors now use Lorem Ipsum as their default model text, will uncover many web sites still in their infancy.\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
      "class": "row"
    }, "\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box hyellow"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Basic plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n                                    ", HTML.TABLE({
      "class": "table"
    }, "\n                                        ", HTML.THEAD("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                Features\n                                            "), "\n                                        "), "\n                                        "), "\n                                        ", HTML.TBODY("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Dashboard\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Project view\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Contacts\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-square-o"
    }), " Calendar\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-square-o"
    }), " AngularJS version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-square-o"
    }), " Meteor version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-square-o"
    }), " Support\n                                            "), "\n                                        "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n\n                                    ", HTML.H3({
      "class": "font-bold"
    }, "\n                                        $10/month\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-warning btn-sm m-t-xs"
    }, "Select plan"), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box hgreen active"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Standard plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n                                    ", HTML.TABLE({
      "class": "table"
    }, "\n                                        ", HTML.THEAD("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                Features\n                                            "), "\n                                        "), "\n                                        "), "\n                                        ", HTML.TBODY("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Dashboard\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Project view\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Contacts\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Calendar\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " AngularJS version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-square-o"
    }), " Meteor version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-square-o"
    }), " Support\n                                            "), "\n                                        "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n\n                                    ", HTML.H3({
      "class": "font-bold"
    }, "\n                                        $20/month\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-success btn-sm m-t-xs"
    }, "Select plan"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box hblue"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Premium plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n                                    ", HTML.TABLE({
      "class": "table"
    }, "\n                                        ", HTML.THEAD("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                Features\n                                            "), "\n                                        "), "\n                                        "), "\n                                        ", HTML.TBODY("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Dashboard\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Project view\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Contacts\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Calendar\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " AngularJS version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Meteor version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-square-o"
    }), " Support\n                                            "), "\n                                        "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n\n                                    ", HTML.H3({
      "class": "font-bold"
    }, "\n                                        $30/month\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-info btn-sm m-t-xs"
    }, "Select plan"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box hred"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Prestige plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n                                    ", HTML.TABLE({
      "class": "table"
    }, "\n                                        ", HTML.THEAD("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                Features\n                                            "), "\n                                        "), "\n                                        "), "\n                                        ", HTML.TBODY("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Dashboard\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Project view\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Contacts\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Calendar\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " AngularJS version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Meteor version\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.I({
      "class": "fa fa-check-square-o"
    }), " Support\n                                            "), "\n                                        "), "\n                                        "), "\n                                    "), "\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        Lorem ipsum dolor sit amet, illum fastidii dissentias quo ne. Sea ne sint animal iisque, nam an soluta sensibus.\n                                    "), "\n\n                                    ", HTML.H3({
      "class": "font-bold"
    }, "\n                                        $40/month\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-danger btn-sm m-t-xs"
    }, "Select plan"), "\n                                "), "\n                            "), "\n                        "), "\n\n\n                    "), "\n\n                    ", HTML.HR({
      "class": "m-b-xl"
    }), "\n\n                    ", HTML.DIV({
      "class": "row"
    }, "\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Basic plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                    ", HTML.I({
      "class": "pe pe-7s-cup big-icon text-warning"
    }), "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "\n                                        $10/month\n                                    "), "\n\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-warning btn-sm"
    }, "Select basic plan"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box active"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Standard plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                    ", HTML.I({
      "class": "pe pe-7s-science big-icon text-success"
    }), "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "\n                                        $20/month\n                                    "), "\n\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-success btn-sm"
    }, "Select standard plan"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Premium plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                    ", HTML.I({
      "class": "pe pe-7s-refresh-cloud big-icon text-info"
    }), "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "\n                                        $30/month\n                                    "), "\n\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-info btn-sm"
    }, "Select premium plan"), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "col-sm-3"
    }, "\n                            ", HTML.DIV({
      "class": "hpanel plan-box"
    }, "\n                                ", HTML.DIV({
      "class": "panel-heading hbuilt text-center"
    }, "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "Prestige plan"), "\n                                "), "\n                                ", HTML.DIV({
      "class": "panel-body text-center"
    }, "\n                                    ", HTML.I({
      "class": "pe pe-7s-server big-icon text-danger"
    }), "\n                                    ", HTML.H4({
      "class": "font-bold"
    }, "\n                                        $40/month\n                                    "), "\n\n                                    ", HTML.P({
      "class": "text-muted"
    }, "\n                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.\n                                    "), "\n                                    ", HTML.A({
      href: "#",
      "class": "btn btn-danger btn-sm"
    }, "Select prestige plan"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                "), "\n            "), "\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
