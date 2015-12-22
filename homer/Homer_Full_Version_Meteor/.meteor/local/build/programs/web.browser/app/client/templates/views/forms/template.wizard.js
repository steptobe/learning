(function(){
Template.__checkName("wizard");
Template["wizard"] = new Template("Template.wizard", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Wizard"),
      desc: Spacebars.call("Build a form with wizard functionality."),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeader"));
  }), "\n\n    ", HTML.DIV({
    "class": "content"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Example fo wizard form")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("panel"), function() {
      return [ "\n\n\n                    ", HTML.FORM({
        name: "simpleForm",
        novalidate: "",
        id: "simpleForm",
        action: "#",
        method: "post"
      }, "\n\n                        ", HTML.DIV({
        "class": "text-center m-b-md",
        id: "wizardControl"
      }, "\n\n                            ", HTML.A({
        "class": "btn btn-primary",
        href: "#step1",
        "data-toggle": "tab"
      }, "Step 1 - Personal data"), "\n                            ", HTML.A({
        "class": "btn btn-default",
        href: "#step2",
        "data-toggle": "tab"
      }, "Step 2 - Payment data"), "\n                            ", HTML.A({
        "class": "btn btn-default",
        href: "#step3",
        "data-toggle": "tab"
      }, "Step 3 - Approval"), "\n\n                        "), "\n\n                        ", HTML.DIV({
        "class": "tab-content"
      }, "\n                            ", HTML.DIV({
        id: "step1",
        "class": "p-m tab-pane active"
      }, "\n\n                                ", HTML.DIV({
        "class": "row"
      }, "\n                                    ", HTML.DIV({
        "class": "col-lg-3 text-center"
      }, "\n                                        ", HTML.I({
        "class": "pe-7s-user fa-5x text-muted"
      }), "\n\n                                        ", HTML.P({
        "class": "small m-t-md"
      }, "\n                                            ", HTML.STRONG("Lorem Ipsum"), " is simply dummy text of the printing and\n                                            typesetting industry. Lorem Ipsum has been the industry's standard.\n                                            ", HTML.BR(), HTML.BR(), "Lorem Ipsum has been the industry's dummy text of the printing and\n                                            typesetting\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
        "class": "col-lg-9"
      }, "\n                                        ", HTML.DIV({
        "class": "row"
      }, "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-12"
      }, "\n                                                ", HTML.LABEL("Username"), "\n                                                ", HTML.INPUT({
        type: "text",
        value: "",
        id: "",
        "class": "form-control",
        name: "username",
        placeholder: "username"
      }), "\n                                            "), "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-6"
      }, "\n                                                ", HTML.LABEL("Password"), "\n                                                ", HTML.INPUT({
        type: "password",
        value: "",
        id: "",
        "class": "form-control",
        placeholder: "******",
        name: "password"
      }), "\n                                            "), "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-6"
      }, "\n                                                ", HTML.LABEL("Company"), "\n                                                ", HTML.INPUT({
        type: "text",
        value: "",
        id: "",
        "class": "form-control",
        placeholder: "Company Name",
        name: "company"
      }), "\n                                            "), "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-6"
      }, "\n                                                ", HTML.LABEL("Email Address"), "\n                                                ", HTML.INPUT({
        type: "email",
        value: "",
        id: "",
        "class": "form-control",
        placeholder: "user@email.com",
        name: "email"
      }), "\n                                            "), "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-6"
      }, "\n                                                ", HTML.LABEL("Country"), "\n                                                ", HTML.INPUT({
        type: "text",
        value: "",
        id: "",
        "class": "form-control",
        name: "country",
        placeholder: "UK"
      }), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n\n                                ", HTML.DIV({
        "class": "text-right m-t-xs"
      }, "\n                                    ", HTML.A({
        "class": "btn btn-default prev",
        href: "#"
      }, "Previous"), "\n                                    ", HTML.A({
        "class": "btn btn-default next",
        href: "#"
      }, "Next"), "\n                                "), "\n\n                            "), "\n\n                            ", HTML.DIV({
        id: "step2",
        "class": "p-m tab-pane"
      }, "\n\n                                ", HTML.DIV({
        "class": "row"
      }, "\n                                    ", HTML.DIV({
        "class": "col-lg-3 text-center"
      }, "\n                                        ", HTML.I({
        "class": "pe-7s-credit fa-5x text-muted"
      }), "\n\n                                        ", HTML.P({
        "class": "small m-t-md"
      }, "\n                                            ", HTML.STRONG("It is a long"), " established fact that a reader will be\n                                            distracted by the readable\n                                            ", HTML.BR(), HTML.BR(), "Many desktop publishing packages and web page editors now use\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
        "class": "col-lg-9"
      }, "\n                                        ", HTML.DIV({
        "class": "row"
      }, "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-12"
      }, "\n                                                ", HTML.LABEL("Name on Card"), "\n                                                ", HTML.INPUT({
        type: "text",
        value: "",
        id: "",
        "class": "form-control",
        name: "card_name"
      }), "\n                                            "), "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-6"
      }, "\n                                                ", HTML.LABEL("Card Number"), "\n                                                ", HTML.INPUT({
        type: "text",
        value: "",
        id: "",
        "class": "form-control",
        name: "card_number"
      }), "\n                                            "), "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-6"
      }, "\n                                                ", HTML.LABEL("Billing Address"), "\n                                                ", HTML.INPUT({
        type: "text",
        value: "",
        id: "",
        "class": "form-control",
        name: "billing_address"
      }), "\n                                            "), "\n                                            ", HTML.DIV({
        "class": "form-group col-lg-12"
      }, "\n                                                ", HTML.DIV({
        "class": "row"
      }, "\n                                                    ", HTML.DIV({
        "class": "col-xs-4 form-group"
      }, "\n                                                        ", HTML.LABEL("CVC"), "\n                                                        ", HTML.INPUT({
        "class": "form-control",
        placeholder: "ex. 381",
        type: "text",
        name: "cvc"
      }), "\n                                                    "), "\n                                                    ", HTML.DIV({
        "class": "col-xs-4 form-group"
      }, "\n                                                        ", HTML.LABEL("Expiration"), "\n                                                        ", HTML.INPUT({
        "class": "form-control",
        placeholder: "MM",
        type: "text",
        name: "expire_month"
      }), "\n                                                    "), "\n                                                    ", HTML.DIV({
        "class": "col-xs-4 form-group"
      }, "\n                                                        ", HTML.LABEL(), "\n                                                        ", HTML.INPUT({
        "class": "form-control",
        placeholder: "YYYY",
        type: "text",
        name: "expire_year"
      }), "\n                                                    "), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "text-right m-t-xs"
      }, "\n                                    ", HTML.A({
        "class": "btn btn-default prev",
        href: "#"
      }, "Previous"), "\n                                    ", HTML.A({
        "class": "btn btn-default next",
        href: "#"
      }, "Next"), "\n                                "), "\n\n                            "), "\n                            ", HTML.DIV({
        id: "step3",
        "class": "tab-pane"
      }, "\n                                ", HTML.DIV({
        "class": "row text-center m-t-lg m-b-lg"
      }, "\n                                    ", HTML.DIV({
        "class": "col-lg-12"
      }, "\n                                        ", HTML.I({
        "class": "pe-7s-check fa-5x text-muted"
      }), "\n\n                                        ", HTML.P({
        "class": "small m-t-md"
      }, "\n                                            ", HTML.STRONG("There are many"), " variations of passages of Lorem Ipsum\n                                            available, but the majority have suffered\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
        "class": "checkbox col-lg-12"
      }, "\n                                        ", HTML.INPUT({
        type: "checkbox",
        "class": "i-checks approveCheck",
        name: "approve"
      }), "\n                                        Approve this form\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
        "class": "text-right m-t-xs"
      }, "\n                                    ", HTML.A({
        "class": "btn btn-default prev",
        href: "#"
      }, "Previous"), "\n                                    ", HTML.A({
        "class": "btn btn-default next",
        href: "#"
      }, "Next"), "\n                                    ", HTML.A({
        "class": "btn btn-success submitWizard",
        href: "#"
      }, "Submit"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                    ", HTML.DIV({
        "class": "m-t-md"
      }, "\n\n                        ", HTML.P("\n                            This is an example of a wizard form which can be easy adjusted. Since each step is a tab,\n                            and each clik to next tab is a function you can easily add validation or any other\n                            functionality.\n                        "), "\n\n                    "), "\n                " ];
    });
  }), "\n\n            "), "\n\n        "), "\n    ") ];
}));

})();
