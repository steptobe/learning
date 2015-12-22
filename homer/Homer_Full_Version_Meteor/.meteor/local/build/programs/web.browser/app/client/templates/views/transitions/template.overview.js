(function(){
Template.__checkName("transitionOverview");
Template["transitionOverview"] = new Template("Template.transitionOverview", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n        ", HTML.DIV({
      "class": "content"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-5"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Animation panel")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P("\n                            ", HTML.STRONG("Homer Meteor"), " has special small custom block helper ", HTML.CODE("staggering"), "\n                            that\n                            allows you to implement staggering animations to any layout elements.\n                            It is designed to work on any html elements in order to achieve a effect of building\n                            layout on page load.\n                            This helpers is mainly for main layout elements.\n                        "), "\n\n                        ", HTML.P("\n                            It is easy to use. All you have to do is to add new template ", HTML.CODE(HTML.CharRef({
          html: "&#123;",
          str: "{"
        }), HTML.CharRef({
          html: "&#123;",
          str: "{"
        }), "#staggering", HTML.CharRef({
          html: "&#125;",
          str: "}"
        }), HTML.CharRef({
          html: "&#125;",
          str: "}"
        })), "\n                            to\n                            wrap elements that should be staggering. For example:\n\n                        "), "\n                ", HTML.PRE("\n", HTML.CharRef({
          html: "&#123;",
          str: "{"
        }), HTML.CharRef({
          html: "&#123;",
          str: "{"
        }), '#staggering effect="flipInY" child="element"', HTML.CharRef({
          html: "&#125;",
          str: "}"
        }), HTML.CharRef({
          html: "&#125;",
          str: "}"
        }), "\n\n    ", HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), 'div class="element"', HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), "/div", HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), "\n    ", HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), 'div class="element"', HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), "/div", HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), "\n    ", HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), 'div class="element"', HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), "/div", HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), "\n\n", HTML.CharRef({
          html: "&#123;",
          str: "{"
        }), HTML.CharRef({
          html: "&#123;",
          str: "{"
        }), "/staggering", HTML.CharRef({
          html: "&#125;",
          str: "}"
        }), HTML.CharRef({
          html: "&#125;",
          str: "}"
        }), " "), "\n\n                        ", HTML.P("\n                            In default helper get all ", HTML.CODE(".row > div"), " elements and apply\n                            ", HTML.STRONG("zoomIn"), " effect. You can use any effect available with\n                            ", HTML.STRONG("Animate.css"), "\n                            library. You can find many example of use in Homer theme but feel free to play with\n                            examples below.\n\n                        "), "\n\n                    " ];
      });
    }), "\n\n\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-7"
    }, "\n\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Live preview")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.P("Select one of the animation from Animation.css library"), "\n                        ", HTML.SELECT({
          name: "animation",
          "class": "form-control animation-select"
        }, "\n                            ", HTML.OPTGROUP({
          label: "Bouncing Entrances"
        }, "\n                                ", HTML.OPTION({
          value: "bounceIn"
        }, "bounceIn"), "\n                                ", HTML.OPTION({
          value: "bounceInDown"
        }, "bounceInDown"), "\n                                ", HTML.OPTION({
          value: "bounceInLeft"
        }, "bounceInLeft"), "\n                                ", HTML.OPTION({
          value: "bounceInRight"
        }, "bounceInRight"), "\n                                ", HTML.OPTION({
          value: "bounceInUp"
        }, "bounceInUp"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Fading Entrances"
        }, "\n                                ", HTML.OPTION({
          value: "fadeIn"
        }, "fadeIn"), "\n                                ", HTML.OPTION({
          value: "fadeInDown"
        }, "fadeInDown"), "\n                                ", HTML.OPTION({
          value: "fadeInDownBig"
        }, "fadeInDownBig"), "\n                                ", HTML.OPTION({
          value: "fadeInLeft"
        }, "fadeInLeft"), "\n                                ", HTML.OPTION({
          value: "fadeInLeftBig"
        }, "fadeInLeftBig"), "\n                                ", HTML.OPTION({
          value: "fadeInRight"
        }, "fadeInRight"), "\n                                ", HTML.OPTION({
          value: "fadeInRightBig"
        }, "fadeInRightBig"), "\n                                ", HTML.OPTION({
          value: "fadeInUp"
        }, "fadeInUp"), "\n                                ", HTML.OPTION({
          value: "fadeInUpBig"
        }, "fadeInUpBig"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Flippers"
        }, "\n                                ", HTML.OPTION({
          value: "flipInX"
        }, "flipInX"), "\n                                ", HTML.OPTION({
          value: "flipInY"
        }, "flipInY"), "\n                                ", HTML.OPTION({
          value: "flipOutX"
        }, "flipOutX"), "\n                                ", HTML.OPTION({
          value: "flipOutY"
        }, "flipOutY"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Lightspeed"
        }, "\n                                ", HTML.OPTION({
          value: "lightSpeedIn"
        }, "lightSpeedIn"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Rotating Entrances"
        }, "\n                                ", HTML.OPTION({
          value: "rotateIn"
        }, "rotateIn"), "\n                                ", HTML.OPTION({
          value: "rotateInDownLeft"
        }, "rotateInDownLeft"), "\n                                ", HTML.OPTION({
          value: "rotateInDownRight"
        }, "rotateInDownRight"), "\n                                ", HTML.OPTION({
          value: "rotateInUpLeft"
        }, "rotateInUpLeft"), "\n                                ", HTML.OPTION({
          value: "rotateInUpRight"
        }, "rotateInUpRight"), "\n                            "), "\n                            ", HTML.OPTGROUP({
          label: "Zoom Entrances"
        }, "\n                                ", HTML.OPTION({
          selected: "",
          value: "zoomIn"
        }, "zoomIn"), "\n                                ", HTML.OPTION({
          value: "zoomInDown"
        }, "zoomInDown"), "\n                                ", HTML.OPTION({
          value: "zoomInLeft"
        }, "zoomInLeft"), "\n                                ", HTML.OPTION({
          value: "zoomInRight"
        }, "zoomInRight"), "\n                                ", HTML.OPTION({
          value: "zoomInUp"
        }, "zoomInUp"), "\n                            "), "\n                        "), "\n                        ", HTML.BUTTON({
          "class": "btn btn-success m-t-sm runAnimation"
        }, "Play it!"), "\n                    " ];
      });
    }), "\n\n                    ", HTML.DIV({
      id: "acontainer"
    }, "\n                        ", HTML.DIV({
      "class": "runIt"
    }, "\n                            ", HTML.DIV({
      "class": "row animate-panel-demo setEffect",
      "data-effect": "zoomIn",
      "data-child": "hpanel"
    }, "\n                                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Box example")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                                        ", HTML.DIV({
          "class": "h-100"
        }), "\n                                    " ];
      });
    }), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Box example")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                                        ", HTML.DIV({
          "class": "h-100"
        }), "\n                                    " ];
      });
    }), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Box example")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                                        ", HTML.DIV({
          "class": "h-100"
        }), "\n                                    " ];
      });
    }), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Box example")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                                        ", HTML.DIV({
          "class": "h-100"
        }), "\n                                    " ];
      });
    }), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Box example")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                                        ", HTML.DIV({
          "class": "h-100"
        }), "\n                                    " ];
      });
    }), "\n                                "), "\n                                ", HTML.DIV({
      "class": "col-lg-4"
    }, "\n                                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Box example")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                                        ", HTML.DIV({
          "class": "h-100"
        }), "\n                                    " ];
      });
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  });
}));

})();
