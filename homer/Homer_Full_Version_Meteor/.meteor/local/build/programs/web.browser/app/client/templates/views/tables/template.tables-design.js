(function(){
Template.__checkName("tablesDesign");
Template["tablesDesign"] = new Template("Template.tablesDesign", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Tables design"),
      desc: Spacebars.call("Examples of various designs of tables."),
      category: Spacebars.call("Tables")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-8"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("This is a basic table design"),
        footer: Spacebars.call("Table - 6 rows")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "table-responsive"
        }, "\n                            ", HTML.TABLE({
          cellpadding: "1",
          cellspacing: "1",
          "class": "table"
        }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH("Name"), "\n                                    ", HTML.TH("Phone"), "\n                                    ", HTML.TH("Street Address"), "\n                                    ", HTML.TH("City"), "\n                                    ", HTML.TH("Country"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("Abraham"), "\n                                    ", HTML.TD("076 9477 4896"), "\n                                    ", HTML.TD("294-318 Duis Ave"), "\n                                    ", HTML.TD("Vosselaar"), "\n                                    ", HTML.TD("Belgium"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Phelan"), "\n                                    ", HTML.TD("0500 034548"), "\n                                    ", HTML.TD("680-1097 Mi Rd."), "\n                                    ", HTML.TD("Lavoir"), "\n                                    ", HTML.TD("Pakistan"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Raya"), "\n                                    ", HTML.TD("(01315) 27698"), "\n                                    ", HTML.TD("Ap #289-8161 In Avenue"), "\n                                    ", HTML.TD("Santomenna"), "\n                                    ", HTML.TD("Burkina Faso"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Azalia"), "\n                                    ", HTML.TD("0500 854198"), "\n                                    ", HTML.TD("226-4861 Augue. St."), "\n                                    ", HTML.TD("Newtown"), "\n                                    ", HTML.TD("Christmas Island"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Garth"), "\n                                    ", HTML.TD("(01662) 59083"), "\n                                    ", HTML.TD("3219 Elit Avenue"), "\n                                    ", HTML.TD("Ternitz"), "\n                                    ", HTML.TD("Saint Martin"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Selma"), "\n                                    ", HTML.TD("0877 118 6905"), "\n                                    ", HTML.TD("P.O. Box 410, 7331 Nec, St."), "\n                                    ", HTML.TD("Glenrothes"), "\n                                    ", HTML.TD("Korea, North"), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("This is a condensed basic table"),
        footer: Spacebars.call("Table - 5 rows")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "table-responsive"
        }, "\n                            ", HTML.TABLE({
          cellpadding: "1",
          cellspacing: "1",
          "class": "table table-condensed"
        }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH("Name"), "\n                                    ", HTML.TH("Phone"), "\n                                    ", HTML.TH("Street"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("Henry"), "\n                                    ", HTML.TD("Purus Gravida Sagittis Limited"), "\n                                    ", HTML.TD("055 1753 4032"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Shelly"), "\n                                    ", HTML.TD("Posuere Enim Inc."), "\n                                    ", HTML.TD("0313 143 2317"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Edan"), "\n                                    ", HTML.TD("Quisque Imperdiet Company"), "\n                                    ", HTML.TD("076 1743 8649"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Sophia"), "\n                                    ", HTML.TD("Quam Incorporated"), "\n                                    ", HTML.TD("0863 826 7513"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Griffith"), "\n                                    ", HTML.TD("Tempor Erat Corp."), "\n                                    ", HTML.TD("0845 46 45"), "\n                                "), "\n\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("This is a striped table design"),
        footer: Spacebars.call("Table - 5 rows")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "table-responsive"
        }, "\n                            ", HTML.TABLE({
          cellpadding: "1",
          cellspacing: "1",
          "class": "table table-condensed table-striped"
        }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH("Name"), "\n                                    ", HTML.TH("Phone"), "\n                                    ", HTML.TH("Street"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("Henry"), "\n                                    ", HTML.TD("Purus Gravida Sagittis Limited"), "\n                                    ", HTML.TD("055 1753 4032"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Shelly"), "\n                                    ", HTML.TD("Posuere Enim Inc."), "\n                                    ", HTML.TD("0313 143 2317"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Edan"), "\n                                    ", HTML.TD("Quisque Imperdiet Company"), "\n                                    ", HTML.TD("076 1743 8649"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Sophia"), "\n                                    ", HTML.TD("Quam Incorporated"), "\n                                    ", HTML.TD("0863 826 7513"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Griffith"), "\n                                    ", HTML.TD("Tempor Erat Corp."), "\n                                    ", HTML.TD("0845 46 45"), "\n                                "), "\n\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-8"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("This is a bordered striped basic table"),
        footer: Spacebars.call("Table - 6 rows")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "table-responsive"
        }, "\n                            ", HTML.TABLE({
          cellpadding: "1",
          cellspacing: "1",
          "class": "table table-bordered table-striped"
        }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH("Name"), "\n                                    ", HTML.TH("Phone"), "\n                                    ", HTML.TH("Street Address"), "\n                                    ", HTML.TH("City"), "\n                                    ", HTML.TH("Country"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("Abraham"), "\n                                    ", HTML.TD("076 9477 4896"), "\n                                    ", HTML.TD("294-318 Duis Ave"), "\n                                    ", HTML.TD("Vosselaar"), "\n                                    ", HTML.TD("Belgium"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Phelan"), "\n                                    ", HTML.TD("0500 034548"), "\n                                    ", HTML.TD("680-1097 Mi Rd."), "\n                                    ", HTML.TD("Lavoir"), "\n                                    ", HTML.TD("Pakistan"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Raya"), "\n                                    ", HTML.TD("(01315) 27698"), "\n                                    ", HTML.TD("Ap #289-8161 In Avenue"), "\n                                    ", HTML.TD("Santomenna"), "\n                                    ", HTML.TD("Burkina Faso"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Azalia"), "\n                                    ", HTML.TD("0500 854198"), "\n                                    ", HTML.TD("226-4861 Augue. St."), "\n                                    ", HTML.TD("Newtown"), "\n                                    ", HTML.TD("Christmas Island"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Garth"), "\n                                    ", HTML.TD("(01662) 59083"), "\n                                    ", HTML.TD("3219 Elit Avenue"), "\n                                    ", HTML.TD("Ternitz"), "\n                                    ", HTML.TD("Saint Martin"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Selma"), "\n                                    ", HTML.TD("0877 118 6905"), "\n                                    ", HTML.TD("P.O. Box 410, 7331 Nec, St."), "\n                                    ", HTML.TD("Glenrothes"), "\n                                    ", HTML.TD("Korea, North"), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("This is a bordered striped and responsive table"),
        footer: Spacebars.call("Table - 6 rows")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "table-responsive"
        }, "\n                            ", HTML.TABLE({
          cellpadding: "1",
          cellspacing: "1",
          "class": "table table-bordered table-striped"
        }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH("Name"), "\n                                    ", HTML.TH("Phone"), "\n                                    ", HTML.TH("Street Address"), "\n                                    ", HTML.TH("City"), "\n                                    ", HTML.TH("Country"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("Abraham"), "\n                                    ", HTML.TD("076 9477 4896"), "\n                                    ", HTML.TD("294-318 Duis Ave"), "\n                                    ", HTML.TD("Vosselaar"), "\n                                    ", HTML.TD("Belgium"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Phelan"), "\n                                    ", HTML.TD("0500 034548"), "\n                                    ", HTML.TD("680-1097 Mi Rd."), "\n                                    ", HTML.TD("Lavoir"), "\n                                    ", HTML.TD("Pakistan"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Raya"), "\n                                    ", HTML.TD("(01315) 27698"), "\n                                    ", HTML.TD("Ap #289-8161 In Avenue"), "\n                                    ", HTML.TD("Santomenna"), "\n                                    ", HTML.TD("Burkina Faso"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Azalia"), "\n                                    ", HTML.TD("0500 854198"), "\n                                    ", HTML.TD("226-4861 Augue. St."), "\n                                    ", HTML.TD("Newtown"), "\n                                    ", HTML.TD("Christmas Island"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Garth"), "\n                                    ", HTML.TD("(01662) 59083"), "\n                                    ", HTML.TD("3219 Elit Avenue"), "\n                                    ", HTML.TD("Ternitz"), "\n                                    ", HTML.TD("Saint Martin"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("Selma"), "\n                                    ", HTML.TD("0877 118 6905"), "\n                                    ", HTML.TD("P.O. Box 410, 7331 Nec, St."), "\n                                    ", HTML.TD("Glenrothes"), "\n                                    ", HTML.TD("Korea, North"), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
