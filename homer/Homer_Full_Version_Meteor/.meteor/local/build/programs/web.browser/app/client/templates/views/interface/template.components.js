(function(){
Template.__checkName("components");
Template["components"] = new Template("Template.components", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Components"),
      desc: Spacebars.call("Tabs, according, collapse and other UI components."),
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
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Accordion directive example"),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "text-center m-b-md"
        }, "\n                            ", HTML.H3("Accordion"), "\n                            ", HTML.SMALL("The accordion directive builds on top of the collapse directive to provide a list of\n                                items, with collapsible bodies that are collapsed or expanded by clicking on the item's\n                                header.\n                            "), "\n                            ", HTML.BR(), "\n                        "), "\n                        ", HTML.DIV({
          "class": "panel-group",
          id: "accordion",
          role: "tablist",
          "aria-multiselectable": "true"
        }, "\n                            ", HTML.DIV({
          "class": "panel panel-default"
        }, "\n                                ", HTML.DIV({
          "class": "panel-heading",
          role: "tab",
          id: "headingOne"
        }, "\n                                    ", HTML.H4({
          "class": "panel-title"
        }, "\n                                        ", HTML.A({
          "data-toggle": "collapse",
          "data-parent": "#accordion",
          href: "#collapseOne",
          "aria-expanded": "true",
          "aria-controls": "collapseOne"
        }, "\n                                            Collapsible Group Item #1\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          id: "collapseOne",
          "class": "panel-collapse collapse",
          role: "tabpanel",
          "aria-labelledby": "headingOne"
        }, "\n                                    ", HTML.DIV({
          "class": "panel-body"
        }, "\n                                        A wonderful serenity has taken possession of my entire soul, like these sweet\n                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the\n                                        charm of existence in this spot, which was created for the bliss of souls like\n                                        mine.\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "panel panel-default"
        }, "\n                                ", HTML.DIV({
          "class": "panel-heading",
          role: "tab",
          id: "headingTwo"
        }, "\n                                    ", HTML.H4({
          "class": "panel-title"
        }, "\n                                        ", HTML.A({
          "class": "collapsed",
          "data-toggle": "collapse",
          "data-parent": "#accordion",
          href: "#collapseTwo",
          "aria-expanded": "false",
          "aria-controls": "collapseTwo"
        }, "\n                                            Collapsible Group Item #2\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          id: "collapseTwo",
          "class": "panel-collapse collapse",
          role: "tabpanel",
          "aria-labelledby": "headingTwo"
        }, "\n                                    ", HTML.DIV({
          "class": "panel-body"
        }, "\n                                        A wonderful serenity has taken possession of my entire soul, like these sweet\n                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the\n                                        charm of existence in this spot, which was created for the bliss of souls like\n                                        mine.\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "panel panel-default"
        }, "\n                                ", HTML.DIV({
          "class": "panel-heading",
          role: "tab",
          id: "headingThree"
        }, "\n                                    ", HTML.H4({
          "class": "panel-title"
        }, "\n                                        ", HTML.A({
          "class": "collapsed",
          "data-toggle": "collapse",
          "data-parent": "#accordion",
          href: "#collapseThree",
          "aria-expanded": "false",
          "aria-controls": "collapseThree"
        }, "\n                                            Collapsible Group Item #3\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          id: "collapseThree",
          "class": "panel-collapse collapse",
          role: "tabpanel",
          "aria-labelledby": "headingThree"
        }, "\n                                    ", HTML.DIV({
          "class": "panel-body"
        }, "\n                                        A wonderful serenity has taken possession of my entire soul, like these sweet\n                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the\n                                        charm of existence in this spot, which was created for the bliss of souls like\n                                        mine.\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "panel panel-default"
        }, "\n                                ", HTML.DIV({
          "class": "panel-heading",
          role: "tab",
          id: "headingThree"
        }, "\n                                    ", HTML.H4({
          "class": "panel-title"
        }, "\n                                        ", HTML.A({
          "class": "collapsed",
          "data-toggle": "collapse",
          "data-parent": "#accordion",
          href: "#collapseFour",
          "aria-expanded": "false",
          "aria-controls": "collapseFour"
        }, "\n                                            Collapsible Group Item #4\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          id: "collapseFour",
          "class": "panel-collapse collapse",
          role: "tabpanel",
          "aria-labelledby": "headingThree"
        }, "\n                                    ", HTML.DIV({
          "class": "panel-body"
        }, "\n                                        A wonderful serenity has taken possession of my entire soul, like these sweet\n                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the\n                                        charm of existence in this spot, which was created for the bliss of souls like\n                                        mine.\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "panel panel-default"
        }, "\n                                ", HTML.DIV({
          "class": "panel-heading",
          role: "tab",
          id: "headingThree"
        }, "\n                                    ", HTML.H4({
          "class": "panel-title"
        }, "\n                                        ", HTML.A({
          "class": "collapsed",
          "data-toggle": "collapse",
          "data-parent": "#accordion",
          href: "#collapseFive",
          "aria-expanded": "false",
          "aria-controls": "collapseFive"
        }, "\n                                            Collapsible Group Item #5\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
          id: "collapseFive",
          "class": "panel-collapse collapse",
          role: "tabpanel",
          "aria-labelledby": "headingThree"
        }, "\n                                    ", HTML.DIV({
          "class": "panel-body"
        }, "\n                                        A wonderful serenity has taken possession of my entire soul, like these sweet\n                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the\n                                        charm of existence in this spot, which was created for the bliss of souls like\n                                        mine.\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Collapse  example"),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "text-center m-b-md"
        }, "\n                            ", HTML.H3("Collapse box"), "\n                            ", HTML.SMALL("AngularJS version of Bootstrap's collapse plugin. Provides a simple way to hide and\n                                show\n                                an element with a css transition\n                            "), "\n                            ", HTML.BR(), "\n                            ", HTML.BUTTON({
          "class": "btn btn-default btn-sm",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#collapseExample",
          "aria-expanded": "false",
          "aria-controls": "collapseExample"
        }, "\n                                Toggle collapse\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "collapse in",
          id: "collapseExample"
        }, "\n                            ", HTML.DIV({
          "class": "well well-lg"
        }, "\n                                ", HTML.H5({
          "class": "font-bold"
        }, "Lorem ipsum"), "\n                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings\n                                of\n                                spring which I enjoy with my whole heart.\n                                ", HTML.BR(), "\n                                ", HTML.BR(), "\n                                I am alone, and feel the charm of existence in this spot, which was created for the\n                                bliss of\n                                souls like mine. Thousand unknown plants are noticed by me: when I hear the buzz of the\n                                little world among the stalks.\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Tooltips"),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "text-center m-b-md"
        }, "\n                            ", HTML.H3("Tooltips"), "\n                            ", HTML.SMALL("A lightweight, extensible directive for fancy tooltip creation. The tooltip\n                                directive\n                                supports multiple placements, optional transition animation, and more.\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "tooltip-demo text-center"
        }, "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-toggle": "tooltip",
          "data-placement": "left",
          title: "Tooltip on left"
        }, "Tooltip on left\n                            "), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-toggle": "tooltip",
          "data-placement": "top",
          title: "Tooltip on top"
        }, "Tooltip on top\n                            "), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-toggle": "tooltip",
          "data-placement": "bottom",
          title: "Tooltip on bottom"
        }, "Tooltip on bottom\n                            "), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-toggle": "tooltip",
          "data-placement": "right",
          title: "Tooltip on right"
        }, "Tooltip on right\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Popover"),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "text-center m-b-md"
        }, "\n                            ", HTML.H3("Popover"), "\n                            ", HTML.SMALL("A lightweight, extensible directive for fancy popover creation. The popover\n                                directive\n                                supports multiple placements, optional transition animation, and more.\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m float-e-margins text-center"
        }, "\n                            ", HTML.DIV({
          "class": "tooltip-demo"
        }, "\n                                ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-container": "body",
          "data-toggle": "popover",
          "data-placement": "left",
          "data-title": "Title example",
          "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        }, "\n                                    Popover on left\n                                "), "\n                                ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-container": "body",
          "data-toggle": "popover",
          "data-placement": "top",
          "data-title": "Title example",
          "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        }, "\n                                    Popover on top\n                                "), "\n                                ", HTML.BR(), "\n                                ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-container": "body",
          "data-toggle": "popover",
          "data-placement": "bottom",
          "data-title": "Title example",
          "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        }, "\n                                    Popover on bottom\n                                "), "\n                                ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-sm btn-default",
          "data-container": "body",
          "data-toggle": "popover",
          "data-placement": "right",
          "data-title": "Title example",
          "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        }, "\n                                    Popover on right\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.UL({
      "class": "nav nav-tabs"
    }, "\n                            ", HTML.LI({
      "class": "active"
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-1"
    }, " This is tab")), "\n                            ", HTML.LI({
      "class": ""
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-2"
    }, "This is second tab")), "\n                        "), "\n                        ", HTML.DIV({
      "class": "tab-content"
    }, "\n                            ", HTML.DIV({
      id: "tab-1",
      "class": "tab-pane active"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.STRONG("Lorem ipsum dolor sit amet, consectetuer adipiscing"), "\n\n                                    ", HTML.P("A wonderful serenity has taken possession of my entire soul, like these sweet\n                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel\n                                        the\n                                        charm of\n                                        existence in this spot, which was created for the bliss of souls like\n                                        mine."), "\n\n                                    ", HTML.P("I am so happy, my dear friend, so absorbed in the exquisite sense of mere\n                                        tranquil existence, that I neglect my talents. I should be incapable of\n                                        drawing\n                                        a single stroke at\n                                        the present moment; and yet I feel that I never was a greater artist than\n                                        now.\n                                        When."), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      id: "tab-2",
      "class": "tab-pane"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.STRONG("Donec quam felis"), "\n\n                                    ", HTML.P("Thousand unknown plants are noticed by me: when I hear the buzz of the little\n                                        world among the stalks, and grow familiar with the countless indescribable\n                                        forms\n                                        of the insects\n                                        and flies, then I feel the presence of the Almighty, who formed us in his\n                                        own\n                                        image, and the breath "), "\n\n                                    ", HTML.P("I am alone, and feel the charm of existence in this spot, which was created\n                                        for\n                                        the bliss of souls like mine. I am so happy, my dear friend, so absorbed in\n                                        the\n                                        exquisite\n                                        sense of mere tranquil existence, that I neglect my talents. I should be\n                                        incapable of drawing a single stroke at the present moment; and yet."), "\n                                "), "\n                            "), "\n                        "), "\n\n\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.UL({
      "class": "nav nav-tabs"
    }, "\n                            ", HTML.LI({
      "class": "active"
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-3"
    }, " ", HTML.I({
      "class": "fa fa-laptop"
    })), "\n                            "), "\n                            ", HTML.LI({
      "class": ""
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-4"
    }, HTML.I({
      "class": "fa fa-desktop"
    }))), "\n                            ", HTML.LI({
      "class": ""
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-5"
    }, HTML.I({
      "class": "fa fa-database"
    }))), "\n                        "), "\n                        ", HTML.DIV({
      "class": "tab-content"
    }, "\n                            ", HTML.DIV({
      id: "tab-3",
      "class": "tab-pane active"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.STRONG("Lorem ipsum dolor sit amet, consectetuer adipiscing"), "\n\n                                    ", HTML.P("A wonderful serenity has taken possession of my entire soul, like these sweet\n                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel\n                                        the\n                                        charm of\n                                        existence in this spot, which was created for the bliss of souls like\n                                        mine."), "\n\n                                    ", HTML.P("I am so happy, my dear friend, so absorbed in the exquisite sense of mere\n                                        tranquil existence, that I neglect my talents. I should be incapable of\n                                        drawing\n                                        a single stroke at\n                                        the present moment; and yet I feel that I never was a greater artist than\n                                        now.\n                                        When."), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      id: "tab-4",
      "class": "tab-pane"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.STRONG("Donec quam felis"), "\n\n                                    ", HTML.P("Thousand unknown plants are noticed by me: when I hear the buzz of the little\n                                        world among the stalks, and grow familiar with the countless indescribable\n                                        forms\n                                        of the insects\n                                        and flies, then I feel the presence of the Almighty, who formed us in his\n                                        own\n                                        image, and the breath "), "\n\n                                    ", HTML.P("I am alone, and feel the charm of existence in this spot, which was created\n                                        for\n                                        the bliss of souls like mine. I am so happy, my dear friend, so absorbed in\n                                        the\n                                        exquisite\n                                        sense of mere tranquil existence, that I neglect my talents. I should be\n                                        incapable of drawing a single stroke at the present moment; and yet."), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
      id: "tab-5",
      "class": "tab-pane"
    }, "\n                                ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                    ", HTML.STRONG("Donec quam felis"), "\n\n                                    ", HTML.P("Thousand unknown plants are noticed by me: when I hear the buzz of the little\n                                        world among the stalks, and grow familiar with the countless indescribable\n                                        forms\n                                        of the insects\n                                        and flies, then I feel the presence of the Almighty, who formed us in his\n                                        own\n                                        image, and the breath "), "\n\n                                    ", HTML.P("I am alone, and feel the charm of existence in this spot, which was created\n                                        for\n                                        the bliss of souls like mine. I am so happy, my dear friend, so absorbed in\n                                        the\n                                        exquisite\n                                        sense of mere tranquil existence, that I neglect my talents. I should be\n                                        incapable of drawing a single stroke at the present moment; and yet."), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n\n                        ", HTML.DIV({
      "class": "tabs-left"
    }, "\n                            ", HTML.UL({
      "class": "nav nav-tabs"
    }, "\n                                ", HTML.LI({
      "class": "active"
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-6"
    }, " This is tab")), "\n                                ", HTML.LI({
      "class": ""
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-7"
    }, "This is second tab")), "\n                            "), "\n                            ", HTML.DIV({
      "class": "tab-content "
    }, "\n                                ", HTML.DIV({
      id: "tab-6",
      "class": "tab-pane active"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.STRONG("Lorem ipsum dolor sit amet, consectetuer adipiscing"), "\n\n                                        ", HTML.P("A wonderful serenity has taken possession of my entire soul, like these\n                                            sweet\n                                            mornings of spring which I enjoy with my whole heart. I am alone, and\n                                            feel\n                                            the charm of\n                                            existence in this spot, which was created for the bliss of souls like\n                                            mine."), "\n\n                                        ", HTML.P("I am so happy, my dear friend, so absorbed in the exquisite sense of mere\n                                            tranquil existence, that I neglect my talents. I should be incapable of\n                                            drawing a single stroke at\n                                            the present moment; and yet I feel that I never was a greater artist\n                                            than\n                                            now. When."), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      id: "tab-7",
      "class": "tab-pane"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.STRONG("Donec quam felis"), "\n\n                                        ", HTML.P("Thousand unknown plants are noticed by me: when I hear the buzz of the\n                                            little\n                                            world among the stalks, and grow familiar with the countless\n                                            indescribable\n                                            forms of the insects\n                                            and flies, then I feel the presence of the Almighty, who formed us in\n                                            his\n                                            own image, and the breath "), "\n\n                                        ", HTML.P("I am alone, and feel the charm of existence in this spot, which was\n                                            created\n                                            for the bliss of souls like mine. I am so happy, my dear friend, so\n                                            absorbed\n                                            in the exquisite\n                                            sense of mere tranquil existence, that I neglect my talents. I should be\n                                            incapable of drawing a single stroke at the present moment; and yet."), "\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "tabs-right"
    }, "\n                            ", HTML.UL({
      "class": "nav nav-tabs"
    }, "\n                                ", HTML.LI({
      "class": "active"
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-8"
    }, " This is tab")), "\n                                ", HTML.LI({
      "class": ""
    }, HTML.A({
      "data-toggle": "tab",
      href: "#tab-9"
    }, "This is second tab")), "\n                            "), "\n                            ", HTML.DIV({
      "class": "tab-content "
    }, "\n                                ", HTML.DIV({
      id: "tab-8",
      "class": "tab-pane active"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.STRONG("Lorem ipsum dolor sit amet, consectetuer adipiscing"), "\n\n                                        ", HTML.P("A wonderful serenity has taken possession of my entire soul, like these\n                                            sweet\n                                            mornings of spring which I enjoy with my whole heart. I am alone, and\n                                            feel\n                                            the charm of\n                                            existence in this spot, which was created for the bliss of souls like\n                                            mine."), "\n\n                                        ", HTML.P("I am so happy, my dear friend, so absorbed in the exquisite sense of mere\n                                            tranquil existence, that I neglect my talents. I should be incapable of\n                                            drawing a single stroke at\n                                            the present moment; and yet I feel that I never was a greater artist\n                                            than\n                                            now. When."), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
      id: "tab-9",
      "class": "tab-pane"
    }, "\n                                    ", HTML.DIV({
      "class": "panel-body"
    }, "\n                                        ", HTML.STRONG("Donec quam felis"), "\n\n                                        ", HTML.P("Thousand unknown plants are noticed by me: when I hear the buzz of the\n                                            little\n                                            world among the stalks, and grow familiar with the countless\n                                            indescribable\n                                            forms of the insects\n                                            and flies, then I feel the presence of the Almighty, who formed us in\n                                            his\n                                            own image, and the breath "), "\n\n                                        ", HTML.P("I am alone, and feel the charm of existence in this spot, which was\n                                            created\n                                            for the bliss of souls like mine. I am so happy, my dear friend, so\n                                            absorbed\n                                            in the exquisite\n                                            sense of mere tranquil existence, that I neglect my talents. I should be\n                                            incapable of drawing a single stroke at the present moment; and yet."), "\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Progressbar"),
        built: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "text-center m-b-md"
        }, "\n                            ", HTML.H3("Progressbar"), "\n                            ", HTML.SMALL("A progress bar directive that is focused on providing feedback on the progress of\n                                a\n                                workflow or action.\n                            "), "\n                        "), "\n                        ", HTML.H5("Basic ProgressBars"), "\n                        ", HTML.SMALL("Light version of progress bar"), "\n\n                        ", HTML.DIV({
          "class": "m"
        }, "\n\n                            ", HTML.DIV({
          "class": "progress m-t-xs"
        }, "\n                                ", HTML.DIV({
          style: "width: 15%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "15",
          role: "progressbar",
          "class": " progress-bar progress-bar-warning"
        }, "\n                                    15%\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "progress m-t-xs"
        }, "\n                                ", HTML.DIV({
          style: "width: 30%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "30",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                                    30%\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "progress m-t-xs"
        }, "\n                                ", HTML.DIV({
          style: "width: 45%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "45",
          role: "progressbar",
          "class": " progress-bar progress-bar-info"
        }, "\n                                    45%\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "progress m-t-xs"
        }, "\n                                ", HTML.DIV({
          style: "width: 60%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "60",
          role: "progressbar",
          "class": " progress-bar progress-bar-danger"
        }, "\n                                    60%\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.H5("Striped Progressbars"), "\n                        ", HTML.SMALL("Add ", HTML.CODE(".full"), " class to get full background. Add\n                            ", HTML.CODE(".progress-striped"), "\n                            to get striped version.\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m"
        }, "\n                            ", HTML.DIV({
          "class": "progress m-t-xs full progress-striped"
        }, "\n                                ", HTML.DIV({
          style: "width: 75%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "75",
          role: "progressbar",
          "class": " progress-bar progress-bar-warning"
        }, "\n                                    75%\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.H5("Active Progressbars"), "\n                        ", HTML.SMALL("Add ", HTML.CODE(".active"), " to get active striped."), "\n\n                        ", HTML.DIV({
          "class": "m"
        }, "\n                            ", HTML.DIV({
          "class": "progress m-t-xs full progress-striped active"
        }, "\n                                ", HTML.DIV({
          style: "width: 90%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "90",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                                    90%\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.H5("Mini version"), "\n                        ", HTML.SMALL("Add ", HTML.CODE(".progress-small"), " class to get mini version"), "\n                        ", HTML.DIV({
          "class": "m"
        }, "\n\n                            ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                                ", HTML.DIV({
          style: "width: 20%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "60",
          role: "progressbar",
          "class": " progress-bar progress-bar-warning"
        }, "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                                ", HTML.DIV({
          style: "width: 50%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "50",
          role: "progressbar",
          "class": " progress-bar progress-bar-success"
        }, "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "progress m-t-xs full progress-small"
        }, "\n                                ", HTML.DIV({
          style: "width: 75%",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": "75",
          role: "progressbar",
          "class": " progress-bar progress-bar-info"
        }, "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Dropdown"),
        built: Spacebars.call(true),
        bodyClass: Spacebars.call("h-200")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.DIV({
          "class": "text-center m-b-md"
        }, "\n                            ", HTML.H3("Dropdown"), "\n                            ", HTML.SMALL("Dropdown is a simple directive which will toggle a dropdown menu on click or\n                                programmatically.\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "row"
        }, "\n                            ", HTML.DIV({
          "class": "dropdown dropdown-example"
        }, "\n                                ", HTML.UL({
          "class": "dropdown-menu",
          role: "menu"
        }, "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, "Action")), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, "Another action")), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, "Something else here")), "\n                                    ", HTML.LI({
          "class": "divider"
        }), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, "Separated link")), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "dropdown dropdown-example"
        }, "\n                                ", HTML.UL({
          "class": "dropdown-menu",
          role: "menu"
        }, "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, HTML.STRONG("Action"))), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, HTML.SPAN({
          "class": "text-success"
        }, "Another action"))), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, "Something else here")), "\n                                    ", HTML.LI({
          "class": "divider"
        }), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, HTML.SPAN({
          "class": "text-muted"
        }, "Separated link"))), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "dropdown dropdown-example"
        }, "\n                                ", HTML.UL({
          "class": "dropdown-menu",
          role: "menu"
        }, "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-pencil"
        }, " "), " Edit")), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-copy"
        }, " "), " Copy")), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-paste"
        }, " "), " paste")), "\n                                    ", HTML.LI({
          "class": "divider"
        }), "\n                                    ", HTML.LI(HTML.A({
          href: ""
        }, HTML.I({
          "class": "fa fa-trash"
        }, " "), " Remove")), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Rating"),
        built: Spacebars.call(true),
        bodyClass: Spacebars.call("text-center")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.DIV({
          "class": "m-b-xs"
        }, "\n                            ", HTML.H3("Rating"), "\n                            ", HTML.SMALL("Rating directive that will take care of visualising a star rating bar."), "\n                        "), "\n                        ", HTML.INPUT({
          id: "input-1",
          "class": "rating",
          "data-min": "0",
          "data-max": "5",
          "data-step": "1",
          "data-size": "xs",
          "data-show-clear": "false"
        }), "\n\n                        ", HTML.P({
          "class": "m-t-xs"
        }, "\n                            More examples and full documentation you can find at:\n                            http://plugins.krajee.com/star-rating/demo\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n        "), "\n\n\n    " ];
  }) ];
}));

})();
