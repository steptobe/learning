(function(){
Template.__checkName("modals");
Template["modals"] = new Template("Template.modals", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Modals"),
      desc: Spacebars.call("Modal window examples"),
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
        title: Spacebars.call("Homer modal windows")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Modals are streamlined, but flexible, dialog prompts with the minimum required functionality\n                            and smart defaults.\n                        "), "\n\n                        ", HTML.P("\n                            Modal contains title, content and footer\n                        "), "\n\n                        ", HTML.DIV({
          "class": "text-center"
        }, "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-success",
          "data-toggle": "modal",
          "data-target": "#myModal"
        }, "\n                                Launch demo modal\n                            "), "\n                            ", HTML.DIV({
          "class": "modal fade",
          id: "myModal",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, "\n                                ", HTML.DIV({
          "class": "modal-dialog"
        }, "\n                                    ", HTML.DIV({
          "class": "modal-content"
        }, "\n                                        ", HTML.DIV({
          "class": "color-line"
        }), "\n                                        ", HTML.DIV({
          "class": "modal-header text-center"
        }, "\n                                            ", HTML.H4({
          "class": "modal-title"
        }, "Modal title"), "\n                                            ", HTML.SMALL({
          "class": "font-bold"
        }, "Lorem Ipsum is simply dummy text of the printing\n                                                and typesetting industry.\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "modal-body"
        }, "\n                                            ", HTML.P(HTML.STRONG("Lorem Ipsum is simply dummy"), " text of the printing and\n                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                                text ever since the 1500s, when an unknown\n                                                printer took a galley of type and scrambled it to make a type specimen\n                                                book. It has survived not only five centuries, but also the leap into\n                                                electronic typesetting,\n                                                remaining essentially unchanged."), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "modal-footer"
        }, "\n                                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default",
          "data-dismiss": "modal"
        }, "Close\n                                            "), "\n                                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Save changes"), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                    ", HTML.PRE("\n\n", HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), 'button type="button" class="btn btn-success"\n        data-toggle="modal" data-target="#myModal"', HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), "\n        Launch demo modal\n", HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), "/button", HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), "\n                    "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n                ", HTML.DIV({
      "class": "col-lg-6"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Optional size and colors")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Modals have two optional sizes, available via modifier classes to be placed on a\n                            .modal-dialog\n                        "), "\n\n                        ", HTML.DIV({
          "class": "text-center m-b-md"
        }, "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary",
          "data-toggle": "modal",
          "data-target": "#myModal5"
        }, "\n                                Large Modal\n                            "), "\n                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary",
          "data-toggle": "modal",
          "data-target": "#myModal6"
        }, "\n                                Small Modal\n                            "), "\n\n                            ", HTML.DIV({
          "class": "modal fade",
          id: "myModal5",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, "\n                                ", HTML.DIV({
          "class": "modal-dialog modal-lg"
        }, "\n                                    ", HTML.DIV({
          "class": "modal-content"
        }, "\n                                        ", HTML.DIV({
          "class": "color-line"
        }), "\n                                        ", HTML.DIV({
          "class": "modal-header"
        }, "\n                                            ", HTML.H4({
          "class": "modal-title"
        }, "Modal title"), "\n                                            ", HTML.SMALL({
          "class": "font-bold"
        }, "Lorem Ipsum is simply dummy text."), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "modal-body"
        }, "\n                                            ", HTML.P(HTML.STRONG("Lorem Ipsum is simply dummy"), " text of the printing and\n                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                                text ever since the 1500s, when an unknown\n                                                printer took a galley of type and scrambled it to make a type specimen\n                                                book. It has survived not only five centuries, but also the leap into\n                                                electronic typesetting,\n                                                remaining essentially unchanged."), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "modal-footer"
        }, "\n                                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default",
          "data-dismiss": "modal"
        }, "Close\n                                            "), "\n                                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Save changes"), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
          "class": "modal fade",
          id: "myModal6",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, "\n                                ", HTML.DIV({
          "class": "modal-dialog modal-sm"
        }, "\n                                    ", HTML.DIV({
          "class": "modal-content"
        }, "\n                                        ", HTML.DIV({
          "class": "color-line"
        }), "\n                                        ", HTML.DIV({
          "class": "modal-header"
        }, "\n                                            ", HTML.H4({
          "class": "modal-title"
        }, "Modal title"), "\n                                            ", HTML.SMALL({
          "class": "font-bold"
        }, "Lorem Ipsum is simply dummy text."), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "modal-body"
        }, "\n                                            ", HTML.P(HTML.STRONG("Lorem Ipsum is simply dummy"), " text of the printing and\n                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                                text ever since the 1500s, when an unknown\n                                                printer took a galley of type and scrambled it to make a type specimen\n                                                book. It has survived not only five centuries, but also the leap into\n                                                electronic typesetting,\n                                                remaining essentially unchanged."), "\n                                        "), "\n                                        ", HTML.DIV({
          "class": "modal-footer"
        }, "\n                                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default",
          "data-dismiss": "modal"
        }, "Close\n                                            "), "\n                                            ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Save changes"), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.P("\n                            You can add extra class to color your modal window avalible class (", HTML.CODE("hmodal-info"), ",\n                            ", HTML.CODE("hmodal-warning"), ", ", HTML.CODE("hmodal-success"), ", ", HTML.CODE("hmodal-danger"), ")\n                        "), "\n\n                        ", HTML.DIV({
          "class": "text-center m-t-md"
        }, "\n                            ", HTML.BUTTON({
          "class": "btn btn-success",
          type: "button",
          "data-toggle": "modal",
          "data-target": "#myModal7"
        }, "\n                                Success\n                            "), "\n                            ", HTML.BUTTON({
          "class": "btn btn-info",
          type: "button",
          "data-toggle": "modal",
          "data-target": "#myModal8"
        }, "\n                                Info\n                            "), "\n                            ", HTML.BUTTON({
          "class": "btn btn-warning",
          type: "button",
          "data-toggle": "modal",
          "data-target": "#myModal9"
        }, "\n                                Warning\n                            "), "\n                            ", HTML.BUTTON({
          "class": "btn btn-danger",
          type: "button",
          "data-toggle": "modal",
          "data-target": "#myModal10"
        }, "\n                                Danger\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "modal fade hmodal-success",
          id: "myModal7",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, "\n                            ", HTML.DIV({
          "class": "modal-dialog"
        }, "\n                                ", HTML.DIV({
          "class": "modal-content"
        }, "\n                                    ", HTML.DIV({
          "class": "color-line"
        }), "\n                                    ", HTML.DIV({
          "class": "modal-header"
        }, "\n                                        ", HTML.H4({
          "class": "modal-title"
        }, "Modal title"), "\n                                        ", HTML.SMALL({
          "class": "font-bold"
        }, "Lorem Ipsum is simply dummy text of the printing and\n                                            typesetting industry.\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-body"
        }, "\n                                        ", HTML.P(HTML.STRONG("Lorem Ipsum is simply dummy"), " text of the printing and\n                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                            text ever since the 1500s, when an unknown\n                                            printer took a galley of type and scrambled it to make a type specimen book.\n                                            It has survived not only five centuries, but also the leap into electronic\n                                            typesetting,\n                                            remaining essentially unchanged."), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-footer"
        }, "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default",
          "data-dismiss": "modal"
        }, "Close\n                                        "), "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Save changes"), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "modal fade hmodal-info",
          id: "myModal8",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, "\n                            ", HTML.DIV({
          "class": "modal-dialog"
        }, "\n                                ", HTML.DIV({
          "class": "modal-content"
        }, "\n                                    ", HTML.DIV({
          "class": "color-line"
        }), "\n                                    ", HTML.DIV({
          "class": "modal-header"
        }, "\n                                        ", HTML.H4({
          "class": "modal-title"
        }, "Modal title"), "\n                                        ", HTML.SMALL({
          "class": "font-bold"
        }, "Lorem Ipsum is simply dummy text of the printing and\n                                            typesetting industry.\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-body"
        }, "\n                                        ", HTML.P(HTML.STRONG("Lorem Ipsum is simply dummy"), " text of the printing and\n                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                            text ever since the 1500s, when an unknown\n                                            printer took a galley of type and scrambled it to make a type specimen book.\n                                            It has survived not only five centuries, but also the leap into electronic\n                                            typesetting,\n                                            remaining essentially unchanged."), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-footer"
        }, "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default",
          "data-dismiss": "modal"
        }, "Close\n                                        "), "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Save changes"), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "modal fade hmodal-warning",
          id: "myModal9",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, "\n                            ", HTML.DIV({
          "class": "modal-dialog"
        }, "\n                                ", HTML.DIV({
          "class": "modal-content"
        }, "\n                                    ", HTML.DIV({
          "class": "color-line"
        }), "\n                                    ", HTML.DIV({
          "class": "modal-header"
        }, "\n                                        ", HTML.H4({
          "class": "modal-title"
        }, "Modal title"), "\n                                        ", HTML.SMALL({
          "class": "font-bold"
        }, "Lorem Ipsum is simply dummy text of the printing and\n                                            typesetting industry.\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-body"
        }, "\n                                        ", HTML.P(HTML.STRONG("Lorem Ipsum is simply dummy"), " text of the printing and\n                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                            text ever since the 1500s, when an unknown\n                                            printer took a galley of type and scrambled it to make a type specimen book.\n                                            It has survived not only five centuries, but also the leap into electronic\n                                            typesetting,\n                                            remaining essentially unchanged."), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-footer"
        }, "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default",
          "data-dismiss": "modal"
        }, "Close\n                                        "), "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Save changes"), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.DIV({
          "class": "modal fade hmodal-danger",
          id: "myModal10",
          tabindex: "-1",
          role: "dialog",
          "aria-hidden": "true"
        }, "\n                            ", HTML.DIV({
          "class": "modal-dialog"
        }, "\n                                ", HTML.DIV({
          "class": "modal-content"
        }, "\n                                    ", HTML.DIV({
          "class": "color-line"
        }), "\n                                    ", HTML.DIV({
          "class": "modal-header"
        }, "\n                                        ", HTML.H4({
          "class": "modal-title"
        }, "Modal title"), "\n                                        ", HTML.SMALL({
          "class": "font-bold"
        }, "Lorem Ipsum is simply dummy text of the printing and\n                                            typesetting industry.\n                                        "), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-body"
        }, "\n                                        ", HTML.P(HTML.STRONG("Lorem Ipsum is simply dummy"), " text of the printing and\n                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                            text ever since the 1500s, when an unknown\n                                            printer took a galley of type and scrambled it to make a type specimen book.\n                                            It has survived not only five centuries, but also the leap into electronic\n                                            typesetting,\n                                            remaining essentially unchanged."), "\n                                    "), "\n                                    ", HTML.DIV({
          "class": "modal-footer"
        }, "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-default",
          "data-dismiss": "modal"
        }, "Close\n                                        "), "\n                                        ", HTML.BUTTON({
          type: "button",
          "class": "btn btn-primary"
        }, "Save changes"), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n\n                        ", HTML.DIV({
          "class": "m-t-md"
        }, "\n                    ", HTML.PRE("\n", HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), 'div class="modal fade hmodal-danger"', HTML.CharRef({
          html: "&gt;",
          str: ">"
        }), "\n"), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      "class": "row"
    }, "\n                ", HTML.DIV({
      "class": "col-lg-12"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call("Options")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("panel"), function() {
        return [ "\n\n                        ", HTML.P("\n                            Options can be passed via data attributes or JavaScript. For data attributes, append the\n                            option name to ", HTML.CODE("data-"), ", as in ", HTML.CODE('data-backdrop=""'), ".\n                        "), "\n\n                        ", HTML.DIV({
          "class": "table-responsive"
        }, "\n                            ", HTML.TABLE({
          "class": "table table-bordered table-striped"
        }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH({
          style: "width: 100px;"
        }, "Name"), "\n                                    ", HTML.TH({
          style: "width: 50px;"
        }, "type"), "\n                                    ", HTML.TH({
          style: "width: 50px;"
        }, "default"), "\n                                    ", HTML.TH("description"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("backdrop"), "\n                                    ", HTML.TD("boolean or the string ", HTML.CODE("'static'")), "\n                                    ", HTML.TD("true"), "\n                                    ", HTML.TD("Includes a modal-backdrop element. Alternatively, specify ", HTML.CODE("static"), "\n                                        for a backdrop which doesn't close the modal on click.\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("keyboard"), "\n                                    ", HTML.TD("boolean"), "\n                                    ", HTML.TD("true"), "\n                                    ", HTML.TD("Closes the modal when escape key is pressed"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("show"), "\n                                    ", HTML.TD("boolean"), "\n                                    ", HTML.TD("true"), "\n                                    ", HTML.TD("Shows the modal when initialized."), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("remote"), "\n                                    ", HTML.TD("path"), "\n                                    ", HTML.TD("false"), "\n                                    ", HTML.TD("\n                                        ", HTML.P(HTML.STRONG({
          "class": "text-danger"
        }, "This option is deprecated since v3.3.0 and will\n                                            be removed in v4."), " We recommend instead using client-side templating\n                                            or a data binding framework, or calling ", HTML.A({
          href: "http://api.jquery.com/load/"
        }, "jQuery.load"), " yourself."), "\n\n                                        ", HTML.P("If a remote URL is provided, ", HTML.STRONG("content will be loaded one time"), "\n                                            via jQuery's ", HTML.CODE("load"), " method and injected into the ", HTML.CODE(".modal-content"), "\n                                            div. If you're using the data-api, you may alternatively use the\n                                            ", HTML.CODE("href"), " attribute to specify the remote source. An example of this\n                                            is shown below:"), "\n\n                                        ", HTML.DIV({
          "class": "zero-clipboard"
        }, HTML.SPAN({
          "class": "btn-clipboard"
        }, "Copy")), "\n                                        ", HTML.DIV({
          "class": "highlight"
        }, "\n                                            ", HTML.PRE(HTML.CODE({
          "class": "language-html",
          "data-lang": "html"
        }, HTML.SPAN({
          "class": "nt"
        }, HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), "a"), " ", HTML.SPAN({
          "class": "na"
        }, "data-toggle="), HTML.SPAN({
          "class": "s"
        }, '"modal"'), " ", HTML.SPAN({
          "class": "na"
        }, "href="), HTML.SPAN({
          "class": "s"
        }, '"remote.html"'), " ", HTML.SPAN({
          "class": "na"
        }, "data-target="), HTML.SPAN({
          "class": "s"
        }, '"#modal"'), HTML.SPAN({
          "class": "nt"
        }, HTML.CharRef({
          html: "&gt;",
          str: ">"
        })), "Click me", HTML.SPAN({
          "class": "nt"
        }, HTML.CharRef({
          html: "&lt;",
          str: "<"
        }), "/a", HTML.CharRef({
          html: "&gt;",
          str: ">"
        })))), "\n                                        "), "\n                                    "), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n\n        "), "\n\n    " ];
  }) ];
}));

})();
