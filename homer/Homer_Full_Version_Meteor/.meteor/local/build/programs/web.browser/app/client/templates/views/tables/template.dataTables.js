(function(){
Template.__checkName("dataTables");
Template["dataTables"] = new Template("Template.dataTables", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("DataTables"),
      desc: Spacebars.call("Advanced interaction controls to any HTML table"),
      category: Spacebars.call("Tables")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n        ", HTML.DIV({
      "class": "row"
    }, "\n            ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Standard table")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                    ", HTML.TABLE({
          id: "example1",
          "class": "table table-striped table-bordered table-hover"
        }, "\n                        ", HTML.THEAD("\n                        ", HTML.TR("\n                            ", HTML.TH("Name"), "\n                            ", HTML.TH("Position"), "\n                            ", HTML.TH("Office"), "\n                            ", HTML.TH("Age"), "\n                            ", HTML.TH("Start date"), "\n                            ", HTML.TH("Salary"), "\n                        "), "\n                        "), "\n                        ", HTML.TBODY("\n                        ", HTML.TR("\n                            ", HTML.TD("Tiger Nixon"), "\n                            ", HTML.TD("System Architect"), "\n                            ", HTML.TD("Edinburgh"), "\n                            ", HTML.TD("61"), "\n                            ", HTML.TD("2011/04/25"), "\n                            ", HTML.TD("$320,800"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Garrett Winters"), "\n                            ", HTML.TD("Accountant"), "\n                            ", HTML.TD("Tokyo"), "\n                            ", HTML.TD("63"), "\n                            ", HTML.TD("2011/07/25"), "\n                            ", HTML.TD("$170,750"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Ashton Cox"), "\n                            ", HTML.TD("Junior Technical Author"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("66"), "\n                            ", HTML.TD("2009/01/12"), "\n                            ", HTML.TD("$86,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Cedric Kelly"), "\n                            ", HTML.TD("Senior Javascript Developer"), "\n                            ", HTML.TD("Edinburgh"), "\n                            ", HTML.TD("22"), "\n                            ", HTML.TD("2012/03/29"), "\n                            ", HTML.TD("$433,060"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Airi Satou"), "\n                            ", HTML.TD("Accountant"), "\n                            ", HTML.TD("Tokyo"), "\n                            ", HTML.TD("33"), "\n                            ", HTML.TD("2008/11/28"), "\n                            ", HTML.TD("$162,700"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Brielle Williamson"), "\n                            ", HTML.TD("Integration Specialist"), "\n                            ", HTML.TD("New York"), "\n                            ", HTML.TD("61"), "\n                            ", HTML.TD("2012/12/02"), "\n                            ", HTML.TD("$372,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Herrod Chandler"), "\n                            ", HTML.TD("Sales Assistant"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("59"), "\n                            ", HTML.TD("2012/08/06"), "\n                            ", HTML.TD("$137,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Rhona Davidson"), "\n                            ", HTML.TD("Integration Specialist"), "\n                            ", HTML.TD("Tokyo"), "\n                            ", HTML.TD("55"), "\n                            ", HTML.TD("2010/10/14"), "\n                            ", HTML.TD("$327,900"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Colleen Hurst"), "\n                            ", HTML.TD("Javascript Developer"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("39"), "\n                            ", HTML.TD("2009/09/15"), "\n                            ", HTML.TD("$205,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Sonya Frost"), "\n                            ", HTML.TD("Software Engineer"), "\n                            ", HTML.TD("Edinburgh"), "\n                            ", HTML.TD("23"), "\n                            ", HTML.TD("2008/12/13"), "\n                            ", HTML.TD("$103,600"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Jena Gaines"), "\n                            ", HTML.TD("Office Manager"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("30"), "\n                            ", HTML.TD("2008/12/19"), "\n                            ", HTML.TD("$90,560"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Quinn Flynn"), "\n                            ", HTML.TD("Support Lead"), "\n                            ", HTML.TD("Edinburgh"), "\n                            ", HTML.TD("22"), "\n                            ", HTML.TD("2013/03/03"), "\n                            ", HTML.TD("$342,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Charde Marshall"), "\n                            ", HTML.TD("Regional Director"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("36"), "\n                            ", HTML.TD("2008/10/16"), "\n                            ", HTML.TD("$470,600"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Haley Kennedy"), "\n                            ", HTML.TD("Senior Marketing Designer"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("43"), "\n                            ", HTML.TD("2012/12/18"), "\n                            ", HTML.TD("$313,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Tatyana Fitzpatrick"), "\n                            ", HTML.TD("Regional Director"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("19"), "\n                            ", HTML.TD("2010/03/17"), "\n                            ", HTML.TD("$385,750"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Michael Silva"), "\n                            ", HTML.TD("Marketing Designer"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("66"), "\n                            ", HTML.TD("2012/11/27"), "\n                            ", HTML.TD("$198,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Paul Byrd"), "\n                            ", HTML.TD("Chief Financial Officer (CFO)"), "\n                            ", HTML.TD("New York"), "\n                            ", HTML.TD("64"), "\n                            ", HTML.TD("2010/06/09"), "\n                            ", HTML.TD("$725,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Gloria Little"), "\n                            ", HTML.TD("Systems Administrator"), "\n                            ", HTML.TD("New York"), "\n                            ", HTML.TD("59"), "\n                            ", HTML.TD("2009/04/10"), "\n                            ", HTML.TD("$237,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Bradley Greer"), "\n                            ", HTML.TD("Software Engineer"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("41"), "\n                            ", HTML.TD("2012/10/13"), "\n                            ", HTML.TD("$132,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Dai Rios"), "\n                            ", HTML.TD("Personnel Lead"), "\n                            ", HTML.TD("Edinburgh"), "\n                            ", HTML.TD("35"), "\n                            ", HTML.TD("2012/09/26"), "\n                            ", HTML.TD("$217,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Jenette Caldwell"), "\n                            ", HTML.TD("Development Lead"), "\n                            ", HTML.TD("New York"), "\n                            ", HTML.TD("30"), "\n                            ", HTML.TD("2011/09/03"), "\n                            ", HTML.TD("$345,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Yuri Berry"), "\n                            ", HTML.TD("Chief Marketing Officer (CMO)"), "\n                            ", HTML.TD("New York"), "\n                            ", HTML.TD("40"), "\n                            ", HTML.TD("2009/06/25"), "\n                            ", HTML.TD("$675,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Caesar Vance"), "\n                            ", HTML.TD("Pre-Sales Support"), "\n                            ", HTML.TD("New York"), "\n                            ", HTML.TD("21"), "\n                            ", HTML.TD("2011/12/12"), "\n                            ", HTML.TD("$106,450"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Doris Wilder"), "\n                            ", HTML.TD("Sales Assistant"), "\n                            ", HTML.TD("Sidney"), "\n                            ", HTML.TD("23"), "\n                            ", HTML.TD("2010/09/20"), "\n                            ", HTML.TD("$85,600"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Angelica Ramos"), "\n                            ", HTML.TD("Chief Executive Officer (CEO)"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("47"), "\n                            ", HTML.TD("2009/10/09"), "\n                            ", HTML.TD("$1,200,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Gavin Joyce"), "\n                            ", HTML.TD("Developer"), "\n                            ", HTML.TD("Edinburgh"), "\n                            ", HTML.TD("42"), "\n                            ", HTML.TD("2010/12/22"), "\n                            ", HTML.TD("$92,575"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Jennifer Chang"), "\n                            ", HTML.TD("Regional Director"), "\n                            ", HTML.TD("Singapore"), "\n                            ", HTML.TD("28"), "\n                            ", HTML.TD("2010/11/14"), "\n                            ", HTML.TD("$357,650"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Brenden Wagner"), "\n                            ", HTML.TD("Software Engineer"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("28"), "\n                            ", HTML.TD("2011/06/07"), "\n                            ", HTML.TD("$206,850"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Fiona Green"), "\n                            ", HTML.TD("Chief Operating Officer (COO)"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("48"), "\n                            ", HTML.TD("2010/03/11"), "\n                            ", HTML.TD("$850,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Shou Itou"), "\n                            ", HTML.TD("Regional Marketing"), "\n                            ", HTML.TD("Tokyo"), "\n                            ", HTML.TD("20"), "\n                            ", HTML.TD("2011/08/14"), "\n                            ", HTML.TD("$163,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Michelle House"), "\n                            ", HTML.TD("Integration Specialist"), "\n                            ", HTML.TD("Sidney"), "\n                            ", HTML.TD("37"), "\n                            ", HTML.TD("2011/06/02"), "\n                            ", HTML.TD("$95,400"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Suki Burks"), "\n                            ", HTML.TD("Developer"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("53"), "\n                            ", HTML.TD("2009/10/22"), "\n                            ", HTML.TD("$114,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Prescott Bartlett"), "\n                            ", HTML.TD("Technical Author"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("27"), "\n                            ", HTML.TD("2011/05/07"), "\n                            ", HTML.TD("$145,000"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Gavin Cortez"), "\n                            ", HTML.TD("Team Leader"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("22"), "\n                            ", HTML.TD("2008/10/26"), "\n                            ", HTML.TD("$235,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Martena Mccray"), "\n                            ", HTML.TD("Post-Sales support"), "\n                            ", HTML.TD("Edinburgh"), "\n                            ", HTML.TD("46"), "\n                            ", HTML.TD("2011/03/09"), "\n                            ", HTML.TD("$324,050"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Unity Butler"), "\n                            ", HTML.TD("Marketing Designer"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("47"), "\n                            ", HTML.TD("2009/12/09"), "\n                            ", HTML.TD("$85,675"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Howard Hatfield"), "\n                            ", HTML.TD("Office Manager"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("51"), "\n                            ", HTML.TD("2008/12/16"), "\n                            ", HTML.TD("$164,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Hope Fuentes"), "\n                            ", HTML.TD("Secretary"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("41"), "\n                            ", HTML.TD("2010/02/12"), "\n                            ", HTML.TD("$109,850"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Vivian Harrell"), "\n                            ", HTML.TD("Financial Controller"), "\n                            ", HTML.TD("San Francisco"), "\n                            ", HTML.TD("62"), "\n                            ", HTML.TD("2009/02/14"), "\n                            ", HTML.TD("$452,500"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Timothy Mooney"), "\n                            ", HTML.TD("Office Manager"), "\n                            ", HTML.TD("London"), "\n                            ", HTML.TD("37"), "\n                            ", HTML.TD("2008/12/11"), "\n                            ", HTML.TD("$136,200"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Jackson Bradshaw"), "\n                            ", HTML.TD("Director"), "\n                            ", HTML.TD("New York"), "\n                            ", HTML.TD("65"), "\n                            ", HTML.TD("2008/09/26"), "\n                            ", HTML.TD("$645,750"), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("Olivia Liang"), "\n                            ", HTML.TD("Support Engineer"), "\n                            ", HTML.TD("Singapore"), "\n                            ", HTML.TD("64"), "\n                            ", HTML.TD("2011/02/03"), "\n                            ", HTML.TD("$234,500"), "\n                        "), "\n                        "), "\n                    "), "\n                " ];
      });
    }), "\n            "), "\n\n        "), "\n    "), "\n\n    " ];
  }) ];
}));

})();
