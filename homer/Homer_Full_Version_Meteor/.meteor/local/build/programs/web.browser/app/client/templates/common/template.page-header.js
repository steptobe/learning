(function(){
Template.__checkName("pageHeader");
Template["pageHeader"] = new Template("Template.pageHeader", (function() {
  var view = this;
  return HTML.DIV({
    "class": function() {
      return [ "normalheader transition ", Blaze.If(function() {
        return Spacebars.call(view.lookup("small"));
      }, function() {
        return " small-header ";
      }) ];
    }
  }, "\n        ", HTML.DIV({
    "class": "hpanel"
  }, "\n            ", HTML.DIV({
    "class": "panel-body"
  }, "\n                ", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("small"));
  }, function() {
    return [ "\n                    ", HTML.A({
      "class": "small-header-action"
    }, "\n                        ", HTML.DIV({
      "class": "clip-header"
    }, "\n                            ", HTML.I({
      "class": "fa fa-arrow-up"
    }), "\n                        "), "\n                    "), "\n                " ];
  }), "\n\n                ", HTML.DIV({
    id: "hbreadcrumb",
    "class": function() {
      return [ "pull-right ", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("small"));
      }, function() {
        return " m-t-lg ";
      }) ];
    }
  }, "\n                    ", HTML.OL({
    "class": "hbreadcrumb breadcrumb"
  }, "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard"
      }));
    }
  }, "Home")), "\n                        ", HTML.LI("\n                            ", HTML.SPAN(Blaze.View("lookup:category", function() {
    return Spacebars.mustache(view.lookup("category"));
  })), "\n                        "), "\n                        ", HTML.LI({
    "class": "active"
  }, "\n                            ", HTML.SPAN(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.H2({
    "class": "font-light m-b-xs"
  }, "\n                    ", Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  }), "\n                "), "\n                ", HTML.SMALL(Blaze.View("lookup:desc", function() {
    return Spacebars.mustache(view.lookup("desc"));
  })), "\n            "), "\n        "), "\n    ");
}));

})();
