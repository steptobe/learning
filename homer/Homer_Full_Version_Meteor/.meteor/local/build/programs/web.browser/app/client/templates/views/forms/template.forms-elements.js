(function(){
Template.__checkName("formsElements");
Template["formsElements"] = new Template("Template.formsElements", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Forms elements"),
      desc: Spacebars.call("Examples of various form controls."),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", Spacebars.include(view.lookupTemplate("staggering"), function() {
    return [ "\n\n    ", HTML.DIV({
      "class": "content"
    }, "\n\n        ", HTML.DIV("\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", HTML.DIV({
      "class": "hpanel"
    }, "\n                        ", HTML.DIV({
      "class": "panel-body"
    }, "\n                            ", HTML.H3("Forms"), "\n\n                            ", HTML.P("Individual form controls automatically receive some global styling. All textual ", HTML.CODE("\n                                ", HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), "input", HTML.CharRef({
      html: "&gt;",
      str: ">"
    })), ", ", HTML.CODE(HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), "textarea", HTML.CharRef({
      html: "&gt;",
      str: ">"
    })), ", and ", HTML.CODE(HTML.CharRef({
      html: "&lt;",
      str: "<"
    }), "select", HTML.CharRef({
      html: "&gt;",
      str: ">"
    })), "\n                                elements with ", HTML.CODE(".form-control"), " are set to ", HTML.CODE("width: 100%;"), " by\n                                default. Wrap labels and controls in ", HTML.CODE(".form-group"), " for optimum spacing."), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-5"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Basic elements")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n                        ", HTML.FORM({
          method: "get",
          "class": "form-horizontal"
        }, "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Normal"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, HTML.INPUT({
          type: "text",
          "class": "form-control"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Help text"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), " ", HTML.SPAN({
          "class": "help-block m-b-none"
        }, "A block of help text that breaks onto a new line and may extend beyond one line."), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Password"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, HTML.INPUT({
          type: "password",
          "class": "form-control",
          name: "password"
        }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Placeholder"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, HTML.INPUT({
          type: "text",
          placeholder: "placeholder",
          "class": "form-control"
        })), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-lg-2 control-label"
        }, "Disabled"), "\n\n                                ", HTML.DIV({
          "class": "col-lg-10"
        }, HTML.INPUT({
          type: "text",
          disabled: "",
          placeholder: "Disabled input here...",
          "class": "form-control"
        }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-lg-2 control-label"
        }, "Static control"), "\n\n                                ", HTML.DIV({
          "class": "col-lg-10"
        }, HTML.P({
          "class": "form-control-static"
        }, "email@example.com")), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, "\n                                ", HTML.DIV({
          "class": "col-sm-8 col-sm-offset-2"
        }, "\n                                    ", HTML.BUTTON({
          "class": "btn btn-default",
          type: "submit"
        }, "Cancel"), "\n                                    ", HTML.BUTTON({
          "class": "btn btn-primary",
          type: "submit"
        }, "Save changes"), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-7"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Checkbox and radios")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.FORM({
          method: "get",
          "class": "form-horizontal"
        }, "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Checkboxes and radios ", HTML.BR(), "\n                            "), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "checkbox",
          value: ""
        }), " Option one is this and that", HTML.CharRef({
          html: "&mdash;",
          str: "—"
        }), "be\n                                        sure to include why it's great ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "radio",
          checked: "",
          value: "option1",
          id: "optionsRadios1",
          name: "optionsRadios"
        }), " Option one is this and that", HTML.CharRef({
          html: "&mdash;",
          str: "—"
        }), "be sure\n                                        to\n                                        include why it's great ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "radio",
          value: "option2",
          id: "optionsRadios2",
          name: "optionsRadios"
        }), " Option two can be something else and\n                                        selecting it will\n                                        deselect option one ")), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Inline checkboxes"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, HTML.LABEL({
          "class": "checkbox-inline"
        }, " ", HTML.INPUT({
          type: "checkbox",
          value: "option1",
          id: "inlineCheckbox1"
        }), " a\n                                "), " ", HTML.LABEL({
          "class": "checkbox-inline"
        }, "\n                                    ", HTML.INPUT({
          type: "checkbox",
          value: "option2",
          id: "inlineCheckbox2"
        }), " b "), " ", HTML.LABEL({
          "class": "checkbox-inline"
        }, "\n                                    ", HTML.INPUT({
          type: "checkbox",
          value: "option3",
          id: "inlineCheckbox3"
        }), " c ")), "\n                            "), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Checkboxes ", HTML.CharRef({
          html: "&amp;",
          str: "&"
        }), " radios ", HTML.BR(), "\n                                ", HTML.SMALL({
          "class": "text-navy"
        }, "Custom elements"), "\n                            "), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "checkbox",
          "class": "i-checks"
        }), " Option one ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "checkbox",
          "class": "i-checks",
          checked: ""
        }), " Option two checked\n                                    ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "checkbox",
          "class": "i-checks",
          checked: "",
          disabled: ""
        }), " Option three\n                                        checked and disabled ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "checkbox",
          "class": "i-checks",
          disabled: ""
        }), " Option four disabled\n                                    ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "radio",
          "class": "i-checks"
        }), " Option one ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "radio",
          "class": "i-checks",
          checked: ""
        }), " Option two checked\n                                    ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "radio",
          "class": "i-checks",
          disabled: ""
        }), " Option four disabled\n                                    ")), "\n                                    ", HTML.DIV(HTML.LABEL(" ", HTML.INPUT({
          type: "radio",
          "class": "i-checks",
          checked: "",
          disabled: ""
        }), " Option three\n                                        checked and disabled")), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Inline checkboxes"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.LABEL({
          "class": "checkbox-inline"
        }, " ", HTML.INPUT({
          type: "checkbox",
          "class": "i-checks",
          checked: ""
        }), " a\n                                    "), "\n                                    ", HTML.LABEL({
          "class": "checkbox-inline"
        }, " ", HTML.INPUT({
          type: "checkbox",
          "class": "i-checks"
        }), " b "), "\n                                    ", HTML.LABEL({
          "class": "checkbox-inline"
        }, " ", HTML.INPUT({
          type: "checkbox",
          "class": "i-checks"
        }), " c "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Select"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, HTML.SELECT({
          "class": "form-control m-b",
          name: "account"
        }, "\n                                    ", HTML.OPTION("option 1"), "\n                                    ", HTML.OPTION("option 2"), "\n                                    ", HTML.OPTION("option 3"), "\n                                    ", HTML.OPTION("option 4"), "\n                                "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, "\n                                ", HTML.DIV({
          "class": "col-sm-8 col-sm-offset-2"
        }, "\n                                    ", HTML.BUTTON({
          "class": "btn btn-default",
          type: "submit"
        }, "Cancel"), "\n                                    ", HTML.BUTTON({
          "class": "btn btn-primary",
          type: "submit"
        }, "Save changes"), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Form elements options")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.FORM({
          method: "get",
          "class": "form-horizontal"
        }, "\n\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Control sizing"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, HTML.INPUT({
          type: "text",
          placeholder: ".input-lg",
          "class": "form-control input-lg m-b"
        }), "\n                                    ", HTML.INPUT({
          type: "text",
          placeholder: "Default input",
          "class": "form-control m-b"
        }), " ", HTML.INPUT({
          type: "text",
          placeholder: ".input-sm",
          "class": "form-control input-sm"
        }), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Column sizing"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.DIV({
          "class": "row"
        }, "\n                                        ", HTML.DIV({
          "class": "col-md-2"
        }, HTML.INPUT({
          type: "text",
          placeholder: ".col-md-2",
          "class": "form-control"
        })), "\n                                        ", HTML.DIV({
          "class": "col-md-3"
        }, HTML.INPUT({
          type: "text",
          placeholder: ".col-md-3",
          "class": "form-control"
        })), "\n                                        ", HTML.DIV({
          "class": "col-md-4"
        }, HTML.INPUT({
          type: "text",
          placeholder: ".col-md-4",
          "class": "form-control"
        })), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Input groups"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.DIV({
          "class": "input-group m-b"
        }, HTML.SPAN({
          "class": "input-group-addon"
        }, "@"), " ", HTML.INPUT({
          type: "text",
          placeholder: "Username",
          "class": "form-control"
        })), "\n                                    ", HTML.DIV({
          "class": "input-group m-b"
        }, HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), " ", HTML.SPAN({
          "class": "input-group-addon"
        }, ".00")), "\n                                    ", HTML.DIV({
          "class": "input-group m-b"
        }, HTML.SPAN({
          "class": "input-group-addon"
        }, "$"), " ", HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), " ", HTML.SPAN({
          "class": "input-group-addon"
        }, ".00"), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "input-group m-b"
        }, HTML.SPAN({
          "class": "input-group-addon"
        }, " ", HTML.INPUT({
          type: "checkbox"
        }), " "), " ", HTML.INPUT({
          type: "text",
          "class": "form-control"
        })), "\n                                    ", HTML.DIV({
          "class": "input-group"
        }, HTML.SPAN({
          "class": "input-group-addon"
        }, " ", HTML.INPUT({
          type: "radio"
        }), " "), " ", HTML.INPUT({
          type: "text",
          "class": "form-control"
        })), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Button addons"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.DIV({
          "class": "input-group m-b"
        }, HTML.SPAN({
          "class": "input-group-btn"
        }, "\n                                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Go!"), " "), " ", HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "input-group"
        }, HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), " ", HTML.SPAN({
          "class": "input-group-btn"
        }, " ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Go!\n                                    "), " ")), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "With dropdowns"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.DIV({
          "class": "input-group m-b"
        }, "\n                                        ", HTML.DIV({
          "class": "input-group-btn"
        }, "\n                                            ", HTML.BUTTON({
          "class": "btn btn-default dropdown-toggle",
          "data-toggle": "dropdown",
          type: "button"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Another action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Something else here")), "\n                                                ", HTML.LI({
          "class": "divider"
        }), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Separated link")), "\n                                            "), "\n                                        "), "\n                                        ", HTML.INPUT({
          type: "text",
          "class": "form-control"
        })), "\n                                    ", HTML.DIV({
          "class": "input-group"
        }, HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), "\n\n                                        ", HTML.DIV({
          "class": "input-group-btn"
        }, "\n                                            ", HTML.BUTTON({
          "class": "btn btn-default dropdown-toggle",
          "data-toggle": "dropdown",
          type: "button"
        }, "Action ", HTML.SPAN({
          "class": "caret"
        })), "\n                                            ", HTML.UL({
          "class": "dropdown-menu pull-right"
        }, "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Another action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Something else here")), "\n                                                ", HTML.LI({
          "class": "divider"
        }), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Separated link")), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, HTML.LABEL({
          "class": "col-sm-2 control-label"
        }, "Segmented"), "\n\n                                ", HTML.DIV({
          "class": "col-sm-10"
        }, "\n                                    ", HTML.DIV({
          "class": "input-group m-b"
        }, "\n                                        ", HTML.DIV({
          "class": "input-group-btn"
        }, "\n                                            ", HTML.BUTTON({
          tabindex: "-1",
          "class": "btn btn-default",
          type: "button"
        }, "Action"), "\n                                            ", HTML.BUTTON({
          "class": "btn btn-default dropdown-toggle",
          "data-toggle": "dropdown",
          type: "button"
        }, HTML.SPAN({
          "class": "caret"
        })), "\n                                            ", HTML.UL({
          "class": "dropdown-menu"
        }, "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Another action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Something else here")), "\n                                                ", HTML.LI({
          "class": "divider"
        }), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Separated link")), "\n                                            "), "\n                                        "), "\n                                        ", HTML.INPUT({
          type: "text",
          "class": "form-control"
        })), "\n                                    ", HTML.DIV({
          "class": "input-group"
        }, HTML.INPUT({
          type: "text",
          "class": "form-control"
        }), "\n\n\n                                        ", HTML.DIV({
          "class": "input-group-btn"
        }, "\n                                            ", HTML.BUTTON({
          tabindex: "-1",
          "class": "btn btn-default",
          type: "button"
        }, "Action"), "\n                                            ", HTML.BUTTON({
          "class": "btn btn-default dropdown-toggle",
          "data-toggle": "dropdown",
          type: "button"
        }, HTML.SPAN({
          "class": "caret"
        })), "\n                                            ", HTML.UL({
          "class": "dropdown-menu pull-right"
        }, "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Another action")), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Something else here")), "\n                                                ", HTML.LI({
          "class": "divider"
        }), "\n                                                ", HTML.LI(HTML.A({
          href: ""
        }, "Separated link")), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "hr-line-dashed"
        }), "\n                            ", HTML.DIV({
          "class": "form-group"
        }, "\n                                ", HTML.DIV({
          "class": "col-sm-8 col-sm-offset-2"
        }, "\n                                    ", HTML.BUTTON({
          "class": "btn btn-default",
          type: "submit"
        }, "Cancel"), "\n                                    ", HTML.BUTTON({
          "class": "btn btn-primary",
          type: "submit"
        }, "Save changes"), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n        "), "\n\n    "), "\n\n    " ];
  }) ];
}));

})();
