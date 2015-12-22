(function(){
Template.__checkName("invoice");
Template["invoice"] = new Template("Template.invoice", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Invoice"),
      desc: Spacebars.call("Clean invoice template."),
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
      "class": "col-lg-12"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.DIV({
      "class": "row"
    }, "\n                                ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                                    ", HTML.H4("Invoice ", HTML.SMALL("IN-9177283-2016")), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                                    ", HTML.DIV({
      "class": "text-right"
    }, "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-pencil"
    }), " Edit "), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-default btn-sm"
    }, HTML.I({
      "class": "fa fa-check "
    }), " Save "), "\n                                        ", HTML.BUTTON({
      "class": "btn btn-primary btn-sm"
    }, HTML.I({
      "class": "fa fa-dollar"
    }), " Make A Payment"), "\n                                    "), "\n\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
      "class": "panel-body p-xl"
    }, "\n                            ", HTML.DIV({
      "class": "row m-b-xl"
    }, "\n                                ", HTML.DIV({
      "class": "col-sm-6"
    }, "\n                                    ", HTML.H4("IN-9177283-2016"), "\n\n                                    ", HTML.ADDRESS("\n                                        ", HTML.STRONG("Homer, Inc."), HTML.BR(), "\n                                        30 Mortensen Avenue", HTML.BR(), "\n                                        Salinas, CA 93905", HTML.BR(), "\n                                        ", HTML.ABBR({
      title: "Phone"
    }, "P:"), " (831) 758-7200\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-sm-6 text-right"
    }, "\n                                    ", HTML.SPAN("To:"), "\n                                    ", HTML.ADDRESS("\n                                        ", HTML.STRONG("Corporate, Inc."), HTML.BR(), "\n                                        60 Mortensen Avenue", HTML.BR(), "\n                                        Salinas, CA 123343", HTML.BR(), "\n                                        ", HTML.ABBR({
      title: "Phone"
    }, "P:"), " (831) 752-7000\n                                    "), "\n                                    ", HTML.P("\n                                        ", HTML.SPAN(HTML.STRONG("Invoice Date:"), " May 16, 2016"), HTML.BR(), "\n                                        ", HTML.SPAN(HTML.STRONG("Due Date:"), " May 24, 2016"), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "table-responsive m-t"
    }, "\n                                ", HTML.TABLE({
      "class": "table table-striped"
    }, "\n                                    ", HTML.THEAD("\n                                    ", HTML.TR("\n                                        ", HTML.TH("Item List"), "\n                                        ", HTML.TH("Quantity"), "\n                                        ", HTML.TH("Unit Price"), "\n                                        ", HTML.TH("Tax"), "\n                                        ", HTML.TH("Total Price"), "\n                                    "), "\n                                    "), "\n                                    ", HTML.TBODY("\n                                    ", HTML.TR("\n                                        ", HTML.TD("\n                                            ", HTML.DIV(HTML.STRONG("Lorem Ipsum is that it has a more-or-less normal")), "\n                                            ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                                tempor incididunt ut labore.\n                                            "), "\n                                        "), "\n                                        ", HTML.TD("1"), "\n                                        ", HTML.TD("$26.00"), "\n                                        ", HTML.TD("$5.98"), "\n                                        ", HTML.TD("$31,98"), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("\n                                            ", HTML.DIV(HTML.STRONG("Lorem Ipsum is that it has")), "\n                                            ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua.\n                                                Eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                                            "), "\n                                        "), "\n                                        ", HTML.TD("2"), "\n                                        ", HTML.TD("$80.00"), "\n                                        ", HTML.TD("$36.80"), "\n                                        ", HTML.TD("$196.80"), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("\n                                            ", HTML.DIV(HTML.STRONG("Has a more-or-less normal")), "\n                                            ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua.\n                                            "), "\n                                        "), "\n                                        ", HTML.TD("3"), "\n                                        ", HTML.TD("$420.00"), "\n                                        ", HTML.TD("$193.20"), "\n                                        ", HTML.TD("$1033.20"), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("\n                                            ", HTML.DIV(HTML.STRONG("That it has a more-or-less")), "\n                                            ", HTML.SMALL("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                                tempor incididunt ut labore et dolore magna aliqua.\n                                            "), "\n                                        "), "\n                                        ", HTML.TD("4"), "\n                                        ", HTML.TD("$320.00"), "\n                                        ", HTML.TD("$233.10"), "\n                                        ", HTML.TD("$193.10"), "\n                                    "), "\n\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      "class": "row m-t"
    }, "\n                                ", HTML.DIV({
      "class": "col-md-4 col-md-offset-8"
    }, "\n                                    ", HTML.TABLE({
      "class": "table table-striped text-right"
    }, "\n                                        ", HTML.TBODY("\n                                        ", HTML.TR("\n                                            ", HTML.TD(HTML.STRONG("Sub Total :")), "\n                                            ", HTML.TD("$1026.00"), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD(HTML.STRONG("TAX :")), "\n                                            ", HTML.TD("$235.98"), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD(HTML.STRONG("TOTAL :")), "\n                                            ", HTML.TD("$1261.98"), "\n                                        "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n\n                            ", HTML.DIV({
      "class": "row"
    }, "\n                                ", HTML.DIV({
      "class": "col-md-6"
    }, "\n                                    ", HTML.DIV({
      "class": "m-t"
    }, HTML.STRONG("Comments"), "\n                                        It is a long established fact that a reader will be distracted by the readable content of a page\n                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n                    "), "\n\n                "), "\n            "), "\n\n\n        "), "\n\n    " ];
  }) ];
}));

})();
