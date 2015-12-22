(function(){
Template.__checkName("timeline");
Template["timeline"] = new Template("Template.timeline", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Timeline"),
      desc: Spacebars.call("Present your events in timeline style."),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n\n    ", HTML.DIV({
    "class": "content"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                ", HTML.DIV({
    "class": "hpanel"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      child: Spacebars.call("vertical-timeline-block")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("staggering"), function() {
      return [ "\n                    ", HTML.DIV({
        "class": "v-timeline vertical-container"
      }, "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("The standard chunk of Lorem Ipsum"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("There are many variations"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("Contrary to popular belief"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("The generated Lorem Ipsum"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("The standard chunk"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    " ];
    });
  }), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                ", HTML.DIV({
    "class": "hpanel"
  }, "\n                    ", Blaze._TemplateWith(function() {
    return {
      child: Spacebars.call("vertical-timeline-block")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("staggering"), function() {
      return [ "\n                    ", HTML.DIV({
        "class": "v-timeline vertical-container"
      }, "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("The standard chunk of Lorem Ipsum"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("There are many variations"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("Contrary to popular belief"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("The generated Lorem Ipsum"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
        "class": "vertical-timeline-block"
      }, "\n                            ", HTML.DIV({
        "class": "vertical-timeline-icon navy-bg"
      }, "\n                                ", HTML.I({
        "class": "fa fa-calendar"
      }), "\n                            "), "\n                            ", HTML.DIV({
        "class": "vertical-timeline-content"
      }, "\n                                ", HTML.DIV({
        "class": "p-sm"
      }, "\n                                    ", HTML.SPAN({
        "class": "vertical-date pull-right"
      }, " Saturday ", HTML.BR(), " ", HTML.SMALL("12:17:43 PM"), " "), "\n\n                                    ", HTML.H2("The standard chunk"), "\n                                    ", HTML.P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "panel-footer"
      }, "\n                                    It is a long established fact that\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                    " ];
    });
  }), "\n                "), "\n            "), "\n        "), "\n\n    ") ];
}));

})();
